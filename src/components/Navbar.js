import React from "react";
import Logo from "../img/logo.svg";

function Navbar() {
  return (
    <nav className="flex justify-between max-w-7xl mx-auto py-5 px-4 bg-gray-400">
      {/* nav kiri */}
      <div className="flex items-center space-x-6">
        <img src={Logo} alt="logo smansa" />
        <h1>SMAN 1 BANJARBARU</h1>
      </div>
      {/*nav kanan  */}
      <div>kanan</div>
    </nav>
  );
}

export default Navbar;
