import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { CepPopup } from "../zipCodeFinder";

export const SearchCep = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [enteredCep, setEnteredCep] = useState("");

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div
        className="hidden md:flex items-center w-60 justify-center cursor-pointer flex-col"
        onClick={togglePopup}
      >
        {enteredCep ? (
          <span className="flex items-center text-sm text-white px-2 hover:text-gray-300 mr-4">
            <IoLocationSharp className="flex items-center justify-center text-2xl text-white" />
            <span className="text-yellow-500">Cep:&nbsp;</span>
            {enteredCep}
          </span>
        ) : (
          <div className="flex items-center">
            <IoLocationSharp className="flex items-center justify-center text-3xl text-white" />
            <span className="text-sm text-white px-2 hover:text-gray-300">
              Digite seu CEP
            </span>
          </div>
        )}
      </div>

      {showPopup && (
        <CepPopup onClose={togglePopup} onCepEntered={setEnteredCep} />
      )}
    </>
  );
};
