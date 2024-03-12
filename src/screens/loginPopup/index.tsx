import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { FacebookKey } from "../../components/facebookKey";
import { EmailAcess } from "../../components/emailAcess";
import { GoogleKey } from "../../components/googleKey";

interface ILogin {
  toggleLogin: () => void;
}

export const LoginPopup = ({ toggleLogin }: ILogin) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({
    email: "",
    password: "",
  });

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

  const handleLogin = () => {
    const schema = yup.object().shape({
      email: yup.string().email("Email inválido").required("Campo obrigatório"),
      password: yup.string().required("Campo obrigatório"),
    });

    schema
      .validate({ email, password }, { abortEarly: false })
      .then(() => {
        console.log("Usuário autenticado!");
      })
      .catch((error) => {
        const newErrors: { email?: string; password?: string } = {};
        error.inner.forEach((err: { path: string; message: string | undefined }) => {
          newErrors[err.path as keyof typeof errors] = err.message;
        });
        setErrors(newErrors);
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div ref={popupRef} className="bg-white p-6 rounded-md w-auto">
        <h2 className="text-center py-4">Entre com email ou senha</h2>
        <div className="mb-2 w-full py-1 px-4">
          <input
            type="text"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-2 py-1 border ${
              errors.email ? "border-red-500" : "border-gray-400"
            } text-gray-800 rounded-md h-10`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-1 py-2 px-4">
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-2 py-1 border ${
              errors.password ? "border-red-500" : "border-gray-400"
            } text-gray-800 rounded-md h-10`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>
        <div className="flex items-center justify-between mb-4 w-full px-4">
          <a
            href="#"
            className="text-back text-sm text-gray-800 hover:text-primary"
          >
            Esqueceu a senha?
          </a>
          <div className="flex-grow"></div>
          <a
            href="#"
            className="text-back text-sm text-gray-800 hover:text-primary"
          >
            Cadastra-se
          </a>
        </div>
        <FacebookKey />
        <EmailAcess />
        <GoogleKey />
        <div className="flex justify-center items-center py-4 w-full">
          <button
            onClick={handleLogin}
            className="bg-green-600 text-white hover:bg-green-700 py-2 rounded-md w-4/5"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};
