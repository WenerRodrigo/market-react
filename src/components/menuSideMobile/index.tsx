import { IoIosArrowForward } from "react-icons/io";

export const MenuItem = ({ text }: { text: string }) => {
  return (
    <div>
      <div className="flex items-center justify-center mt-2">
        <span className="flex items-center justify-between w-full">
          {text}
          <IoIosArrowForward />
        </span>
      </div>
      <span className="block border-b border-gray-300 w-full mt-1"></span>
    </div>
  );
};