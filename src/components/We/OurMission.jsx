import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurMission = () => {
  return (
    <>
      <div className="container">
        <div className="ourmission">
          <div className="ourmission-content">
            <h2 className="section-title" data-aos="fade-up">
              Our Mission & Vision
            </h2>
            <p className="section-description" data-aos="fade-up">
              <span style={{ fontWeight: "700", fontSize: "1.1rem", paddingBottom: "2px" }}>
                Mission:
              </span>
              <br />
              At STR Sourcing, our mission is to empower fashion and lifestyle brands by providing
              comprehensive, sustainable, and innovative sourcing solutions. As a trusted sourcing
              office, we are committed to delivering quality, efficiency, and ethical practices
              across the supply chain. We build lasting partnerships grounded in reliability and
              transparency—ensuring every product we help create supports a better future for
              people, brands, and the planet.
            </p>

            <p className="section-description" data-aos="fade-up">
              <span style={{ fontWeight: "700", fontSize: "1.1rem", paddingBottom: "2px" }}>
                Vision:
              </span>
              <br /> To become a global leader in responsible sourcing, inspiring innovation and
              sustainability across the fashion and lifestyle industry. We envision a future where
              every product we source reflects a story of quality, integrity, and positive impact.
            </p>
          </div>
          <div className="ourmission-image" data-aos="fade-up">
            <img src="/img/banner/mission-vision.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
