import React from "react";
import "./Intro.css";

import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hy! I Am</span>
            <span>Aswick</span>
            <span>
              Front End Developer with high level knowledge in web designing and
              development, producting the quality work
            </span>
          </div>
          <button className=" button i-button">Hire Me</button>
          <div className="i-icons">
            <img src={Github} alt="Github" />
            <img src={Linkedin} alt="Linkedin" />
            <img src={Instagram} alt="Instagram" />
          </div>
        </div>
        <div className="i-right">
            <img src={vector1} alt="Vector1" />
            <img src={vector2} alt="Vector2" />
            <img src={boy} alt="boy"/>
            <div>
                <FloatingDiv/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
