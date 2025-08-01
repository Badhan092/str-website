import { useRouter } from "next/router";
import products from "@/data/products";

const SubcategoryDetailPage = () => {
  const router = useRouter();
  const { id, subcategory } = router.query;

  const product = products.find((p) => p.id === parseInt(id));
  const category = product?.categories?.find(
    (cat) => cat.name.toLowerCase().replace(/\s+/g, "-") === subcategory?.toLowerCase()
  );

  if (!product || !subcategory) {
    return <div className="container top-space">Loading...</div>;
  }

  if (!category) {
    return null;
  }

  if (category.subCategories && category.subCategories.length > 0) {
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
                <img className="product-img" src={`${sub.image}?v=${Date.now()}`} alt={sub.name} />
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
  }

  return null;
};

export default SubcategoryDetailPage;
