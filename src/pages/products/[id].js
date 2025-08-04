import { useRouter } from "next/router";
import products from "@/data/products";
import Link from "next/link";

const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-");

const ProductSubCategoryPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container top-space">
      <h2 className="section-title">{product.title}</h2>

      <div className="product-section">
        {product.categories && product.categories.length > 0 ? (
          <div className="product-cards">
            {product.categories.map((cat, index) => {
              const hasSubCategories = Array.isArray(cat.subCategories) && cat.subCategories.length > 0;
              const subcategorySlug = slugify(cat.name);

              const content = (
                <div
                  className={`product-card ${!cat.description ? "no-description" : ""}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img className="product-img" src={cat.image} alt={cat.name} />
                  <div
                    className={`product-content ${cat.description ? "description" : ""} ${
                      cat.description?.includes("*") ? "has-star" : ""
                    }`}
                  >
                    <h3 className="product-title">{cat.name}</h3>
                    <p className="product-text">
                      {cat.description
                        ? cat.description.split(/\s*\*\s*/).map((part, idx) => (
                            <span key={idx}>
                              {idx > 0 && <br />}
                              {part}
                            </span>
                          ))
                        : ""}
                    </p>
                  </div>
                </div>
              );

              return hasSubCategories ? (
                <Link
                  href={`/products/${product.id}/${encodeURIComponent(subcategorySlug)}`}
                  key={index}
                >
                  {content}
                </Link>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        ) : (
          <div className="coming-soon">
            <div className="comingsoon-txt">Coming Soon...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSubCategoryPage;
