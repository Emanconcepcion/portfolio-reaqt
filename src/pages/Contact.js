import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div class="container contact__container">
        <div class="contact__left">
          <h2>Contact</h2>
          <p>
            Please fill out the following information or use one of the provided
            links below and I will contact you as soon as possible &#x2661
          </p>
          <ul class="contact__socials">
            <li>
              <a href="mailto:concepcion_eman@yahoo.com" target="_blank">
                <i class="uil uil-chat"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/summer__concepcion/"
                target="_blank"
              >
                <i class="uil uil-instagram"></i>
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
            <li>
              <a href="https://github.com/Emanconcepcion" target="_blank">
                <i class="uil uil-github"></i>
              </a>
            </li>
          </ul>
        </div>

        <form action="https://formspree.io/f/xeqnvvnv" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" class="btn">
            Send <i class="uil uil-arrow-right"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
