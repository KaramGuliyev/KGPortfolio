import React from "react";
import "./testimonials.css";
import img from "../../assets/smile.jpg";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

const testimonials = [
  {
    avatar: img,
    name: "Abraham Lincoln",
    review:
      "Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev ",
  },
  {
    avatar: img,
    name: "Abraham Lincoln",
    review:
      "Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev ",
  },
  {
    avatar: img,
    name: "Abraham Lincoln",
    review:
      "Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev ",
  },
  {
    avatar: img,
    name: "Abraham Lincoln",
    review:
      "Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev Karam Guliyev ",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper loop={true} effect={"cards"} grabCursor={true} modules={[EffectCards]} className="container testimonials__container">
        {testimonials.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="nobackground" key={index}>
              <div className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5>{name}</h5>
                <small>{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
