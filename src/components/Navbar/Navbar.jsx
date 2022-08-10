import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Aswick</div>
          <span>togglee</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>CV</li>
                </ul>
            </div>
            <button className="button n-button">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
