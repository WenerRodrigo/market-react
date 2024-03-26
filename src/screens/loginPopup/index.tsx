import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleKey } from "../../components/googleKey";
import { FacebookKey } from "../../components/facebookKey";
import { EmailInputField } from "../../components/emailInputField";
import { PasswordInputField } from "../../components/passwordInputField";
import KeyAcess from "../../components/keyAcess";


export const LoginPopup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [closePopup, setClosePopup] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setClosePopup(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleShowPasswordClick = (event: any) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  if (closePopup) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
      <div ref={popupRef} className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-xl text-center mb-4">Entrar com e-mail e senha</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full">
            <EmailInputField
              name="email"
              placeholder="Digite seu e-mail"
              control={control}
            />
            <PasswordInputField
              name="password"
              placeholder="Digite sua senha"
              control={control}
              showPassword={showPassword}
              handleShowPasswordClick={handleShowPasswordClick}
            />
            <div className="mt-4">
              <button
                type="submit"
                className="bg-green-600 text-white hover:bg-green-700 py-2 px-4 rounded-md w-full"
              >
                Entrar
              </button>
            </div>
            <div className="flex justify-between mt-4">
              <a href="/recover-password" className="text-xs text-blue-500 hover:underline">
                Esqueci minha senha
              </a>
              <div className="flex justify-between">
                <a href="/register" className="text-xs text-blue-500 hover:underline">
                  Cadastre-se
                </a>
              </div>
            </div>
          </div>
        </form>
        <hr className="my-4 w-full" />
        <KeyAcess />
        <div className="flex flex-col w-full gap-2">
          <GoogleKey />
          <FacebookKey />
        </div>
        <div className="flex justify-center mt-4">
        </div>
      </div>
    </div>
  );
};
