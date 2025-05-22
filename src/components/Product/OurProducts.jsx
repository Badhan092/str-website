import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import products from "@/data/products";

const OurProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container top-space">
      <h2 className="section-title">Our Products</h2>
      <div className="product-section">
        <div className="product-cards">
          {products.map((product, index) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="product-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <img className="product-img" src={product.image} alt={product.title} />
                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-text">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
