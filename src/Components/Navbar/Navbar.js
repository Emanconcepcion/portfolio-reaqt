import React from "react";
import DarkMode from "../darkmode/Darkmode";

const Navbar = () => {
  return (
    <nav>
      <div class="container nav__container">
        <a href="./index.html" class="nav__logo">
          <h3>{/*  */}</h3>
        </a>

        <ul class="nav__menu">
          <li>
            <a href="index.html">HOME</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <a href="./Resume.pdf" class="btn btn-primary" download>
              <i class="uil uil-download-alt"></i> RESUME
            </a>
          </li>
        </ul>

        <button id="open-menu-btn">
          <i class="uil uil-bars"></i>
        </button>
        <button id="close-menu-btn">
          <i class="uil uil-multiply"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
