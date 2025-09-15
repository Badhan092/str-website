import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const partnerLogos = [
  {
    id: 1,
    src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/464616965_10234164226795306_2631204401645299733_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=txeV1njKcMYQ7kNvwGUJDSR&_nc_oc=AdmSDrHQq49BupxpRghWdkU-qXmyOtOPsKmOjrFOZOelKcKDQz7Se5FTBFSweJV4pxI&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=mcfAhNjRb33cqPfVnwR24w&oh=00_AfbwJN49AEefc3hbq-8zDPYzxKjcMcgFHav6I8qC_M9JNw&oe=68CD839C",
    alt: "Partner 1",
    title: " Soledad Mayoral Adeva (Spain)",
    description:
      "STR Sourcing exceeded our expectations. Their attention to detail and quality is unmatched.",
  },
  {
    id: 2,
    src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/493330197_10171167686360301_7648277167407239301_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=kezJPRnzWVIQ7kNvwE8WZds&_nc_oc=AdnzsZH8ePY1EclKDKw-LZS0lenf5_FxpZqcn4cuaQftmf0k54rNYqGAh4nF5Uhi9ps&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=hUd8bRIqzRl2DeQKirKMiw&oh=00_AfYAs9Ep1rLDKxpEcK-UHuGfj8RRXGquKbuW8FKJZHVVtg&oe=68CD9F84",
    alt: "Partner 2",
    title: "Maria Olsson (Sweden)",
    description:
      "Working with STR has been a seamless experience. Their sustainability efforts truly stand out.",
  },
  {
    id: 3,
    src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-1/448714732_7875053042537455_194076739139869164_n.jpg?stp=c80.0.480.480a_dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=TVp8i3_KgKQQ7kNvwE9KX9I&_nc_oc=AdkdsNdt8_1PLnzHSstaEamqxVKzmAGWtHMGCzIeLk68BhZhJhhQSAyBPqpL56IQ5Ww&_nc_zt=24&_nc_ht=scontent.fdac174-1.fna&_nc_gid=bpplqnLQQBQouMJ8HAobKw&oh=00_Afbg9bIULieW-Qnb3Ehk98TRbAm3Q0aLeRUsUPWvQ2zwJA&oe=68CDA7D7",
    alt: "Partner 3",
    title: "Cristina Escribano (Spain)",
    description:
      "Reliable and innovative — STR helped us source fabrics that align perfectly with our brand vision.",
  },
  {
    id: 4,
    src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-1/301177731_3312869405702618_6106454833790878176_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_ohc=uk6jvT7SsN8Q7kNvwGQgZZd&_nc_oc=AdmZAOdH2pEVJFOON-sjqIZvMScxBPO01aJDz16JPSB-9u6fth4xtozWq2-thzIhh04&_nc_zt=24&_nc_ht=scontent.fdac174-1.fna&_nc_gid=xekzpXwGRlF7IVMjdd0KKw&oh=00_Afaqgm-Y-cMDOJTwq0dCjD-0lYUEU3jrEJNMRDfzNwAZ4Q&oe=68CD9E06",
    alt: "Partner 4",
    title: "Nestor Campillo Garcia (spain)",
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
      <h2 className="section-title text-center" data-aos="fade-up">
        Client Testimonials
      </h2>
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
