import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const partnerLogos = [
  { id: 1, src: "/img/partner/partner1.png", alt: "Partner 1" },
  { id: 2, src: "/img/partner/partner2.png", alt: "Partner 2" },
  { id: 3, src: "/img/partner/partner3.png", alt: "Partner 3" },
  { id: 4, src: "/img/partner/partner4.png", alt: "Partner 4" },
  { id: 5, src: "/img/partner/partner5.png", alt: "Partner 5" },
  { id: 6, src: "/img/partner/partner6.png", alt: "Partner 6" },

];

const swiperConfig = {
  autoplay: {delay: 1000},
  spaceBetween: 15,
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    480: {
      slidesPerView: 3,
    },
  },
};

const OurPartner = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Our Partner</h2>
        <p className="section-description">
          We are proud to partner with leading brands and organizations in the textile industry,
          working together to create a more sustainable future.
        </p>

        <div className="partner-section">
          <Swiper {...swiperConfig} modules={[Autoplay]}>
            {partnerLogos.map(({ id, src, alt }) => (
              <SwiperSlide key={id}>
                <div className="partner-card">
                  <img src={src} alt={alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
