/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Hero1 from "./components/Hero1";
import Creator from "./components/Creator";
import Feature from "./components/Feature";
import Discover from "./components/Discover";
import Marque from "./components/Marque";
import Join from "./components/Join";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-[#ffffff]">
      <Navbar />
      <Hero1 />
      <Creator />
      <Feature />
      <Discover />
      <Marque />
      <Join />
      <Footer />
    </main>
  );
};

export default App;
