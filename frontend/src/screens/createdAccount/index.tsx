import { useState } from "react";
import { FaRegUser, FaTruck } from "react-icons/fa";

export const CreatedAccount = () => {
  const [isCheckedOn, setIsCheckedOn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCheckboxChange = (event: any) => {
    const targetName = event.target.name;
    const targetValue = event.target.value === "true" ? true : false;
    if (targetName === "isCheckedOn") {
      setIsCheckedOn(targetValue);
      setIsChecked(false);
    } else if (targetName === "isChecked") {
      setIsChecked(targetValue);
      setIsCheckedOn(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        <div className="flex items-center justify-center mb-8 flex-col bg-primary py-6">
          <h1 className="text-2xl font-bold text-white">Cadastra-se</h1>
          <h4 className="text-lg text-gray-400">Informe seus dados</h4>
        </div>
        <div className="p-8 flex items-center justify-center">
          <div className="flex items-start justify-center flex-col">
            <div className="flex items-center gap-2 mb-2">
              <FaRegUser />
              <h4 className="text-xl">Dados Pessoais</h4>
            </div>
            <p className="text-sm text-gray-500 border-b w-full py-2">
              Solicitamos apenas as informações essenciais para a realização da
              compra
            </p>
            <form action="" className="py-4">
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
              <div className="flex items-center justify-center w-full flex-col py-6">
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <FaTruck />
                    <h4 className="text-xl">Dados de Envio e Cobrança</h4>
                  </div>
                  <p className="text-sm text-gray-500 py-2 border-b w-full">
                    Preencha seus dados para envio e cobrança
                  </p>
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
                        className="w-full h-10 border rounded-md px-2 text-gray-400"
                      />
                    </div>
                    <div className="flex w-full items-start justify-start flex-col mb-4">
                      <label className="text-sm text-gray-700">*Bairro</label>
                      <input
                        type="text"
                        placeholder="Bairro"
                        className="w-full h-10 border rounded-md px-2 text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-full flex items-start justify-start flex-col mb-4">
                      <label className="text-sm text-gray-700">*Cidade</label>
                      <input
                        type="text"
                        placeholder="Cidade"
                        className="w-full h-10 border rounded-md px-2 text-gray-400"
                      />
                    </div>
                    <div className="w-full flex items-start justify-start flex-col mb-4">
                      <label className="w-full text-sm text-gray-700">
                        *Estado
                      </label>
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
                      className="w-full h-10 border rounded-md px-2 text-gray-400"
                    />
                  </div>
                  <div className="flex items-start justify-start">
                    <span className="text-sm text-gray-700">
                      Desejo receber avisos de ofertas por e-mail
                    </span>
                  </div>
                  <div className="flex items-center justify-start ">
                    <label className="text-md mr-4">
                      <input
                        type="radio"
                        name="isCheckedOn"
                        value="true"
                        className="mr-2 text-center"
                        checked={isCheckedOn}
                        onChange={handleCheckboxChange}
                      />
                      Sim
                    </label>
                    <label className="text-md">
                      <input
                        type="radio"
                        name="isChecked"
                        value="true"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      Não
                    </label>
                  </div>
                  <div>
                    <label className="text-sm">
                      <input type="checkbox" name="" id="" className="mr-2" />
                      Li os <strong className="border-b">
                        Termos de Uso
                      </strong>
                      e aceito o uso dos meus dados
                    </label>
                  </div>
                  <div className="flex items-start justify-end">
                    <button className="flex items-center justify-end bg-green-600 hover:bg-green-700 text-white h-12 rounded-md px-4">
                      Cadastrar
                    </button>
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
