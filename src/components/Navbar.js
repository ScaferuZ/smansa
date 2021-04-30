import React, { useState } from "react";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [menu, setMenu] = useState(false);

  let menuNav;

  if (menu) {
    menuNav = (
      // mobile dropdown
      <div className="flex flex-col text-align justify space-y-4 pb-4  md:hidden">
        <Link to="/" className="nav__mobile">
          HOME
        </Link>
        <Link to="/" className="nav__mobile">
          PROFIL SEKOLAH
        </Link>
        <Link to="/" className="flex items-center justify-center space-x-2">
          <h1 className="nav__mobile">AKADEMIK</h1>
          <AiOutlineDown />
        </Link>
        <Link to="/" className="nav__mobile">
          BERITA
        </Link>
        <Link to="/" className="nav__mobile">
          KONTAK
        </Link>
      </div>
    );
  }
  return (
    <nav className="tap__highlight font-Poppins bg-main text-white">
      <div className="flex justify-between mx-auto py-5 px-3 sm:px-3 md:px-5 lg:px-32">
        {/* nav kiri */}
        <div className="font-bold text-lg">
          <Link
            to="/"
            className="flex items-center space-x-2 text-sm md:space-x-6 md:text-lg"
          >
            <img src={Logo} alt="logo smansa" />
            <h1>SMA NEGERI 1 BANJARBARU</h1>
          </Link>
        </div>
        {/*nav kanan  */}
        <div className="hidden sm:flex items-center space-x-6 text-sm font-semibold">
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
        {/* Dropdown menu button  */}
        <div className="md:hidden flex items-center text-xl">
          <button className="focus:outline-none">
            <AiOutlineMenu onClick={(e) => setMenu(!menu)} />
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {menuNav}
    </nav>
  );
}

export default Navbar;
