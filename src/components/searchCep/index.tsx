import { IoLocationSharp } from "react-icons/io5";

const SearchCep = () => {
  return (
    <div className="hidden md:flex items-center justify-start cursor-pointer">
      <div className="flex items-center">
        <IoLocationSharp className="flex items-center justify-center text-3xl text-white" />
        <span className="text-sm text-white px-2 hover:text-gray-300">
          Digite seu CEP
        </span>
      </div>
    </div>
  );
};

export default SearchCep;
