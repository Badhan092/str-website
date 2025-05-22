import React from "react";
import { useRouter } from "next/router";

const ResponsibleDescription = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact-us");
  };
  return (
    <>
      <div className="container">
        <div className="responsible-description">
          <div className="responsible-content">
            <h2 className="section-title" data-aos="fade-up">
              Our Responsiblity
            </h2>
            <p className="section-description" data-aos="fade-up">
              At STR, we take full ownership of the end-to-end supply chain process — from
              identifying and sourcing the right manufacturing partners to ensuring compliance with
              international standards, rigorous quality control, and streamlined merchandising. Our
              dedicated team oversees every stage of production to ensure that our clients receive
              reliable, ethically made, and high-quality products. This allows our partners to focus
              on brand growth and customer engagement, while we manage the complexities of global
              manufacturing and delivery.
            </p>
            <button className="section-button" onClick={handleClick}>
              Contact Us
            </button>
          </div>
          <div className="responsible-image" data-aos="fade-up">
            <img src="/img/banner/responsiblity.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsibleDescription;
