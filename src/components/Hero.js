import React from "react";
import Herobg from "../img/hero.svg";

function Hero() {
  return (
    <>
      <div className="cover">
        <img
          src={Herobg}
          className="-z-1 w-full h-full "
          alt="SMA Negeri 1 Banjarbaru tercinta"
        ></img>
        <span>HALO</span>
      </div>
    </>
  );
}

export default Hero;
