import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";

export const RecoverPassword = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full bg-primary py-8">
        <h1 className="text-xl font-bold text-white">
          Escolha o método para recuperar a senha
        </h1>
      </div>

      <a href="#">
        <div className="flex items-center justify-center w-full py-8 cursor-pointer">
          <div className="flex items-center justify-center">
            <span className="mr-4 bg-blue-200 text-blue-500 text-2xl py-2 px-2 border border-blue-400 rounded-full flex items-center justify-center">
              <BiMessageDetail className="font-bold" />
            </span>
            <div>
              <h4 className="text-xl text-gray-800">SMS</h4>
              <p className="text-sm text-gray-500">
                Vamos enviar um código para o telefone terminado em 9999
              </p>
            </div>
          </div>
          <span className="px-8 flex items-center justify-center text-center">
            <MdOutlineNavigateNext className="text-xl text-gray-500" />
          </span>
        </div>
      </a>

      <a href="#">
        <div className="flex items-center justify-center w-full py-4 cursor-pointer">
          <div className="flex items-center justify-center">
            <span className="mr-4 bg-blue-200 text-blue-500 text-2xl py-2 px-2 border border-blue-400 rounded-full flex items-center justify-center">
              <FaWhatsapp className="font-bold" />
            </span>
            <div>
              <h4 className="text-xl text-gray-800">WhatsApp</h4>
              <p className="text-sm text-gray-500">
                Vamos enviar um código para o telefone terminado em 9999
              </p>
            </div>
          </div>
          <span className="px-8 flex items-center justify-center text-center">
            <MdOutlineNavigateNext className="text-xl text-gray-500" />
          </span>
        </div>
      </a>

      <a href="/my-password">
        <div className="flex items-center justify-center w-full py-8 cursor-pointer">
          <div className="flex items-center justify-center">
            <span className="mr-4 bg-blue-200 text-blue-500 text-2xl py-2 px-2 border border-blue-400 rounded-full flex items-center justify-center">
              <MdOutlineMailOutline className="font-bold" />
            </span>
            <div>
              <h4 className="text-xl text-gray-800">E-mail</h4>
              <p className="text-sm text-gray-500">
                Vamos enviar um código para o e-mail fulano1@google.com
              </p>
            </div>
          </div>
          <span className="px-8 flex items-center justify-center text-center">
            <MdOutlineNavigateNext className="text-xl text-gray-500" />
          </span>
        </div>
      </a>

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
