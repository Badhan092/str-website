import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const partnerLogos = [
  {
    id: 1,
    src: "/img/testmonial/1.jpg",
    alt: "Partner 1",
    title: "John Nicholas",
    description:
      "STR Sourcing exceeded our expectations. Their attention to detail and quality is unmatched.",
  },
  {
    id: 2,
    src: "/img/testmonial/2.jpg",
    alt: "Partner 2",
    title: "David Luice",
    description:
      "Working with STR has been a seamless experience. Their sustainability efforts truly stand out.",
  },
  {
    id: 3,
    src: "/img/testmonial/3.jpg",
    alt: "Partner 3",
    title: "John Cane",
    description:
      "Reliable and innovative — STR helped us source fabrics that align perfectly with our brand vision.",
  },
  {
    id: 4,
    src: "/img/testmonial/4.jpg",
    alt: "Partner 4",
    title: "Dua Lipa",
    description:
      "From concept to delivery, STR's support and quality assurance gave us complete peace of mind.",
  },
];

const swiperConfig = {
  autoplay: { delay: 1200 },
  spaceBetween: 15,
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 1.3,
    },
      300: {
      slidesPerView: 1,
    },
  },
};

const OurPartner = () => {
  return (
    <div className="container">
      <h2 className="section-title text-center" data-aos="fade-up">Client Testimonials</h2>
      <p className="section-description text-center" data-aos="fade-up">
        We are proud to partner with leading brands and organizations in the textile industry,
        <br />
        working together to create a more sustainable future.
      </p>

      <div className="testimonials-section">
        <Swiper {...swiperConfig} modules={[Autoplay]}>
          {partnerLogos.map(({ id, src, title, description, alt }) => (
            <SwiperSlide key={id}>
              <div className="testimonials-card">
                <img src={src} alt={alt} />
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurPartner;
