import React from "react";
import Logo from "../assets/img/logo.png";
import MetaMask from "./MetaMask";


const Header = () => {
  
  return (
    <div className="flex items-center  justify-between ">
      <div className="flex items-center flex-1 space-x-3 ">
        <img src={Logo} alt="imge logo" className="w-10 h-10" />
        <h3 className="text-white font-bold text-lg">ENDFT</h3>
      </div>
      <ul className="flex items-center flex-1 space-x-16">
        <li>
          <a href="#" className="text-white">
            Marketplace
          </a>
        </li>
        <li>
          <a href="#" className="text-white">
            Collection
          </a>
        </li>
        <li>
          <a href="#" className="text-white">
            Community
          </a>
        </li>
        <li>
          <a href="#" className="text-white">
            Create
          </a>
        </li>
      </ul>
      <MetaMask />
    </div>
  );
};

export default Header;

