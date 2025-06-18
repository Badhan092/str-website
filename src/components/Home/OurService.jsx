import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    number: "1",
    title: "Research & Development",
    text: "Our dedicated R&D team is always ready to bring your inspiration into your desirable product.",
  },
  {
    number: "2",
    title: "Flexible MOQ",
    text: "We are flexible on MOQs. We can give you the best price for your desired quantity, whether it's a small batch or a large order.",
  },
  {
    number: "3",
    title: "Operation Support",
    text: "Our dedicated marchdesing team will support you with all the necessary information and updates throughout the production process.",
  },
  {
    number: "4",
    title: "Quality",
    text: "Our assigned quality team is involved from cutting, sewing to finishing, ensuring your products meet the highest standards.",
  },
];

const OurService = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      <h2 className="section-title" data-aos="fade-up">
        Our Focus
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
          <div className="image-overlay" />
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
