import React from "react";

function Card() {
  return (
    <div className="grid grid-cols-3 py-14 gap-5 max-w-4xl h-44 ml-32 bg-card rounded-xl -mt-24 font-Poppins">
      <div className="space-y-2 border-r-2 border-secondary border-opacity-50">
        <h2 className="text-4xl text-secondary font-bold">680</h2>
        <p className="text-white text-base">Siswa</p>
      </div>
      <div className="space-y-2 border-r-2 border-secondary border-opacity-50">
        <h2 className="text-4xl text-secondary font-bold">49</h2>
        <p className="text-white text-base">Guru</p>
      </div>
      <div className="space-y-2 ">
        <h2 className="text-4xl text-secondary font-bold">21</h2>
        <p className="text-white text-base">Kelas</p>
      </div>
    </div>
  );
}

export default Card;
