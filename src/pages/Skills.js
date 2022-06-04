import React from "react";
import Html from "../Assets/icons/icons8-html-5.svg";
import Css3 from "../Assets/icons/icons8-css3.svg";
import Javascript from "../Assets/icons/icons8-javascript.svg";
import R from "../Assets/icons/icons8-react-native.svg";
import Bootstrap from "../Assets/icons/icons8-bootstrap.svg";
import Github from "../Assets/icons/icons8-github.svg";

const Skills = () => {
  return (
    <section id="companies">
      <div class="container companies__container">
        <span>
          <img src={Html} alt="Html Icon" />
        </span>
        <span>
          <img src={Css3} alt="Css3 Icon" />
        </span>
        <span>
          <img src={Javascript} alt="JS Icon" />
        </span>
        <span>
          <img src={R} alt="React Icon" />
        </span>
        <span>
          <img src={Bootstrap} alt="Bootstrap Icon" />
        </span>
        <span>
          <img src={Github} alt="Github Icon" />
        </span>
      </div>
    </section>
  );
};

export default Skills;
