import Cart from "../../components/cart";
import { Login } from "../../components/login";
import { Search } from "../../components/search";
import SearchCep from "../../components/searchCep";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export const Header = () => {
  return (
    <div className="flex items-center justify-center bg-secondary py-2">
      <div className="flex items-center w-4/5">
        <h1 className="text-2xl text-white font-bold hidden sm:flex">Market</h1>
        <span className="sm:hidden">
          <HiOutlineMenuAlt1 className="text-2xl text-white cursor-pointer mr-4" />
        </span>
        <Search />
        <SearchCep />
        <Login />
        <Cart />
      </div>
    </div>
  );
};
