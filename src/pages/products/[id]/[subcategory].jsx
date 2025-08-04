import React from "react";
import { useRouter } from "next/router";
import products from "@/data/products";


export async function getStaticPaths() {
  const paths = [];

  products.forEach((product) => {
    product.categories.forEach((category) => {
      paths.push({
        params: {
          id: product.id.toString(),
          subcategory: category.name.toLowerCase().replace(/\s+/g, "-"),
        },
      });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = products.find((p) => p.id.toString() === params.id);
  const category = product?.categories.find(
    (cat) =>
      cat.name.toLowerCase().replace(/\s+/g, "-") ===
      params.subcategory.toLowerCase()
  );

  return {
    props: {
      product: product || null,
      category: category || null,
    },
  };
}

const SubcategoryDetailPage = ({ product, category }) => {
  const router = useRouter();



  if (!category || !category.subCategories) {
    return (
      <div className="container top-space">
        <p>Not found</p>
      </div>
    );
  }

  return (
    <div className="container top-space">
      <h2 className="section-title">{category.name}</h2>
      <div className="product-section">
        <div className="product-cards">
          {category.subCategories.map((sub, index) => (
            <div
              className="product-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Removed dynamic Date.now() query param */}
              <img className="product-img" src={sub.image} alt={sub.name} />
              <div
                className={`product-content ${sub.description ? "description" : ""} ${
                  sub.description && sub.description.includes("*") ? "has-star" : ""
                }`}
              >
                <h3 className="product-title">{sub.name}</h3>
                <p className="product-text">
                  {sub.description
                    ? sub.description.split(/\s*\*\s*/).map((part, idx) => (
                        <span key={idx}>
                          {idx > 0 && <br />}
                          {part}
                        </span>
                      ))
                    : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubcategoryDetailPage;
