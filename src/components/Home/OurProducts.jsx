import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    id: 1,
    image: "/img/products/1.png",
    title: "Fashion",
    description: "Stylish, breathable fabric for modern wear.",
  },
  {
    id: 2,
    image: "/img/products/2.png",
    title: "Workwear",
    description: "Tough, long-lasting fabric for daily use.",
  },
  {
    id: 3,
    image: "/img/products/3.png",
    title: "Home textiles",
    description: "Comfortable fabric for cozy living spaces.",
  },
  {
    id: 4,
    image: "/img/products/4.png",
    title: "Healthcare",
    description: "Hygienic fabric for medical environments.",
  },
  {
    id: 5,
    image: "/img/products/5.png",
    title: "Sportswear",
    description: "Lightweight fabric for athletes.",
  },
  {
    id: 6,
    image: "/img/products/6.png",
    title: "Corporatewear",
    description: "Professional, breathable fabric for office wear.",
  },
  {
    id: 7,
    image: "/img/products/8.png",
    title: "Footwear",
    description: "Flexible, breathable fabric crafted for comfort.",
  },
  {
    id: 8,
    image: "/img/products/7.png",
    title: "Jute & crafts",
    description: "Natural, textured fabric for handmade goods.",
  },
];

const OurProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      <h2 className="section-title">Our Products</h2>

      <div className="product-section">
        <div className="product-cards">
          {products.map((product, index) => (
            <div
              className="product-card"
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img className="product-img" src={product.image} alt={product.title} />
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-text">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
