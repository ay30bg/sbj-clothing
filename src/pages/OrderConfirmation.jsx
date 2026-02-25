import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/orderConfirmation.css";

export default function OrderConfirmation() {
  const location = useLocation();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (location.state) {
      setOrder(location.state);
      sessionStorage.setItem("lastOrder", JSON.stringify(location.state));
    } else {
      const saved = sessionStorage.getItem("lastOrder");
      if (saved) setOrder(JSON.parse(saved));
    }
  }, [location.state]);

  // ✅ Dynamic page title
  useEffect(() => {
    if (order) {
      document.title = `Order Confirmed - ${order.paymentRef || "SBJ Clothings"}`;
    } else {
      document.title = "Order Confirmation - SBJ Clothings";
    }
  }, [order]);

  if (!order) {
    return (
      <div className="order-empty">
        <h2>No order found</h2>
        <p>Looks like you haven’t placed an order yet.</p>
        <Link to="/" className="btn-home">Back to Shop</Link>
      </div>
    );
  }

  const { shipping, items, totals, paymentRef, isGuest } = order;

  return (
    <div className="order-confirmation-container">
      <div className="order-success">
        <h2>🎉 Order Confirmed!</h2>
        <p>
          Thank you, <strong>{shipping.fullName}</strong>! Your order has been placed successfully.
        </p>

        {isGuest && (
          <p className="guest-note">
            You checked out as a guest.{" "}
            <Link to="/signup">Create an account</Link> to track your orders and enjoy faster checkout next time.
          </p>
        )}

        <p className="order-id">
          Order Reference:{" "}
          <strong>#{paymentRef || Math.floor(Math.random() * 100000)}</strong>
        </p>
      </div>

      <div className="order-summary-section">
        {/* Shipping Info */}
        <div className="order-box">
          <h3>Shipping Information</h3>
          <ul>
            <li><strong>Name:</strong> {shipping.fullName}</li>
            <li><strong>Address:</strong> {shipping.address}, {shipping.city}</li>
            {shipping.postalCode && <li><strong>Postal Code:</strong> {shipping.postalCode}</li>}
            {shipping.phone && <li><strong>Phone:</strong> {shipping.phone}</li>}
          </ul>
        </div>

        {/* Items Ordered */}
        <div className="order-box">
          <h3>Items Ordered</h3>
          <div className="order-items">
            {items.map((item, index) => (
              <div key={index} className="order-item">
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  {item.selectedSize && (
                    <span className="item-variation">Size: <strong>{item.selectedSize}</strong></span>
                  )}
                  {item.selectedColor && (
                    <span className="item-variation color-variation">
                      Color:
                      <span
                        className="color-swatch"
                        style={{ backgroundColor: item.selectedColor }}
                      />
                    </span>
                  )}
                  <span className="item-qty">Qty: {item.qty}</span>
                </div>
                <div className="item-price">
                  ₦{(item.price * item.qty).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Summary */}
        <div className="order-box">
          <h3>Payment Summary</h3>
          <p>Items Total: <span>₦{totals.itemsTotal.toLocaleString()}</span></p>
          <p>Delivery Fee: <span>₦{totals.delivery.toLocaleString()}</span></p>
          <h3 className="total">Order Total: <span>₦{totals.orderTotal.toLocaleString()}</span></h3>
        </div>
      </div>

      {/* Actions */}
      <div className="order-actions">
        <Link to="/" className="btn-home">Continue Shopping</Link>
      </div>
    </div>
  );
}