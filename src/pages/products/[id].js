import { useRouter } from "next/router";
import products from "@/data/products";
import Link from "next/link";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleClick = () => {
    router.push("/contact-us");
  };
  const product = products.find((p) => p.id === parseInt(id));
  const relatedProducts = products.filter((p) => p.id !== parseInt(id)).slice(0, 4); // show 4 related

  if (!product) {
    return <div className="container top-space">Product not found.</div>;
  }

  return (
    <div className="container top-space product-detail-page">
      <div className="product-detail-content">
        <img src={product.image} alt={product.title} className="product-detail-img" />
        <div className="product-detail-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-detail-description">{product.details}</p>
          <button className="section-button" onClick={handleClick}>
            Contact Us
          </button>
        </div>
      </div>

      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-cards">
          {relatedProducts.map((item) => (
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

export default ProductDetail;
