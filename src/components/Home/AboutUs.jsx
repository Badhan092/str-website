"use client";
import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClick = () => {
    router.push ('/we');
  };

  return (
    <div className="container">
      <div className="aboutus-section">
        <div className="aboutus-content" data-aos="fade-up">
          <h2 className="section-title">About Us</h2>
          <p className="section-description">
            At STR Textiles, we specialize in delivering premium quality fabrics tailored to global
            standards. Rooted in Sustainability, built on Trust, and driven by Reliability, we weave
            integrity into every thread. Our commitment to innovation empowers brands with
            cutting-edge textile solutions. Partner with us to experience the perfect blend of
            tradition and technology.
          </p>
          <p className="section-description font-extrabold">
            {" "}
            Together, let’s craft a future woven with excellence.
          </p>
          <button className="section-button" data-aos="fade-up" onClick={handleClick}>
            <p>Read More</p>
            <IoIosArrowForward />
          </button>
        </div>

        <div className="aboutus-image" data-aos="fade-up">
          <img src="/img/banner/about-us.jpg" alt="About Us" className="aboutus-img-one" />
          <div className="image-overlay" />
          <div className="image-txt">
            <p className="text">Begin your</p>
            <h2 className="title">Journey</h2>
            <p className="text">With Our Company</p>
          </div>
          <img
            src="/img/banner/about-us.jpg"
            alt="About Us"
            className="aboutus-img-two"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
