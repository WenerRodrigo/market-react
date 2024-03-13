import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailAcess } from "../../components/emailAcess";
import { GoogleKey } from "../../components/googleKey";
import { FacebookKey } from "../../components/facebookKey";
import { EmailInputField } from "../../components/emailInputField";
import { PasswordInputField } from "../../components/passwordInputField";

export const LoginPopup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleShowPasswordClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
      <div className="bg-white rounded-lg shadow-lg p-8">
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
              <a href="#" className="text-xs text-blue-500 hover:underline">
                Esqueci minha senha
              </a>
              <div className="flex justify-between">
                <a href="#" className="text-xs text-blue-500 hover:underline">
                  Cadastre-se
                </a>
              </div>
            </div>
          </div>
        </form>
        <hr className="my-4 w-full" />
        <h2 className="text-md text-center mb-4">Ou use um acesso rápido</h2>
        <div className="flex flex-col w-full gap-2">
          <EmailAcess />
          <GoogleKey />
          <FacebookKey />
        </div>
        <div className="flex justify-center mt-4"></div>
      </div>
    </div>
  );
};
