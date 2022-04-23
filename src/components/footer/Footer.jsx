import React from "react";
import "./footer.css";
import {BsInstagram, BsYoutube, BsGithub} from 'react-icons/bs' 
const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        KG
      </a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/karam_guliyev/"><BsInstagram/></a>
        <a href="https://github.com/KaramGuliyev/"><BsGithub/></a>
        <a href="https://www.youtube.com/channel/UCWQj3wWI0Xohr3Vy5XYokXQ"><BsYoutube/></a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; KG. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
