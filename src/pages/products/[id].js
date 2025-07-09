import { useRouter } from "next/router";
import products from "@/data/products";
import Link from "next/link";

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
            {product.categories.map((cat, index) => (
              <Link
                href={`/products/${product.id}/${encodeURIComponent(
                  cat.name.toLowerCase().replace(/\s+/g, "-")
                )}`}
                key={index}
              >
                <div
                  className={`product-card ${!cat.description ? "no-description" : ""}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img className="product-img" src={cat.image} alt={cat.name} />
                  <div className="product-content">
                    <h3 className="product-title">{cat.name}</h3>
                    <p className="product-text">{cat.description}</p>
                  </div>
                </div>
              </Link>
            ))}
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
