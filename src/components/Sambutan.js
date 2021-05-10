import React from "react";
import Clasroom from "../img/Classroom.svg";
import { Button } from "./Button";

function Sambutan() {
  return (
    <div className="mt-28 grid grid-cols-5 gap-5 mx-32 pt-10 pb-36 border-b-2 border-secondary border-opacity-70">
      <div className="col-span-3">
        <img
          src={Clasroom}
          alt="Foto kepala sekolah SMA Negeri 1 Banjarbaru"
        ></img>
      </div>
      <div className="justify-start text-left font-Poppins col-span-2 ">
        <h2 className="text-4xl text-secondary font-bold">
          SAMBUTAN KEPALA <br /> SEKOLAH
        </h2>
        <p className="mt-24 mb-10 text-sm text-white font-normal">
          SMA Negeri (SMAN) 1 Banjarbaru, merupakan salah satu Sekolah Menengah
          Atas Negeri yang ada di Kota Banjarbaru, Provinsi Kalimantan Selatan,
          Indonesia. Sama dengan SMA pada umumnya di Indonesia masa pendidikan
          sekolah di SMAN 1 Banjarbaru ditempuh dalam waktu tiga tahun
          pelajaran, mulai dari Kelas X sampai Kelas XII.
        </p>
        <Button
          type="button"
          buttonStyle="btn--secondary"
          buttonSize="btn--small"
        >
          SELENGKAPNYA
        </Button>
      </div>
    </div>
  );
}

export default Sambutan;
