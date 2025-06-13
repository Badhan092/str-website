import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const OfficeLocation = ({ country, address, phone, email, showBreak }) => (
  <>
    <h3 className="subtitle">{country}</h3>
    <p className="office-location-description">{address}</p>
    <p className="office-location-description">Phone: {phone}</p>
    <p className="office-location-description">
      Email: <a href={`mailto:${email}?subject=Inquiry&body=Hello, I’d like to...`}>{email}</a>
    </p>
    {showBreak && <br />}
  </>
);

const ContactUs = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const locations = [
    {
      country: "Germany",
      address: "Adam-Opel-Straße 24 ,60386 ,Frankfurt am Main",
      phone: "(123) 456-7890",
      email: "info@strsourcing.com",
    },
    {
      country: "Bangladesh",
      address: "House# 1/B, Road# 10, Nikunja 2, Khilket, Dhaka-1229",
      phone: "(123) 456-7890",
      email: "info@strsourcing.com",
    },
  ];

  return (
    <div className="container">
      <h2 className="section-title" data-aos="fade-up">Contact Us</h2>
      <p className="section-description" data-aos="fade-up">
        Have questions or want to collaborate? Reach out — we're here to help you <br /> every step
        of the way.
      </p>

      <div className="cotactus-section">
        <div className="office-location" data-aos="fade-up">
          <h2 className="title">Our Office Location</h2>
          {locations.map((loc, index) => (
            <OfficeLocation key={index} {...loc} showBreak={index < locations.length - 1} />
          ))}
        </div>

        <div className="office-map" data-aos="fade-up">
          <img src="/img/banner/map-icon.png"/>
          {/* <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9022640105146!2d90.39176331536418!3d23.750876794616173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8940f207ed9%3A0x9c5f50fd2758b7a!2sSTR%20Sourcing!5e0!3m2!1sen!2sbd!4v1589876543210!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
