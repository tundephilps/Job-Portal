import React from "react";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import { Hero } from "./Hero";
import { Nav2 } from "./Nav2";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Services from "./Services";
import Team from "./Team";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <About />
      <Services />
      <Blog />
      <Team />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
