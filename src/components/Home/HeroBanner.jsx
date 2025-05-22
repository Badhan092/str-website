'use client';

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay"; 


const slides = [
  {
    title: "We Are STR Textiles",
    text: "Built on Trust. Driven by Reliability. Powered by Sustainability.",
  },
  {
    title: "Quality You Can Count On",
    text: "Crafted with care, inspired by purpose.",
  },
  {
    title: "Your Reliable Textile Partner",
    text: "Sustainability and innovation woven together.",
  },
];

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
        speed={800}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-container">
              <h1 className="title">{slide.title}</h1>
              <p className="text">{slide.text}</p>
              <button className="button">
                <p>Get Started</p>
                <IoIosArrowForward />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
