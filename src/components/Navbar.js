import React, { useState } from "react";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import onClickOutside from "react-onclickoutside";

function Navbar() {
  // toggle mobile nav menu
  const [menu, setMenu] = useState(false);
  // click outside mobile nav close
  Navbar.handleClickOutside = () => setMenu(false);

  return (
    <nav className="tap__highlight fixed left-0 right-0 font-Poppins bg-main text-white">
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
        <div className="hidden sm:flex items-center text-sm font-medium">
          <Link to="/" className="nav__secondary">
            Home
          </Link>
          <Link to="/" className="nav__secondary">
            Profil Sekolah
          </Link>
          <div className="group inline-block relative">
            <Link
              to="/"
              className="nav__secondary inline-flex items-center space-x-2"
            >
              <span>Akademik</span>
              <AiOutlineDown className="text-base" />
            </Link>
            <div className="nav__dropdown">
              <Link className="nav__dropdownmenu">Peserta Didik</Link>
              <Link className="nav__dropdownmenu">Jadwal Pelajaran</Link>
            </div>
          </div>
          <Link to="/" className="nav__secondary">
            Berita
          </Link>
          <Link to="/" className="nav__secondary">
            Kontak
          </Link>
        </div>
        {/* Dropdown menu button  */}
        <div className="md:hidden flex items-center text-xl">
          <button className="focus:outline-none">
            <AiOutlineMenu onClick={() => setMenu(!menu)} />
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {menu && (
        // mobile dropdown
        <div className="flex flex-col text-align justify space-y-4 pb-4 top-0 transition-all duration-1000 md:hidden">
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
      )}
    </nav>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Navbar.handleClickOutside,
};

export default onClickOutside(Navbar, clickOutsideConfig);
