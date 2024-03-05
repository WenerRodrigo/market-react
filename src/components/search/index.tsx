import { LuSearch } from "react-icons/lu";


export const Search = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex items-center justify-between w-4/5 py-2">
        <div className="absolute px-2">
            <LuSearch />
        </div>
        <input type="text" placeholder="Faça uma busca aqui..." className="flex items-center justify-center rounded-lg text-sm h-8 w-full px-8"/>
      </div>
    </div>
  );
};
