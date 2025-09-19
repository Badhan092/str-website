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
            At STR Sourcing, we are a global sourcing and export company built on three core values:
            Sustainability, Trustworthy, and Responsibility. These principles define who we are and how we
            work—delivering world-class products with integrity, transparency, and a commitment to
            long-term impact.
          </p>
          <p className="text">
            headquarters in Bangladesh, with contact address in the USA and Europe STR Sourcing
            specializes in a wide range of categories including fashion apparel, denim, jute
            products, outerwear, workwear, and home textiles. We connect global brands with
            high-quality ethically produced goods by offering complete solutions—from design and
            material sourcing to production quality control and on-time delivery.
          </p>
          <p className="text">
            We collaborate with a strong network of compliance-certified and green-certified
            factories across Bangladesh, ensuring every product meets international standards for
            sustainability, safety, and excellence. Our flexible production model, including less MOQ
            (Minimum Order Quantity) requirements gives our clients the ability to explore
            versatile designs, prints, and colorways without added cost or complexity.
          </p>
          <p className="text" style={{ paddingTop: "20px" }}>
            <b>
              Our strength lies in our ability to source multi type of product.Our Product Range
              Includes:
            </b>
          </p>

          <ul style={{ marginTop: "0px" }}>
            <li className="text">
              <b>Fashionwear:</b> Woven and jersey tops, bottoms, dresses, and tailoring for men,
              women and children
            </li>
            <li className="text">
              <b>Denim:</b> High-quality jeans, jackets, and casualwear for Mens, Ladies & Kids.
            </li>
            <li className="text">
              <b>Knitwear & Sweater: </b> A variety range of knitwear product as t-shirts, polo shirts, sweatshirts, sportswear, swimwear, sweaters and undergarments.
            </li>
            <li className="text">
              <b>Workwear:</b> Functional and durable clothing for various industries, including
              uniforms, safety gear and specialized apparel.
            </li>
            <li className="text">
              <b>Home Textiles:</b> Soft furnishings, bedding, Towels and lifestyle products designed
              to enhance comfort, style and functionality.
            </li>
            <li className="text">
              <b>Footwear & Bag:</b> A diverse range of high-quality footwear and bags for every lifestyle From casual and performance shoes to elegant leather handbags.
            </li>
            <li className="text">
              <b>Jute & Craft:</b> Our eco-conscious jute and handcrafted products showcase
              sustainable materials and traditional artistry with a contemporary, market-ready
              appeal.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeContent;
