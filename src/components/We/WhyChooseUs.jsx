import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const whyChooseUsData = [
  {
    id: 1,
    title: "Research & Development",
    description: (
      <>We connect you with suppliers who prioritize eco-friendly practices and materials.</>
    ),
  },
  {
    id: 2,
    title: "Global Sourcing",
    description: (
      <>Gain access to top-tier suppliers worldwide through our trusted network of manufacturers.</>
    ),
  },
  {
    id: 3,
    title: "Product Design",
    description: (
      <>Our team helps translate ideas into innovative, high-quality textile solutions.</>
    ),
  },
  {
    id: 4,
    title: "Production",
    description: <>We oversee every stage of production to ensure timely and consistent output.</>,
  },
  {
    id: 5,
    title: "Operations Support",
    description: <>Get real-time updates and supply chain coordination throughout the process.</>,
  },
  {
    id: 6,
    title: "Sustainability",
    description: (
      <>
        We align with partners focused on ethical labor, water conservation, and reduced emissions.
      </>
    ),
  },
  {
    id: 7,
    title: "Quality Control",
    description: <>Each batch is quality-checked and lab-tested to ensure global compliance.</>,
  },
  {
    id: 8,
    title: "Customer Support",
    description: <>Our team is available round-the-clock for responsive communication.</>,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="container">
      <div className="whychoseus-section">
        <h2 className="section-title text-center" data-aos="fade-up">
          Why Choose Us?
        </h2>
  

        <div className="whychooseus-content">
          {whyChooseUsData.map((item, index) => (
            <div
              className="whychooseus-card"
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="icon">{item.id}</div>
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
