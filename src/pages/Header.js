import React from "react";

const About = () => {
  return (
    <header>
      <div class="container header__container">
        <div class="header__left">
          <div>
            <h3>Hello There! I'm</h3>
            <h1>
              Eman <br />
              Concepcion
            </h1>
            <p>
              Full Stack Web Developer certified by UCLA Extension. I am
              dedicated to creating solutions to better enhance the web
              interface to provide positive user experience.
            </p>
            <a href="#contact" class="btn btn-primary btn-lg">
              Get in touch
            </a>
          </div>
        </div>

        <div class="header__right">
          <div class="header__image">
            <img src="../public/edit1.jpg" />
          </div>
          <div class="header__right-bg"></div>
          <ul class="header__socials">
            <li>
              <a
                href="https://www.instagram.com/summer__concepcion/"
                target="_blank"
              >
                <i class="uil uil-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Emanconcepcion" target="_blank">
                <i class="uil uil-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/eman-concepcion-a209b8231/"
                target="_blank"
              >
                <i class="uil uil-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default About;
