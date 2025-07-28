import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Partner logo data
const partnerLogos = [
  { id: 1, src: "/img/partner/partner1.png", alt: "Partner 1" },
  { id: 2, src: "/img/partner/partner3.png", alt: "Partner 2" },
  { id: 3, src: "/img/partner/partner6.png", alt: "Partner 3" },
  { id: 4, src: "/img/partner/partner2.png", alt: "Partner 4" },
  { id: 5, src: "/img/partner/partner4.png", alt: "Partner 5" },
  { id: 6, src: "/img/partner/partner5.png", alt: "Partner 6" },
  { id: 7, src: "/img/partner/partner7.png", alt: "Partner 7" },
  { id: 8, src: "/img/partner/partner8.png", alt: "Partner 8" },
  { id: 9, src: "/img/partner/partner9.png", alt: "Partner 9" },
];

const OurPartner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      <h2 className="section-title" data-aos="fade-up">
       Our Working Partner
      </h2>
      <p className="section-description" data-aos="fade-up">
        We are proud to partner with leading brands and organizations in the textile industry,
        working together to create a more sustainable future.
      </p>

      <div className="partner-section">
        {partnerLogos.map((logo, index) => (
          <div key={logo.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="partner-card">
              <img src={logo.src} alt={logo.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartner;
