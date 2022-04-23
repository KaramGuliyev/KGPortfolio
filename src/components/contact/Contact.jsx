import "./contact.css";
import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_v5qq1p8", "template_e30cw5r", form.current, "2U78o4LEDU9vRpGEX");
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>karamguliyev10@gmail.com</h5>
            <a target="_blank" href="mailto:karamguliyev10@gmail.com">
              Send a mail
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp contact__option-icon />
            <h4>Whatsapp</h4>
            <h5>+90XXXXXXXXXXX</h5>
            <a target="_blank" href="https://api.whatsapp.com/send/?phone=+90">
              Send a mail
            </a>
          </article>
          <article className="contact__option">
            <GrLinkedin contact__option-icon />
            <h4>LinkedIN</h4>
            <h5>Karam Guliyev</h5>
            <a target="_blank" href="https://www.linkedin.com/in/karamguliyev/">
              Send a mail
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="Email" placeholder="Your E-Mail" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
