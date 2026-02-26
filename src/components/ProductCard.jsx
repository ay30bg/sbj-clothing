import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/product.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    setLoading(true);

    const productWithDefaults = {
      ...product,
      quantity: 1,
      selectedSize: product.sizes ? product.sizes[0] : null,
      selectedColor: product.colors ? product.colors[0] : null,
    };

    await addToCart(productWithDefaults);
    setTimeout(() => setLoading(false), 500);
  };

  // Use first image from images array
  const mainImage =
    product.images && product.images.length > 0
      ? product.images[0]
      : "/placeholder.png"; // fallback image (optional)

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        {product.discount && (
          <span className="discount-badge">-{product.discount}%</span>
        )}

        <img src={mainImage} alt={product.name} />

        <h4>{product.name}</h4>

        {product.description && (
          <p className="product-desc">{product.description}</p>
        )}

        <div className="price-section">
          <span className="price">
            ₦{product.price.toLocaleString()}
          </span>

          {product.oldPrice && (
            <span className="old-price">
              ₦{product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>
      </Link>

      <button
        className="add-to-cart"
        onClick={handleAddToCart}
        disabled={loading}
      >
        {loading ? <span className="spinner"></span> : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;

