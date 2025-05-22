import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    number: "1",
    title: "Research & Development",
    text: "We connect you with suppliers who prioritize eco-friendly practices and materials.",
  },
  {
    number: "2",
    title: "Product Design",
    text: "Our vetted manufacturers ensure high-quality production that meets your specifications.",
  },
  {
    number: "3",
    title: "Production",
    text: "We provide real-time tracking and updates to keep you informed every step of the way.",
  },
  {
    number: "4",
    title: "Operations Support",
    text: "We provide real-time tracking and updates to keep you informed every step of the way.",
  },
];

const OurService = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      <h2 className="section-title" data-aos="fade-up">
        Our Service
      </h2>
      <p className="section-description" data-aos="fade-up">
        We offer sustainable textile sourcing, reliable production, and transparent delivery
        solutions — <br />
        tailored to meet your quality and timeline needs.
      </p>

      <div className="service-section">
        <div className="service-cards">
          {services.map(({ index, number, title, text }) => (
            <div
              className="service-card"
              key={number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-no">{number}</div>
              <h3 className="service-title">{title}</h3>
              <p className="service-text">{text}</p>
            </div>
          ))}
        </div>
        <div className="service-image">
          <img
            src="/img/banner/service.jpg"
            className="image-one"
            data-aos="fade-up"
            alt="STR Service"
          />
          <img
            src="/img/banner/service-two.jpg"
            className="image-two"
            data-aos="fade-up"
            alt="STR Service"
          />
        </div>
      </div>
    </div>
  );
};

export default OurService;
