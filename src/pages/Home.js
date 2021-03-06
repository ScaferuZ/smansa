import React from "react";
import BlogList from "../components/BlogList";
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
      <BlogList />
    </div>
  );
}

export default Home;
