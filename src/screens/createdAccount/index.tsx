import React from "react";
import { FaRegUser, FaTruck } from "react-icons/fa";

export const CreatedAccount = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="lg:w-6/12 w-full border-r border-gray-200">
        <div className="flex items-center justify-center mb-8 flex-col bg-primary py-6">
          <h1 className="text-2xl font-bold text-white">Cadastra-se</h1>
          <h4 className="text-lg text-gray-400 border-4">Informe seus dados</h4>
        </div>
        <div className="p-8 flex items-center justify-center">
          <div className="flex gap-10 items-start justify-center flex-col">
            <div className="flex items-center gap-2 mb-2">
              <FaRegUser />
              <h4 className="text-xl">Dados Pessoais</h4>
            </div>
            <p className="text-sm text-gray-500 mb-2">
              Solicitamos apenas as informações essenciais para a realização da
              compra
            </p>
            <span className="flex items-center border-b"></span>
            <form action="" className="py-6">
              <div className="flex items-start justify-start flex-col mb-4">
                <label className="text-sm text-gray-700">*E-mail</label>
                <input
                  type="text"
                  placeholder="Digite seu e-mail"
                  className="w-full h-10 border rounded-md px-2 text-gray-400"
                />
              </div>
              <div className="flex items-start justify-start flex-col mb-4">
                <label className="text-sm text-gray-700">*Nome Completo</label>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className="w-full h-10 border rounded-md px-2 text-gray-400"
                />
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-start justify-start flex-col">
                  <label className="text-sm text-gray-700">*CPF</label>
                  <input
                    type="text"
                    placeholder="Digite seu CPF"
                    className="w-full h-10 border rounded-md px-2 text-gray-400"
                  />
                </div>
                <div className="flex items-start justify-start flex-col">
                  <label className="text-sm text-gray-700">*Telefone</label>
                  <input
                    type="text"
                    placeholder="Digite seu Telefone"
                    className="w-full h-10 border rounded-md px-2 text-gray-400"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center w-full flex-col sm:w-1/2 py-6">
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <FaTruck />
                    <h4 className="text-xl">Dados de Envio e Cobrança</h4>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">
                    Preencha seus dados para envio e cobrança
                  </p>
                  <span className="flex items-center border-b"></span>

                  <div className="w-full flex items-center justify-around gap-2">
                    <div className="flex items-start justify-start flex-col py-4">
                      <label className="text-sm text-gray-700">
                        *CEP
                        <a
                          href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                          target="_blank"
                          className="px-2 text-sm text-blue-500 cursor-pointer"
                        >
                          Não sei meu Cep?
                        </a>
                      </label>
                      <input
                        type="text"
                        placeholder="Informe seu Cep"
                        className="w-full h-10 border rounded-md px-2 text-gray-400"
                      />
                    </div>
                    <div className="flex items-start justify-start flex-col py-4">
                      <label className="text-sm text-gray-700">*Endereço</label>
                      <input
                        type="text"
                        placeholder="Informe seu Endereço"
                        className="w-full h-10 border rounded-md px-2 text-gray-400"
                      />
                    </div>
                    <div className="flex items-end justify-end flex-col py-4">
                      <label className="text-sm text-gray-700">*Número</label>
                      <input
                        type="text"
                        className="w-10 h-10 border rounded-md text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between gap-2">
                    <div className="flex w-full items-start justify-start flex-col mb-4">
                      <label className="text-sm text-gray-700">
                        *Complemento
                      </label>
                      <input
                        type="text"
                        placeholder="Complemento"
                        className="h-10 border rounded-md px-2 text-gray-400"
                      />
                    </div>
                    <div className="flex w-full items-start justify-start flex-col mb-4">
                      <label className="text-sm text-gray-700">*Bairro</label>
                      <input
                        type="text"
                        placeholder="Bairro"
                        className="h-10 border rounded-md px-2 text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-full flex items-start justify-start flex-col mb-4">
                      <label className="text-sm text-gray-700">*Cidade</label>
                      <input
                        type="number"
                        placeholder="Cidade"
                        className="w-full h-10 border rounded-md px-2 text-gray-400"
                      />
                    </div>
                    <div className="w-full flex items-start justify-start flex-col mb-4">
                      <label className="text-sm text-gray-700">*Estado</label>
                      <select
                        className="w-full h-10 border rounded-md px-2 text-gray-400"
                        name="estado"
                        id="estado"
                      >
                        <option value="">Selecione o Estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex w-full items-start justify-start flex-col mb-4">
                      <label className="text-sm text-gray-700">
                        *Referência de Endereço
                      </label>
                      <input
                        type="text"
                        placeholder="Referência de Endereço"
                        className="h-10 border rounded-md px-2 text-gray-400"
                      />
                    </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
