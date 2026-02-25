import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext"; 
import { useAuth } from "../context/AuthContext"; 
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [shipping, setShipping] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const DELIVERY_FEE = 7000;
  const itemsTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const orderTotal = itemsTotal + DELIVERY_FEE;

  // Load saved shipping info (guest)
  useEffect(() => {
    const savedShipping = sessionStorage.getItem("guestShipping");
    if (savedShipping) {
      setShipping(JSON.parse(savedShipping));
    }
  }, []);

  // ✅ Dynamic page title
  useEffect(() => {
    document.title = user ? `Checkout - ${user.email}` : "Checkout - Guest";
  }, [user]);

  const handleInputChange = (e) => {
    const updated = { ...shipping, [e.target.name]: e.target.value };
    setShipping(updated);

    // Save guest shipping info temporarily
    if (!user) {
      sessionStorage.setItem("guestShipping", JSON.stringify(updated));
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-container empty">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  const placeOrder = () => {
    let userIdentifier = user ? user.email : null;
    if (!userIdentifier) {
      let guestId = sessionStorage.getItem("guestId");
      if (!guestId) {
        guestId = `GUEST${Date.now()}`;
        sessionStorage.setItem("guestId", guestId);
      }
      userIdentifier = guestId;
    }

    const orderData = {
      user: userIdentifier,
      shipping,
      items: cartItems.map(item => ({ ...item, qty: item.quantity })),
      totals: { itemsTotal, delivery: DELIVERY_FEE, orderTotal },
      paymentRef: `ORDER${Date.now()}`,
      isGuest: !user,
    };

    sessionStorage.setItem("lastOrder", JSON.stringify(orderData));
    clearCart();
    if (!user) sessionStorage.removeItem("guestShipping");
    navigate("/order-confirmation", { state: orderData });
  };

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <div className="checkout-box">
          <h2>Shipping Details</h2>
          <form className="shipping-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={shipping.fullName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Street Address *"
              value={shipping.address}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City *"
              value={shipping.city}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={shipping.postalCode}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              value={shipping.phone}
              onChange={handleInputChange}
            />
          </form>
        </div>

        <div className="checkout-box">
          <h2>Review Your Order</h2>
          <div className="checkout-items">
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <div className="checkout-item-info">
                  <span className="item-name">{item.name}</span>

                  {/* Variations */}
                  {item.selectedSize && (
                    <span className="item-variation">
                      Size: <strong>{item.selectedSize}</strong>
                    </span>
                  )}
                  {item.selectedColor && (
                    <span className="item-variation">
                      Color: <strong>{item.selectedColor}</strong>
                      <span
                        className="color-swatch"
                        style={{ backgroundColor: item.selectedColor }}
                      />
                    </span>
                  )}

                  <span className="item-qty">Qty: {item.quantity}</span>
                </div>
                <span className="item-price">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="checkout-summary">
        <h3>Order Summary</h3>
        <p>Items: <span>₦{itemsTotal.toLocaleString()}</span></p>
        <p>Delivery: <span>₦{DELIVERY_FEE.toLocaleString()}</span></p>
        <h3 className="summary-total">
          Order Total: <span>₦{orderTotal.toLocaleString()}</span>
        </h3>

        <button className="place-order-btn" onClick={placeOrder}>
          Place Order
        </button>

        {!user && (
          <p className="guest-note">
            You are checking out as a guest. Create an account for faster checkout next time.
          </p>
        )}

        <div className="secure-checkout">🔒 Secure checkout guaranteed</div>
      </div>
    </div>
  );
}