import React from "react";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <nav className="flex justify-between mx-auto py-5 px-3 md:px-32 font-Poppins bg-main text-white">
      {/* nav kiri */}
      <div className="font-bold text-lg">
        <Link to="/" className="flex items-center space-x-6">
          <img src={Logo} alt="logo smansa" />
          <h1>SMA NEGERI 1 BANJARBARU</h1>
        </Link>
      </div>
      {/*nav kanan  */}
      <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold">
        <Link to="/" className="nav__secondary">
          HOME
        </Link>
        <Link to="/" className="nav__secondary">
          PROFIL SEKOLAH
        </Link>
        <div className="flex items-center space-x-2">
          <Link to="/" className="nav__secondary">
            AKADEMIK
          </Link>
          <AiOutlineDown />
        </div>
        <Link to="/" className="nav__secondary">
          BERITA
        </Link>
        <Link to="/" className="nav__secondary">
          KONTAK
        </Link>
      </div>
      {/* mobile button */}
      <div className="md:hidden flex">
        <button className="focus:outline-none">
          <AiOutlineMenu />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
