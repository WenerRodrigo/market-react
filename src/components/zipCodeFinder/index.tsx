import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import axios from "axios";

interface ZipCodeFinderProps {
  onClose: () => void;
  onCepEntered: (cep: string) => void;
}

export const CepPopup = ({ onClose, onCepEntered }: ZipCodeFinderProps) => {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cepInvalido, setCepInvalido] = useState(false);

  const validaCep = () => {
    return (
      logradouro.trim() !== "" &&
      bairro.trim() !== "" &&
      cidade.trim() !== "" &&
      estado.trim() !== ""
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCepEntered(cep);
  };

  const handleClose = () => {
    onClose();
  };

  const cepMascara = (cep: string) => {
    if (cep.length <= 5) {
      return cep.replace(/(\d{5})(\d{0,3})/, "$1-$2");
    } else {
      return cep.slice(0, 9);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(cepMascara(e.target.value));
  };

  const buscarCep = async () => {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        setLogradouro(response.data.logradouro);
        setBairro(response.data.bairro);
        setCidade(response.data.localidade);
        setEstado(response.data.uf);
        setCepInvalido(false);
      })
      .catch(() => {
        setCepInvalido(true);
      })
      .finally(() => {
        setCep("");
      });
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white p-6 rounded-md w-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={handleClose}
        >
          <IoClose />
        </div>
        <h2 className="text-center text-lg py-4">Onde quer receber suas compras</h2>
        <div className="flex items-center justify-center w-80"> 
          <p className="text-sm text-center text-gray-500 py-2">Veja os custos e prazos de entrega de acordo com o seu endereço</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite o CEP"
            className="w-full px-2 py-1 border border-gray-400 text-gray-800 rounded-md h-10 mb-1 shadow-md"
            value={cep}
            maxLength={9}
            required
            onChange={handleChange}
          />
          <div className="flex items-center justify-end flex-col py-4 text-gray-700">
            {validaCep() && !cepInvalido && (
              <>
                <p>Logradouro - {logradouro}</p>
                <p>Bairro - {bairro}</p>
                <p>Cidade - {cidade}</p>
                <p>Estado - {estado}</p>
              </>
            )}

            {!validaCep() && !cepInvalido && (
              <p className="text-center py-2">Encontre seu CEP</p>
            )}
            {cepInvalido && (
              <p className="text-center text-red-600 py-2">Ops! CEP não encontrado</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white hover:bg-green-700 py-2 rounded-md w-4/5"
              onClick={() => buscarCep()}
            >
              Buscar
            </button>
          </div>
        </form>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};
