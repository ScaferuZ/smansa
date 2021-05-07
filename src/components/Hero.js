import React from "react";
import { Button } from "./Button";

function Hero() {
  return (
    <div className="bg-hero-smansa h-screen bg-cover font-Poppins text-white">
      <div className="pt-64 text-left mx-auto px-32 space-y-6">
        <h2 className="text-2xl">The great place to be smart</h2>
        <h1 className="font-bold text-6xl">
          SMA NEGERI 1 <br /> BANJARBARU
        </h1>
        <Button> Hey lol</Button>
      </div>
    </div>
  );
}

export default Hero;
