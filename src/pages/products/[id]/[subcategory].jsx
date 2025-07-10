import { useRouter } from "next/router";
import Link from "next/link";
import products from "@/data/products";

const SubcategoryDetail = () => {
  const router = useRouter();
  const { id, subcategory } = router.query;

  const product = products.find((p) => p.id === parseInt(id));
  const category = product?.categories?.find(
    (cat) =>
      cat.name.toLowerCase().replace(/\s+/g, "-") === subcategory?.toLowerCase()
  );

  const relatedProducts = products.filter((p) => p.id !== parseInt(id)).slice(0, 4);

  const handleClick = () => {
    router.push("/contact-us");
  };

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

  return (
    <div className="container top-space product-detail-page">
      {/* Subcategory Detail */}
      <div className="product-detail-content">
        <img m
          src={category.image}
          alt={category.name}
          className="product-detail-img"
        />
        <div className="product-detail-info">
          <h1 className="product-title">{category.name}</h1>
          <p className="product-detail-description">{product.details}</p>
          <button className="section-button" onClick={handleClick}>
            Contact Us
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-cards">
          {relatedProducts.map((item) => (
            <Link
              href={`/products/${item.id}`}
              key={item.id}
              className="related-card"
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubcategoryDetail;
