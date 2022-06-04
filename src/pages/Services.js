import React from "react";

const Services = () => {
  return (
    <section id="services">
      <div class="container services__container">
        <div class="services__left">
          <h1> # </h1>
          <h4>Future Implementations</h4>
          <small>{/*  */}</small>
        </div>

        <div class="services__right">
          <h2>
            Product Designer and Developer, Specialized in UI/UX, and Digital
            Designs.
          </h2>
          <div class="services__cards">
            <div class="services__card">
              <span class="services__card-icon">
                <i class="uil uil-layers-alt"></i>
              </span>
              <h5>Product Design</h5>
              <a href="#">
                Discover More <i class="uil uil-arrow-right"></i>
              </a>
            </div>

            <div class="services__card">
              <span class="services__card-icon">
                <i class="uil uil-browser"></i>
              </span>
              <h5>Website Development</h5>
              <a href="#">
                Discover More <i class="uil uil-arrow-right"></i>
              </a>
            </div>

            <div class="services__card">
              <span class="services__card-icon">
                <i class="uil uil-lightbulb"></i>
              </span>
              <h5>Branding Design</h5>
              <a href="#">
                Discover More <i class="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
