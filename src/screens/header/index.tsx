import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import Cart from "../../components/cart";
import { Login } from "../../components/login";
import { Search } from "../../components/search";
import { MdAccountCircle } from "react-icons/md";
import { MenuItem } from "../../components/menuSideMobile";
import { IoIosArrowForward } from "react-icons/io";
import { SearchCep } from "../../components/searchCep";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-center bg-secondary py-2 z-50">
      <div className="flex items-center w-4/5 relative">
        <h1 className="text-2xl text-white font-bold hidden sm:flex">Market</h1>
        <span className="sm:hidden">
          {isMobileMenuOpen ? (
            <IoCloseOutline
              className="text-2xl text-white cursor-pointer mr-4"
              onClick={closeMobileMenu}
            />
          ) : (
            <HiOutlineMenuAlt1
              className="text-2xl text-white cursor-pointer mr-4"
              onClick={toggleMobileMenu}
            />
          )}
        </span>
        <Search />
        <SearchCep />
        <Login />
        <Cart />

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
            <div className="flex flex-col bg-white w-4/5 h-full relative z-50">
              <IoCloseOutline
                className="text-2xl text-black self-end mr-4 mt-4 cursor-pointer z-50"
                onClick={closeMobileMenu}
              />
              <div className="absolute flex items-center justify-center flex-row mt-4 px-4 z-50">
                <span className="flex items-center flex-col mr-2">
                  <MdAccountCircle className="text-xl flex items-center" />
                </span>
                <a href="#" className="mr-4">
                  Minha conta
                </a>
              </div>
              <span className="block border-b border-gray-300 w-full mt-4"></span>
              <div className="px-2 mt-4 z-50">
                <MenuItem text="Celulares" />
                <MenuItem text="Tablets" />
                <MenuItem text="Computadores" />
                <MenuItem text="Acessórios" />
                <MenuItem text="Ofertas" />
                <MenuItem text="Casa Mesa Banho" />
                <div className="mt-4 flex items-center justify-between z-50">
                  <a href="#" className="text-red-500">
                    Sair
                  </a>
                  <IoIosArrowForward />
                </div>
                <span className="block border-b border-gray-300 w-full mt-4 z-50"></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
