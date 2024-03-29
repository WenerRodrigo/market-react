import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, Resolver, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useEffect, useState } from "react";

interface IFormData {
  confirmToken: string[] | undefined;
}

export const ValidateCode = () => {
  const [seconds, setSeconds] = useState(60);
  const [showTimer, setShowTimer] = useState(false);

  const navigate = useNavigate();
  const { email } = useParams<{ email: string }>();

  const schema = yup.object({
    confirmToken: yup.array().of(yup.string().required("Campo obrigatório")),
  });

  const {
    control,
    setFocus,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema) as Resolver<IFormData>,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const startTimer = (e: any) => {
    e.preventDefault();
    setShowTimer(true);
    setSeconds(60);
  };

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (showTimer && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [showTimer, seconds]);

  const handleBack = () => {
    navigate("/recover-password");
  };

  const confirmToken = errors.confirmToken;

  return (
    <div className="flex items-center justify-center flex-col w-full">
      <div className="p-4 rounded-md border border-gray-300 mt-6 h-full">
        <span className="text-sm text-gray-700">insira o código:</span>
        <form className="form-content-code">
          <div
            className={`grid grid-cols-6 gap-2 ${
              errors.confirmToken ? "has-error" : ""
            }`}
          >
            {Array.from({ length: 6 }).map((digit, index) => {
              return (
                <Controller
                  key={index}
                  name={`confirmToken.${index}`}
                  defaultValue=""
                  control={control}
                  render={({ field: { onChange, ...props } }) => (
                    <input
                      className="w-12 h-12 text-center border border-gray-300 rounded"
                      type="text"
                      maxLength={1}
                      onChange={(e) => {
                        onChange(e.target.value);
                        if (e.target.value === "") {
                          setFocus(`confirmToken.${index - 1}`);
                        } else {
                          setFocus(`confirmToken.${index + 1}`);
                        }
                      }}
                      {...props}
                    />
                  )}
                />
              );
            })}
          </div>
          {confirmToken && (
            <span className="error-message text-red-500">
              {confirmToken[0]?.message}
            </span>
          )}
          <div className="flex items-center mt-4">
            <button onClick={startTimer} className="text-sm text-blue-500">
              Reenviar código
            </button>
          </div>
          {showTimer && (
            <div className="mt-4 text-sm text-gray-400">
              Tempo restante:{" "}
              {seconds > 0
                ? `${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? "0" : ""}${
                    seconds % 60
                  }`
                : "00:00"}
            </div>
          )}
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center justify-between bg-blue-600 py-2 px-2 rounded-md hover:bg-blue-700">
              <button className="text-sm text-white">Confirmar código</button>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleBack}
                className="text-sm text-blue-500 border border-transparent hover:border-blue-500 hover:bg-transparent py-2 px-2 rounded-md"
              >
                Escolher outro método
              </button>
            </div>
            <span className="result-code">{email}</span>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center flex-col py-8">
        <span className="font-bold text-gray-700 text-md">
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
