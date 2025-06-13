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
    router.push("/we");
  };

  return (
    <div className="container">
      <div className="aboutus-section">
        <div className="aboutus-content" data-aos="fade-up">
          <h2 className="section-title">About Us</h2>
          <p className="section-description max-width">
            At STR Sourcing, we are a global sourcing and export company built on three core values:
            Sustainability, Trust, and Responsibility. These principles define who we are and how we
            work—delivering world-class products with integrity, transparency, and a commitment to
            long-term impact.
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
