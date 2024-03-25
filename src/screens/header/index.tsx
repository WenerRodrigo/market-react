import { useState, FC } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import Cart from "../../components/cart";
import { Login } from "../../components/login";
import { Search } from "../../components/search";
import { MdAccountCircle } from "react-icons/md";
import { MenuItem } from "../../components/menuSideMobile";
import { IoIosArrowForward } from "react-icons/io";
import { SearchCep } from "../../components/searchCep";
import { LoginPopup } from "../loginPopup";
import { DropDownMenu } from "../../components/dropdownMenu";
interface HeaderProps {
  onSearchChange: (value: string) => void;
}

export const Header: FC<HeaderProps> = ({ onSearchChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-center bg-secondary py-2 z-50">
      <div className="flex items-center w-4/5 relative">
        <a href="/">
          <h1 className="text-2xl text-white font-bold hidden sm:flex">
            Market
          </h1>
        </a>
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
        <Search onSearchChange={onSearchChange} />
        <SearchCep />
        <Login />
        <DropDownMenu />
        <Cart />
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10">
            <div
              className="flex flex-col bg-white w-4/5 h-full relative"
              style={{ zIndex: 50 }}
            >
              <IoCloseOutline
                className="text-2xl text-black self-end mr-4 mt-4 cursor-pointer z-50"
                onClick={closeMobileMenu}
              />
              <div className="absolute flex items-center justify-center flex-row mt-4 px-4 z-50">
                <span className="flex items-center flex-col mr-2">
                  <MdAccountCircle className="text-xl flex items-center" />
                </span>
                <button onClick={toggleLoginPopup} className="mr-4 z-50">
                  Minha conta
                </button>
              </div>
              <span className="block border-b border-gray-300 w-full mt-4"></span>
              <div className="px-2 mt-4 z-50">
                <a href="/">
                  <MenuItem text="Celulares" />
                </a>
                <a href="/tablets">
                  <MenuItem text="Tablets" />
                </a>
                <a href="/computers">
                  <MenuItem text="Computadores" />
                </a>
                <a href="/acessory">
                  <MenuItem text="Acessórios" />
                </a>
                <a href="/offers">
                  <MenuItem text="Ofertas" />
                </a>
                <a href="/house">
                  <MenuItem text="Casa Mesa Banho" />
                </a>
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
        {showLoginPopup && <LoginPopup />}
      </div>
    </div>
  );
};
