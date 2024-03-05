import { LuSearch } from "react-icons/lu";

export const Search = () => {
  return (
    <div className="flex items-center justify-center cursor-pointer w-3/5">
      <div className="relative flex items-center justify-between w-4/5 py-2">
        <div className="absolute px-2 text-gray-400">
          <LuSearch />
        </div>
        <input
          type="text"
          placeholder="Faça uma busca aqui..."
          className="flex items-center justify-center rounded-2xl text-sm text-gray-600 h-10 w-full px-8"
        />
      </div>
    </div>
  );
};
