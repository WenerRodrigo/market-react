import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import Cart from "../../components/cart";
import { Login } from "../../components/login";
import { Search } from "../../components/search";
import SearchCep from "../../components/searchCep";
import { MdAccountCircle } from "react-icons/md";
import { MenuItem } from "../../components/menuSideMobile";

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
      <div className="flex items-center w-4/5">
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
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50">
            <div className="flex flex-col bg-white w-4/5 h-full relative">
              <IoCloseOutline
                className="text-2xl text-black self-end mr-4 mt-4 cursor-pointer"
                onClick={closeMobileMenu}
              />
              <div className="absolute flex items-center justify-center flex-row mt-4 px-4">
                <span className="flex items-center flex-col mr-2">
                  <MdAccountCircle className="text-xl flex items-center" />
                </span>
                <a href="#" className="mr-4">
                  Minha conta
                </a>
              </div>
              <div className="px-4 mt-4">
                <MenuItem text="Celulares" />
                <MenuItem text="Tablets" />
                <MenuItem text="Computadores" />
                <MenuItem text="Acessórios" />
                <MenuItem text="Ofertas" />
                <MenuItem text="Casa Mesa Banho" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
