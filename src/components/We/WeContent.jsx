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
            Sustainability, Trust, and Responsibility. These principles define who we are and how we
            work—delivering world-class products with integrity, transparency, and a commitment to
            long-term impact.
          </p>
          <p className="text">
            Headquartered in Bangladesh, with regional offices in the USA and Europe, STR Sourcing
            specializes in a wide range of categories, including fashion apparel, denim, jute
            products, outerwear, workwear, and home textiles. We connect global brands with
            high-quality, ethically produced goods by offering complete solutions—from design and
            material sourcing to production, quality control, and on-time delivery.
          </p>
          <p className="text">
            We collaborate with a strong network of compliance-certified and green-certified
            factories across Bangladesh, ensuring every product meets international standards for
            sustainability, safety, and excellence. Our flexible production model, including no MOQ
            (Minimum Order Quantity) requirements, gives our clients the ability to explore
            versatile designs, prints, and colorways without added cost or complexity.
          </p>
          <p className="text">
            At <b>STR</b> Sourcing, innovation is in our DNA. We harness state-of-the-art technology
            and advanced manufacturing techniques to deliver fabrics that are not only high in
            quality but also future-ready. Whether you're looking for natural, synthetic, blended,
            or performance textiles, we provide versatile and customized fabric solutions that align
            with your brand’s values and vision.
          </p>
          <p className="text">Our Product Range Includes:</p>
          <ul>
            <li className="text">
              <b>Fashionwear:</b> Woven and jersey tops, bottoms, dresses, and tailoring for men,
              women, and children
            </li>
            <li className="text">
              <b>Denim:</b> High-quality jeans, jackets, and casualwear Outerwear & Workwear:
              Durable jackets, coats, and industrial wear
            </li>
            <li className="text">
              <b>Knitwear:</b> Sweaters ranging from 3GG to 12GG Jute Products: Sustainable and
              stylish bags, accessories, and home items
            </li>
            <li className="text">
              <b>Home Textiles:</b> Soft furnishings, bedding, and lifestyle products At STR
              Sourcing, we’re powered by a dynamic, experienced team of professionals in design,
              product development, fabric sourcing, garment technology, compliance, and supply chain
              management.
            </li>
          </ul>
          Our strength lies in our ability to adapt to market trends, deliver innovative and
          sustainable solutions, and maintain uncompromising standards across every order.
        </div>
      </div>
    </div>
  );
};

export default WeContent;
