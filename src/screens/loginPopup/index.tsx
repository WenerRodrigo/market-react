import { useEffect, useRef } from "react";
import { FacebookKey } from "../../components/facebookKey";
import { EmailAcess } from "../../components/emailAcess";
import { GoogleKey } from "../../components/googleKey";

interface ILogin {
  toggleLogin: () => void;
}

export const LoginPopup = ({ toggleLogin }: ILogin) => {
  const popupRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      toggleLogin();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div ref={popupRef} className="bg-white p-6 rounded-md w-auto">
        <h2 className="text-center py-4">Entre com email ou senha</h2>
        <div className="mb-2 w-full py-1 px-4">
          <input
            type="text"
            placeholder="Digite seu email"
            className="w-full px-2 py-1 border border-gray-400 text-gray-800 rounded-md h-10"
          />
        </div>
        <div className="mb-1 py-2 px-4">
          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-full px-2 py-1 border border-gray-400 text-gray-800 rounded-md h-10"
          />
        </div>
        <div className="flex items-center justify-between mb-4 w-full px-4">
          <a href="#" className="text-back text-sm text-gray-800">
            Esqueceu a senha?
          </a>
          <div className="flex-grow"></div>
          <a href="#" className="text-back text-sm text-gray-800">
            Cadastra-se
          </a>
        </div>
        <FacebookKey />
        <EmailAcess />
        <GoogleKey />
        <div className="flex justify-center items-center py-4">
          <button className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md w-4/5">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};
