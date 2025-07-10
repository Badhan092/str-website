import { useRouter } from "next/router";
import products from "@/data/products";
import Link from "next/link";

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
    return (
      <div className="container top-space">
        <h2>Subcategory not found.</h2>
        <p>Please go back and select a valid subcategory.</p>
      </div>
    );
  }

  // 🧩 Check if this category has subCategories:

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
  }

  // 🪄 If no subCategories, show detail page:
  return (
    <div className="container top-space product-detail-page">
      <div className="product-detail-content">
        <img src={category.image} alt={category.name} className="product-detail-img" />
        <div className="product-detail-info">
          <h1 className="product-title">{category.name}</h1>
          <p className="product-detail-description">{product.details}</p>
          <button className="section-button" onClick={() => router.push("/contact-us")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-cards">
          {products
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((item) => (
              <Link href={`/products/${item.id}`} key={item.id} className="related-card">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SubcategoryDetailPage;
