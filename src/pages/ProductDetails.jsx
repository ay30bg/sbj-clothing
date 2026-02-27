import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id.toString() === id);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} - SBJ Clothings`;
      setSelectedImage(product.images?.[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="pd-not-found">
        <h2>Product Not Found</h2>
        <Link to="/">Go Back Home</Link>
      </div>
    );
  }

  const outOfStock = product.stock === 0;

  const relatedProducts = products.filter(
    (p) =>
      p.id !== product.id &&
      p.categories?.some((cat) =>
        product.categories?.includes(cat)
      )
  );

  const handleAddToCart = () => {
    if (product.sizes?.length && !selectedSize) {
      alert("Please select a size");
      return;
    }

    if (product.colors?.length && !selectedColor) {
      alert("Please select a color");
      return;
    }

    if (quantity > product.stock) {
      alert("Quantity exceeds available stock");
      return;
    }

    setLoading(true);

    const cartProduct = {
      ...product,
      selectedSize,
      selectedColor,
      selectedImage,
    };

    // ✅ Pass quantity separately (IMPORTANT)
    addToCart(cartProduct, quantity);

    setLoading(false);
    setAdded(true);
    setQuantity(1);

    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pd-page">
      <div className="pd-container">

        {/* LEFT SIDE - GALLERY */}
        <div className="pd-gallery-wrapper">
          <div className="pd-main-image-box">
            <img
              src={selectedImage}
              alt={product.name}
              className="pd-main-image"
            />
          </div>

          {product.images?.length > 1 && (
            <div className="pd-thumbnails">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name}-${index}`}
                  className={`pd-thumb ${
                    selectedImage === img ? "active" : ""
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          )}
        </div>

        {/* RIGHT SIDE - INFO */}
        <div className="pd-info">
          <h1 className="pd-title">{product.name}</h1>

          <div className="pd-stock">
            {product.stock > 0
              ? `In Stock (${product.stock} available)`
              : "Out of Stock"}
          </div>

          <div className="pd-price-section">
            <span className="pd-price">
              ₦{product.price.toLocaleString()}
            </span>

            {product.oldPrice && (
              <span className="pd-old-price">
                ₦{product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>

          <p className="pd-description">
            {product.description}
          </p>

          {/* SIZE OPTIONS */}
          {product.sizes?.length > 0 && (
            <div className="pd-sizes">
              <span>Size:</span>
              <div className="pd-options">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={
                      selectedSize === size ? "selected" : ""
                    }
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* COLOR OPTIONS */}
          {product.colors?.length > 0 && (
            <div className="pd-colors">
              <span>Color:</span>
              <div className="pd-options">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    style={{
                      backgroundColor:
                        color.toLowerCase(),
                    }}
                    className={
                      selectedColor === color
                        ? "selected-color"
                        : ""
                    }
                    onClick={() =>
                      setSelectedColor(color)
                    }
                  />
                ))}
              </div>
            </div>
          )}

          {/* QUANTITY */}
          <div className="pd-quantity">
            <button
              onClick={() =>
                setQuantity((q) =>
                  Math.max(1, q - 1)
                )
              }
              disabled={outOfStock}
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              onClick={() =>
                setQuantity((q) =>
                  Math.min(
                    product.stock,
                    q + 1
                  )
                )
              }
              disabled={outOfStock}
            >
              +
            </button>
          </div>

          {/* ADD TO CART */}
          <button
            className="pd-add-to-cart"
            onClick={handleAddToCart}
            disabled={loading || outOfStock}
          >
            {loading
              ? "Adding..."
              : `Add ${quantity} to Cart`}
          </button>

          {added && (
            <div className="pd-added-message">
              ✅ Item added to cart
            </div>
          )}
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <div className="pd-related-section">
          <h2>Related Products</h2>
          <div className="pd-related-grid">
            {relatedProducts
              .slice(0, 4)
              .map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

