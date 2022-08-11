import React from "react";

import "./App.css";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro/Intro";

import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services/>
      <Experience/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
