import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    number: "1",
    title: "Research & Development",
    text: "Our dedicated R&D team is committed to turning your vision into reality. With a strong focus on innovation and customization, we work closely with you to transform ideas into high-quality products that meet your exact specifications.",
  },
  {
    number: "2",
    title: "Flexible MOQ & Competitive Pricing",
    text: "We offer flexible minimum order quantities starting from just 500 units, ensuring you get the best value without compromising on quality. Our pricing is competitive, tailored to support your business needs—whether you're starting small or scaling up.",
  },
  {
    number: "3",
    title: "Operation Support",
    text: "Our dedicated marchdesing team will support you with all the necessary information and updates throughout the production process.From sampling to final shipment, we keep you informed and in control every step of the way.",
  },
  {
    number: "4",
    title: "Quality",
    text: "Our dedicated quality team is actively involved at every stage—from cutting and sewing to inline, pre-final, and final inspections—to ensure a consistently high-quality end product.",
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
      {/* <p className="section-description" data-aos="fade-up">
        We offer sustainable textile sourcing, reliable production, and transparent delivery
        solutions — <br />
        tailored to meet your quality and timeline needs.
      </p> */}

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
            src="/img/banner/service-two.jpg"
            className="image-one"
            data-aos="fade-up"
            alt="STR Service"
          />
          <div className="image-overlay" />
          <img
            src="/img/banner/service.jpg"
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
