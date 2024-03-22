import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";

export const CreatedAccount = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-center mb-8 flex-col">
        <h1 className="text-2xl font-bold">Cadastra-se</h1>
        <h4 className="text-lg text-gray-400">Informe seus dados</h4>
      </div>
      <div className="w-full p-8 flex items-center justify-center">
        <div className="flex gap-10 items-center justify-center border" >
          <div className="w-full">
            <div className="flex items-center gap-2">
              <FaRegUser />
              <h4 className="text-xl">Dados Pessoais</h4>
            </div>
            <p className="text-sm text-gray-400">
              Solicitamos apenas as informações essenciais para a realização da
              compra
            </p>
            <form action="" className="">
              <div className="mb-4">
                <label>*E-mail</label>
                <input type="text" placeholder="Digite seu e-mail" />
              </div>
              <div className="mb-4"> 
                <label>*Nome Completo</label>
                <input type="text" placeholder="Digite seu nome" />
              </div>
              <div className="mb-4"> 
                <label>*CPF</label>
                <input type="number" placeholder="Digite seu CPF" />
              </div>
              <div className="mb-4">
                <label>*Telefone</label>
                <input type="number" placeholder="Digite seu Telefone" />
              </div>
            </form>
          </div>

          <div className="w-full border">
            <div className="flex items-center gap-2">
              <FaTruckFast />
              <h4 className="text-xl">Dados Pessoais</h4>
            </div>
            <p className="text-sm text-gray-400">
              Preencha seus dados para envio e cobrança
            </p>
            <form action="" className="">
              <div className="mb-4"> {/* Adicionando espaço abaixo */}
                <label>*E-mail</label>
                <input type="text" placeholder="Digite seu e-mail" />
              </div>
              <div className="mb-4"> {/* Adicionando espaço abaixo */}
                <label>*Nome Completo</label>
                <input type="text" placeholder="Digite seu nome" />
              </div>
              <div className="mb-4"> {/* Adicionando espaço abaixo */}
                <label>*CPF</label>
                <input type="number" placeholder="Digite seu CPF" />
              </div>
              <div className="mb-4"> {/* Adicionando espaço abaixo */}
                <label>*Telefone</label>
                <input type="number" placeholder="Digite seu Telefone" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
