import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Sambutan from "../components/Sambutan";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Sambutan />
      <Sambutan />
    </div>
  );
}

export default Home;
