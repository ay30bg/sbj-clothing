import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, addToCart, clearCart, getTotal } = useCart();

  const subtotal = getTotal();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleQuantity = (item, delta) => {
    if (delta === -1 && item.quantity === 1) {
      removeFromCart(item);
    } else {
      addToCart({ ...item, quantity: delta });
    }
  };

  // ✅ Dynamic Page Title
  useEffect(() => {
    document.title = "Cart - SBJ Clothing";
  }, []);

  return (
    <div className="cart-container">
      {/* CART ITEMS */}
      <div className="cart-items">
        <h2>Cart</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <img
              src="https://via.placeholder.com/200x150?text=Empty+Cart"
              alt="Empty Cart"
            />
            <p>Your cart is empty</p>
            <Link to="/" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>

                  {/* Variations */}
                  {item.selectedSize && (
                    <div className="cart-item-variation">
                      <span className="variation-label">Size:</span>
                      <span className="variation-value">{item.selectedSize}</span>
                    </div>
                  )}
                  {item.selectedColor && (
                    <div className="cart-item-variation">
                      <span className="variation-label">Color:</span>
                      <span
                        className="variation-value color-swatch"
                        style={{ backgroundColor: item.selectedColor }}
                      />
                    </div>
                  )}

                  <p className="cart-item-price">
                    ₦{item.price.toLocaleString()}
                  </p>

                  <div className="quantity-controls">
                    <button onClick={() => handleQuantity(item, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantity(item, 1)}>+</button>
                  </div>
                </div>

                <button className="remove-btn" onClick={() => removeFromCart(item)}>
                  Remove
                </button>
              </div>
            ))}

            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </>
        )}
      </div>

      {/* CART SUMMARY */}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>
            Subtotal ({totalItems} items):{" "}
            <span className="summary-price">₦{subtotal.toLocaleString()}</span>
          </h3>

          <div className="cost-breakdown">
            <p>
              Shipping: <span>Calculated at checkout</span>
            </p>
            <p>
              Taxes (VAT): <span>Included</span>
            </p>
            <p className="total-line">
              Order Total: <strong>₦{subtotal.toLocaleString()}</strong>
            </p>
          </div>

          <div className="coupon-section">
            <input type="text" placeholder="Enter promo code" />
            <button className="apply-btn">Apply</button>
          </div>

          <div className="gift-option">
            <input type="checkbox" id="gift" />
            <label htmlFor="gift">This order contains a gift</label>
          </div>

          <div className="delivery-info">
            <p>
              Estimated delivery: <strong>2 – 5 business days</strong>
            </p>
            <p className="shipping-note">
              Exact shipping fees calculated at checkout
            </p>
          </div>

          <Link to="/checkout">
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>

          <div className="secure-checkout">
            <span className="lock-icon">🔒</span> Secure checkout guaranteed
          </div>

          <div className="return-policy">
            <p>✅ 30-day free returns</p>
            <p>💳 100% money-back guarantee</p>
            <p>🔒 Payments secured by SSL</p>
          </div>
        </div>
      )}
    </div>
  );
}