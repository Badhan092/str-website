import React from "react";
import { useRouter } from "next/router";
import products from "@/data/products";

export async function getStaticPaths() {
  const paths = products.flatMap((product) =>
    product.categories.map((category) => ({
      params: {
        id: product.id.toString(),
        subcategory: category.name.toLowerCase().replace(/\s+/g, "-"),
      },
    }))
  );

  return { paths, fallback: false };
}

// Fetch props based on route parameters
export async function getStaticProps({ params }) {
  const product = products.find((p) => p.id.toString() === params.id) || null;

  const category =
    product?.categories.find(
      (cat) => cat.name.toLowerCase().replace(/\s+/g, "-") === params.subcategory.toLowerCase()) || null;

  return {
    props: { product, category },
  };
}

const SubcategoryDetailPage = ({ product, category }) => {
  const router = useRouter();

  // Fallback should never happen with fallback: false, but just in case
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
              key={index}
              className="product-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img className="product-img" src={sub.image} alt={sub.name} />

              <div
                className={`product-content ${
                  sub.description ? "description" : ""
                } ${
                  sub.description?.includes("*") ? "has-star" : ""
                }`}
              >
                <h3 className="product-title">{sub.name}</h3>
                {sub.description && (
                  <p className="product-text">
                    {sub.description.split(/\s*\*\s*/).map((part, idx) => (
                      <span key={idx}>
                        {idx > 0 && <br />}
                        {part}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubcategoryDetailPage;
