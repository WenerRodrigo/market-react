import { useEffect, useState } from "react";
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";
import { Seals } from "../../components/seals";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Main } from "../../components/main";
import Banner from "../../components/banner";
import { LazyLoading } from "../../components/lazyLoading";
import Footer from "../../components/footer";
import { useCart } from "../../components/context";

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  discountedPrice?: number;
  model?: string;
  condition?: string;
  searchQuery?: string;
}

interface ICellPhonesProps {
  searchQuery: string;
}

export const CellPhones: React.FC<ICellPhonesProps> = ({ searchQuery }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<{ [key: string]: boolean }>({});
  const { addToCart } = useCart();
  const [productQuantity, setProductQuantity] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
        if (searchQuery) {
          url = `https://api.mercadolibre.com/sites/MLB/search?q=${searchQuery}`;
        }
        const response = await axios.get(url);
        setData(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleBuyClick = (product: Product) => {
    addToCart(product, productQuantity[product.id] || 1);
    setSelectedProducts({
      ...selectedProducts,
      [product.id]: true,
    });
    if (productQuantity[product.id]) {
      setProductQuantity({
        ...productQuantity,
        [product.id]: productQuantity[product.id] + 1,
      });
    } else {
      setProductQuantity({
        ...productQuantity,
        [product.id]: 1,
      });
    }
  };

  const handleFavoriteClick = () => {
    console.log("Adicionado aos favoritos");
  };

  const handleIncrementQuantity = (productId: string) => {
    setProductQuantity({
      ...productQuantity,
      [productId]: (productQuantity[productId] || 0) + 1,
    });
  };

  const handleDecrementQuantity = (productId: string) => {
    if (productQuantity[productId] && productQuantity[productId] > 1) {
      setProductQuantity({
        ...productQuantity,
        [productId]: productQuantity[productId] - 1,
      });
    } else if (productQuantity[productId] === 1) {
      handleRemoveProduct(productId);
    }
  };

  const handleRemoveProduct = (productId: string) => {
    const newProductQuantity = { ...productQuantity };
    delete newProductQuantity[productId];
    setProductQuantity(newProductQuantity);
    setSelectedProducts({
      ...selectedProducts,
      [productId]: false,
    });
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <>
      <Main />
      <Banner />
      <div className="flex flex-col items-center justify-center py-4">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <LazyLoading />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full max-w-6xl px-4">
            {data.map((product) => (
              <div
                key={product.id}
                className="border p-4 flex flex-col rounded-md hover:shadow-lg relative group"
              >
                <MdOutlineFavoriteBorder
                  onClick={handleFavoriteClick}
                  className="absolute text-gray-400 top-1 left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                />
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="mb-2 object-cover h-auto w-full"
                />
                <div className="flex flex-col justify-between h-32">
                  <div>
                    <h2 className="text-sm text-gray-600 mb-2">
                      {product.title}
                    </h2>
                    {product.discountedPrice && (
                      <p className="text-gray-700 mb-2">
                        Discounted Price: {formatPrice(product.discountedPrice)}
                      </p>
                    )}
                    {product.model && (
                      <p className="text-gray-700 mb-2">
                        Model: {product.model}
                      </p>
                    )}
                    <Seals />
                  </div>
                  <p className="text-black text-sm mb-2">
                    {formatPrice(product.price)}
                  </p>
                </div>
                {!selectedProducts[product.id] && (
                  <button
                    type="button"
                    className="bg-green-600 text-white rounded-md py-2 hover:bg-green-700"
                    onClick={() => handleBuyClick(product)}
                  >
                    Comprar
                  </button>
                )}

                {selectedProducts[product.id] && (
                  <div className="flex items-center justify-between mt-2 text-lg relative">
                    <button
                      className="flex items-center justify-center border w-10 rounded-md bg-gray-100"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      <span className="flex items-center justify-center border w-10 h-7 rounded-md border-none">
                        <FaRegTrashAlt className="text-red-600" />
                      </span>
                    </button>
                    <button
                      className="flex items-center justify-center border w-10 rounded-md bg-gray-100"
                      onClick={() => handleDecrementQuantity(product.id)}
                    >
                      -
                    </button>
                    <span className="text-md flex-1 text-center">
                      {productQuantity[product.id] || 0}
                    </span>
                    <button
                      className="flex items-center justify-center border w-10 rounded-md bg-gray-100"
                      onClick={() => handleIncrementQuantity(product.id)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
