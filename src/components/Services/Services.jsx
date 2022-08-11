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
          knowledge in web designing and development
          <br />
          producting the quality work
        </spane>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="s-cards">
        <div style={{left:"14rem"}}>
          <Cards
            emoji={HeartEmoji}
            Heading={"Design"}
            Description={"I design the user interface and the user experience"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
