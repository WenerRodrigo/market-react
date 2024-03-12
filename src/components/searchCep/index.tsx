import React, { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { CepPopup } from '../zipCodeFinder';

export const SearchCep = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div
        className="hidden md:flex items-center justify-center cursor-pointer"
        onClick={togglePopup}
      >
        <div className="flex items-center">
          <IoLocationSharp className="flex items-center justify-center text-3xl text-white" />
          <span className="text-sm text-white px-2 hover:text-gray-300">
            Digite seu CEP
          </span>
        </div>
      </div>

      {showPopup && <CepPopup onClose={togglePopup} />}
    </>
  );
};