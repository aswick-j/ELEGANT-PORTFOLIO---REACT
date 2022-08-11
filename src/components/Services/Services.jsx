import React from "react";

import "./Services.css";

import HeartEmoji from "./../../img/heartemoji.png";
import Glasses from "./../../img/glasses.png";
import humble from "./../../img/humble.png";

import Cards from "../Cards/Cards";

const Services = () => {
  return (
    <div className="s-services">
      <div className="s-left">
        <span>My Awesome</span> <span>Services</span>
        <spane>
          MongoDB,Express,Node,React,Javascript,HTML,CSS,
          <br />
          Python,Machine Learning,openCV,DataScience,DeepLearning
        </spane>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="s-cards">
        <div style={{ left: "14rem" }}>
          <Cards
            emoji={HeartEmoji}
            Heading={"Design"}
            Description={"Adobe Photoshop,illustrator,XD"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Cards    
            emoji={Glasses}
            Heading={"Develop"}
            Description={"MEAN,ORACLE SQL"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Cards
            emoji={humble}
            Heading={"AI"}
            Description={"DataScience,Machine Learning"}
          />
        </div>
        <div
          className="blur s-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
