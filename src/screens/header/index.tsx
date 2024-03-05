import { Login } from "../../components/login";
import { Search } from "../../components/search";

export const Header = () => {
  return (
    <div className="flex items-center justify-center bg-secondary py-2">
      <div className="flex items-center w-4/5">
        <h1 className="text-2xl text-white font-bold">Market</h1>
        <Search />
        <Login />
      </div>
    </div>
  );
};
