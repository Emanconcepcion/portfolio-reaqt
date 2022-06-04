import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div class="container portfolio__container">
        <div class="portfolio__head">
          <h3>Successful Projects </h3>
          <div class="portfolio__head-right">
            <p>
              Listed below are some projects I have successfully worked on:
              <p>* Get Outside</p>
              <p>* Book Search</p>
              <p>* The Recipe Box</p>
              <p>* Art Gallery</p>
            </p>
            <a href="https://github.com/Emanconcepcion" target="_blank">
              Explore More <i class="uil uil-arrow-right"></i>
            </a>
          </div>
        </div>

        <div class="portfolio__projects">
          <article class="portfolio__project">
            <span class="portfolio__project-image">
              <img src="../public/mockup.jpg" />
            </span>
            <div class="portfolio__cta">
              <a
                href="https://github.com/Lexi-Diamond/get-outside"
                class="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://arcane-stream-21674.herokuapp.com/"
                class="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article class="portfolio__project">
            <span class="portfolio__project-image">
              <img src="../public/screenshot3.PNG" />
            </span>
            <div class="portfolio__cta">
              <a
                href="https://github.com/Emanconcepcion/looking_for_books"
                class="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://arcane-forest-85375.herokuapp.com/"
                class="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article class="portfolio__project">
            <span class="portfolio__project-image">
              <img src="../public/Screenshot1.png" />
            </span>
            <div class="portfolio__cta">
              <a
                href="https://github.com/EthanP94/The-Recipe-Box"
                class="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://immense-cliffs-14605.herokuapp.com/login"
                class="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article class="portfolio__project">
            <span class="portfolio__project-image">
              <img src="../public/homepage.png" />
            </span>
            <div class="portfolio__cta">
              <a
                href="https://github.com/Emanconcepcion/art-gallery"
                class="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://emanconcepcion.github.io/art-gallery/"
                class="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
