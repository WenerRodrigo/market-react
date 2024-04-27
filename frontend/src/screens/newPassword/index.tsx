import { useForm } from "react-hook-form";
import { EmailInputField } from "../../components/emailInputField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const NewPassword = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center w-full flex-col">
      <div className="flex items-center justify-center text-xl py-8 text-white font-bold bg-primary w-full">
        <h1>Recuperar senha</h1>
      </div>
      <div className="flex items-center justify-center w-full">
        <span className="text-lg text-gray-500 py-4 text-center">
          Para recuperar seu acesso, precisamos do seu E-mail, CPF ou CNPJ.
        </span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-start justify-start flex-col mb-4">
          <label className="text-sm text-gray-700">*E-mail, CPF ou CPNJ</label>
          <EmailInputField
            name="email"
            placeholder="Digite seu e-mail"
            control={control}
          />
          <button className="flex items-center justify-center w-full bg-green-500 rounded-md py-2 mt-2 text-white hover:bg-green-600">
            Continuar
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center flex-col py-8">
        <span className="font-bold text-gray-700 text-md text-center">
          Precisa de Ajuda?
        </span>
        <p className="text-sm text-center">
          Caso não lembre seu e-mail de cadastro e tenha alterado seu número de
          celular
          <a href="#" target="_blank" className="text-blue-600">
            entre em contato com nosso SAC{" "}
          </a>
          de segunda à sábado, das 8h00 às 19h00.
        </p>
      </div>
    </div>
  );
};
