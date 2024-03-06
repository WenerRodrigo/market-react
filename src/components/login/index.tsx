import { MdAccountCircle } from "react-icons/md";

export const Login = () => {
  return (
    <div className="hidden md:flex items-center justify-start cursor-pointer">
      <div className="flex items-center">
        <MdAccountCircle className="text-4xl text-white" />
        <span className="text-sm text-white px-2 hover:text-gray-300">
          Faça login ou Cadastre-se
        </span>
      </div>
    </div>
  );
};
