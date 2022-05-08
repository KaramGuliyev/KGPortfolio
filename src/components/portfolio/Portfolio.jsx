import React from "react";
import "./portfolio.css";
import img1 from "../../assets/smile.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "TEST",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    image: img1,
    title: "TEST",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    image: img1,
    title: "TEST",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    image: img1,
    title: "TEST",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    image: img1,
    title: "TEST",
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    image: img1,
    title: "TEST",
    github: "#",
    demo: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3 className="center">{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
