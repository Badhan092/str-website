import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
        Our Partner:
      </h2>
      <p className="section-description" data-aos="fade-up">
        Our Manufacturing partners are compliant with international standards and code of conduct
      </p>

      <div className="partner-section" data-aos="fade-up">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 4, spaceBetween: 10 },
            640: { slidesPerView: 5, spaceBetween: 15 },
            1024: { slidesPerView: 8, spaceBetween: 20 },
          }}
        >
          {partnerLogos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="partner-card">
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurPartner;
