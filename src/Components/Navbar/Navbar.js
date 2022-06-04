import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div class="container nav__container">
        <a href="./index.html" class="nav__logo">
          <h3>{/*  */}</h3>
        </a>

        <ul class="nav__menu">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/Skills">SKILLS</a>
          </li>
          <li>
            <a href="/Services">SERVICES</a>
          </li>
          <li>
            <a href="/Portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="/Testimonials">TESTIMONIALS</a>
          </li>
          <li>
            <a href="/Contact">CONTACT</a>
          </li>
          <li>
            <a href="../public/Resume.pdf" class="btn btn-primary" download>
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
