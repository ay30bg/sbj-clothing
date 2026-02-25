import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import { useState, useEffect } from "react";
import "../styles/productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const product = products.find((p) => p.id.toString() === id);

  // ✅ Dynamic page title
  useEffect(() => {
    if (product) {
      document.title = `${product.name} - SBJ Clothings`;
    } else {
      document.title = "Product Not Found - SBJ Clothings";
    }
  }, [product]);

  if (!product) {
    return (
      <div className="pd-not-found">
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  const handleAddToCart = async () => {
    // Require selection only if options exist
    if (product.sizes?.length > 0 && !selectedSize) {
      alert("Please select a size");
      return;
    }
    if (product.colors?.length > 0 && !selectedColor) {
      alert("Please select a color");
      return;
    }

    setLoading(true);
    setAdded(false);

    await addToCart({
      ...product,
      quantity,
      selectedSize,
      selectedColor,
    });

    setTimeout(() => {
      setLoading(false);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }, 500);
  };

  const outOfStock = product.stock === 0;

  return (
    <div className="pd-page">
      <div className="pd-container">

        {/* LEFT: IMAGE */}
        <div className="pd-gallery">
          <img src={product.image} alt={product.name} />
          {product.discount && (
            <span className="pd-discount-badge">-{product.discount}%</span>
          )}
        </div>

        {/* RIGHT: INFO */}
        <div className="pd-info">
          <h1 className="pd-title">{product.name}</h1>

          {/* CATEGORY */}
          <div className="pd-category">
            Category:{" "}
            <strong>
              {Array.isArray(product.categories)
                ? product.categories.map((cat, index) => (
                    <span key={cat}>
                      <Link to={`/category/${cat.toLowerCase()}`}>{cat}</Link>
                      {index < product.categories.length - 1 && ", "}
                    </span>
                  ))
                : <Link to={`/category/${product.categories.toLowerCase()}`}>{product.categories}</Link>}
            </strong>
          </div>

          {/* STOCK STATUS */}
          <div className={`pd-stock ${product.stock > 0 ? "in-stock" : "out-stock"}`}>
            {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
          </div>

          {/* RATING */}
          <div className="pd-rating">
            {"⭐".repeat(Math.floor(product.rating))}
            {product.rating % 1 >= 0.5 && "☆"}
            <span>({product.reviews} reviews)</span>
          </div>

          {/* PRICE */}
          <div className="pd-price-section">
            <span className="pd-price">₦{product.price.toLocaleString()}</span>
            {product.oldPrice && (
              <span className="pd-old-price">₦{product.oldPrice.toLocaleString()}</span>
            )}
          </div>

          {/* DESCRIPTION */}
          <p className="pd-description">{product.description}</p>

          {/* SIZES */}
          {product.sizes?.length > 0 && (
            <div className="pd-sizes">
              <span>Size:</span>
              <div className="pd-options">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={selectedSize === size ? "selected" : ""}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* COLORS */}
          {product.colors?.length > 0 && (
            <div className="pd-colors">
              <span>Color:</span>
              <div className="pd-options">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    style={{ backgroundColor: color.toLowerCase() }}
                    className={selectedColor === color ? "selected" : ""}
                    onClick={() => setSelectedColor(color)}
                  ></button>
                ))}
              </div>
            </div>
          )}

          {/* QUANTITY */}
          <div className="pd-quantity">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={outOfStock}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              disabled={outOfStock}
            >
              +
            </button>
          </div>

          {/* ADD TO CART */}
          <div className="pd-action-buttons">
            <button
              className="pd-add-to-cart"
              onClick={handleAddToCart}
              disabled={loading || outOfStock}
            >
              {loading ? <span className="pd-spinner"></span> : `Add ${quantity} to Cart`}
            </button>
            {added && <div className="pd-added-message">✅ Item added to cart</div>}
          </div>

          {/* EXTRA INFO */}
          <div className="pd-extra-info">
            {product.shipping && <p>{product.shipping}</p>}
            <p>🔒 Secure payment guaranteed</p>
            <p>↩ 7-day return policy</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;