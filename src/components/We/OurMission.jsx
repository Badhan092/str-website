import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurMission = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="ourmission">
            <div className="ourmission-content">
              <h2 className="section-title" data-aos="fade-up">
                Our Mission & Vision
              </h2>
              <p className="section-description" data-aos="fade-up">
                <span style={{ fontWeight: "700", fontSize:"1.1rem", paddingBottom:'2px' }}>Mission:</span><br/>
                At STR Sourcing, our mission is to empower fashion and textile brands by delivering
                premium, sustainable, and innovative fabric solutions that set new industry
                standards. We are committed to building lasting partnerships grounded in trust,
                reliability, and ethical practices — ensuring every thread we produce supports a
                better future for people and the planet.
              </p>

              <p className="section-description" data-aos="fade-up">
                <span style={{ fontWeight: "700", fontSize:"1.1rem", paddingBottom:'2px' }}>Vision:</span><br/> To become a global leader in
                responsible textile sourcing, inspiring innovation and sustainability across the
                industry. We envision a future where every fabric tells a story of quality,
                integrity, and positive impact.
              </p>
            </div>
            <div className="ourmission-image" data-aos="fade-up">
              <img src="/img/banner/mission.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
