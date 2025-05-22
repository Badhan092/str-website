import React from "react";

const ContactUsLocation = () => {


  return (
    <>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Our Location</h2>
        <p className="section-description" data-aos="fade-up">We’re here! Check out our location below </p>

        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9022640105146!2d90.39176331536418!3d23.750876794616173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8940f207ed9%3A0x9c5f50fd2758b7a!2sSTR%20Sourcing!5e0!3m2!1sen!2sbd!4v1589876543210!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{ border: "4px solid #fff ", borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          data-aos="fade-up"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUsLocation;
