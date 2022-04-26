import "./about.css";
import React from "react";
import ME from "../../assets/smile.jpg";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolder } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" className="about__me-image" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Yers Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <AiOutlineFolder className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quam id, quasi tempore molestiae saepe in temporibus rem, ex nihil, dolore ut
            ipsa ea corrupti placeat tempora ducimus amet numquam?
          </p>

          <div className="btn-container">
            <a href="#contact" className="btn btn-primary">
              Lets Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
