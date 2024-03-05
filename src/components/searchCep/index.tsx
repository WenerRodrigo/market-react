import { IoLocationSharp } from "react-icons/io5";

const SearchCep = () => {
  return (
    <div className="flex items-center justify-between cursor-pointer">
      <div className="flex items-center w-3/5">
        <IoLocationSharp className="flex items-center justify-center text-5xl text-white" />
        <span className="text-sm text-white px-2 hover:text-gray-300">
          Digite seu CEP
        </span>
      </div>
    </div>
  );
};

export default SearchCep;
