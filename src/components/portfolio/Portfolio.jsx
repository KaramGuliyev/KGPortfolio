import React from "react";
import "./portfolio.css";
import img from "../../assets/smile.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img} alt="" />
          </div>
          <h3>this is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              GitHUB
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img} alt="" />
          </div>
          <h3>this is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              GitHUB
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img} alt="" />
          </div>
          <h3>this is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              GitHUB
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img} alt="" />
          </div>
          <h3>this is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              GitHUB
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img} alt="" />
          </div>
          <h3>this is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              GitHUB
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img} alt="" />
          </div>
          <h3>this is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              GitHUB
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
