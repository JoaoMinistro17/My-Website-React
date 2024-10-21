import React, { useState } from "react";
import "../navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        {/* Brand Logo or Name */}
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a className="nav__link" onClick={() => {
            document.getElementById("home")?.scrollIntoView({ 
              behavior: "smooth" 
            });
          }}>
            Home
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" onClick={() => {
            document.getElementById("about")?.scrollIntoView({ 
              behavior: "smooth" 
            });
          }}>
            About
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" onClick={() => {
            document.getElementById("portfolio")?.scrollIntoView({ 
              behavior: "smooth" 
            });
          }}>
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" onClick={() => {
            document.getElementById("skills")?.scrollIntoView({ 
              behavior: "smooth" 
            });
          }}>
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;