import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const webDeveloper = [
  {
    id: "webDeveloper",
    title: "Web Developer",
    p1: "This is a test message",
    index: "1",
  },
];
const graphicDesign = [
  {
    id: "graphicDesign",
    title: "Graphic Design",
    p1: "This is a test message",
    index: "2",

  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {webDeveloper.map(({ id, p1, title }) => {
          return (
            <article id={id} className="service">
              <div className="service__head">
                <h3>{title}</h3>
              </div>
              <ul className="service__list">
                <li>
                  <BiCheck className="service__list-icon" size={50}/>
                  <p>{p1}</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" size={50}/>
                  <p>{p1}</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" width="50px"/>
                  <p>{p1}</p>
                </li>
              </ul>
            </article>
          );
        })}
        {graphicDesign.map(({ id, p1, title }) => {
          return (
            <article id={id} className="service">
              <div className="service__head">
                <h3>{title}</h3>
              </div>
              <ul className="service__list">
                <li>
                  <BiCheck className="service__list-icon" size={50}/>
                  <p>{p1}</p>
                </li>
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
