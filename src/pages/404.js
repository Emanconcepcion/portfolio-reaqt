import React from "react";

const Invalid404Page = () => {
  return (
    <div>
      <h3 style={{ paddingTop: "20px" }}>This page doesn't exist</h3>
      <a style={{ fontSize: "2rem", textDecoration: "none" }} href="/">
        About Me
      </a>
    </div>
  );
};

export default Invalid404Page;
