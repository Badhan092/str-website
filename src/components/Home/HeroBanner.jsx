"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const slides = [
  {
    title: "Where Sustainability Meets Trust & Responsibility Driven Results", 
    text: "Together, let’s craft a future woven with excellence.",
    image: "/img/banner/hero-banner-one.jpg",
  },
  {
    title: "Quality You Can Trust Values You Can See",
    text: "Together, let’s craft a future woven with excellence.",
    image: "/img/banner/hero-banner-two.jpg",
  },
  {
    title: "Sourcing With Integrity Delivery With Pride",
    text: "Together, let’s craft a future woven with excellence.",
    image: "/img/banner/hero-banner-three.jpg",
  },
];


const HeroBanner = () => {
  return (
    <Swiper modules={[Autoplay]} autoplay={{ delay: 4000 }} loop speed={800}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero-banner"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="hero-container">
              <h1 className="title">{slide.title}</h1>
              <p className="text">{slide.text}</p>
              <button className="button">
                <p>Get Started</p>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroBanner;
