import { MdAccountCircle } from "react-icons/md";

export const Login = () => {
  return (
    <div className="flex items-center justify-between cursor-pointer">
      <div className="flex items-center w-3/5">
        <MdAccountCircle className="flex items-center justify-center text-5xl text-white" />
        <span className="text-sm text-white px-2 hover:text-gray-300">
          Faça login ou Cadastre-se
        </span>
      </div>
    </div>
  );
};
