import { useState } from "react";
import { LuSearch } from "react-icons/lu";

interface ISearchProps {
  onSearchChange: (searchQuery: string) => void;
}

export const Search = ({ onSearchChange }: ISearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearchChange(e.target.value);
  }

  return (
    <div className="flex items-center justify-center cursor-pointer w-4/5">
      <div className="relative flex items-center justify-between w-4/5 py-2">
        <div className="absolute px-2 text-gray-400">
          <LuSearch />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Faça uma busca aqui..."
          className="flex items-center justify-center rounded-2xl text-sm text-gray-600 h-10 w-full px-8"
        />
      </div>
    </div>
  );
};
