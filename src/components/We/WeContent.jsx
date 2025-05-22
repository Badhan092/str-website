import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WeContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      <div className="we-content">
        <div className="we-image" data-aos="fade-up">
          <img src="/img/banner/wecontent.png" alt="STR Textiles banner" />
        </div>

        <div className="we-description" data-aos="fade-up">
          <h2 className="title">About Us</h2>
          <p className="text">
            At STR Textiles, we pride ourselves on being more than just a fabric supplier — we are
            your strategic partner in delivering premium-quality textiles crafted to meet and exceed
            global standards. With decades of expertise and a relentless commitment to excellence,
            we offer bespoke solutions that cater to the ever-evolving needs of the fashion and
            textile industry.
          </p>

          <p className="text">
            Our foundation is built on three unwavering pillars: <b>Sustainability</b>, <b>Trust</b>
            , and <b>Reliability</b>.
          </p>

          <p className="text">
            From eco-conscious sourcing to ethical manufacturing practices, sustainability is woven
            into the fabric of our operations. Trust is the cornerstone of every partnership we
            forge, and our consistent reliability ensures peace of mind for every client we serve.
          </p>

          <p className="text">
            At <b>STR</b> Sourcing, innovation is in our DNA. We harness state-of-the-art technology
            and advanced manufacturing techniques to deliver fabrics that are not only high in
            quality but also future-ready. Whether you're looking for natural, synthetic, blended,
            or performance textiles, we provide versatile and customized fabric solutions that align
            with your brand’s values and vision.
          </p>

          <p className="text">
            By integrating traditional craftsmanship with modern technology, we create textiles that
            tell a story — your story. From local designers to international brands, we empower our
            partners to push creative boundaries with confidence. Join hands with <b>STR</b>{" "}
            Sourcing and become a part of a global movement that values quality, integrity, and
            sustainable growth. Together, let’s craft a future woven with excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeContent;
