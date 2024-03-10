import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { LoginPopup } from "../../screens/loginPopup";

export const Login = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="hidden md:flex items-center justify-start cursor-pointer">
      <div className="flex items-center" onClick={toggleLogin}>
        <MdAccountCircle className="text-4xl text-white" />
        <span className="text-sm text-white px-2 hover:text-gray-300">
          Faça login ou Cadastre-se
        </span>
      </div>
      {showLogin && <LoginPopup toggleLogin={toggleLogin} />}
    </div>
  );
};