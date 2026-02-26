// import React, { useState, useEffect } from "react";
// import { useCart } from "../context/CartContext";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import "../styles/checkout.css";

// export default function Checkout() {
//   const { cartItems, clearCart } = useCart();
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const [shipping, setShipping] = useState({
//     fullName: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const DELIVERY_FEE = 7000;

//   const itemsTotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const orderTotal = itemsTotal + DELIVERY_FEE;

//   // Load guest shipping
//   useEffect(() => {
//     const savedShipping = sessionStorage.getItem("guestShipping");
//     if (savedShipping) {
//       setShipping(JSON.parse(savedShipping));
//     }
//   }, []);

//   // Dynamic title
//   useEffect(() => {
//     document.title = user
//       ? `Checkout - ${user.email}`
//       : "Checkout - Guest";
//   }, [user]);

//   const handleInputChange = (e) => {
//     const updated = { ...shipping, [e.target.name]: e.target.value };
//     setShipping(updated);

//     if (!user) {
//       sessionStorage.setItem("guestShipping", JSON.stringify(updated));
//     }
//   };

//   if (cartItems.length === 0) {
//     return (
//       <div className="checkout-container empty">
//         <p>Your cart is empty.</p>
//       </div>
//     );
//   }

//   // ================================
//   // VERIFY PAYMENT (ASYNC FUNCTION)
//   // ================================
//   const verifyPayment = async (reference) => {
//     try {
//       const orderPayload = {
//         user: user ? user.email : "guest",
//         shipping,
//         items: cartItems.map((item) => ({
//           ...item,
//           qty: item.quantity,
//         })),
//         totals: {
//           itemsTotal,
//           delivery: DELIVERY_FEE,
//           orderTotal,
//         },
//       };

//       const verifyRes = await fetch(
//         `${process.env.REACT_APP_API_URL}/api/orders/verify-payment`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             reference,
//             orderData: orderPayload,
//           }),
//         }
//       );

//       const data = await verifyRes.json();

//       if (!verifyRes.ok) {
//         throw new Error(data.message || "Verification failed");
//       }

//       clearCart();

//       if (!user) {
//         sessionStorage.removeItem("guestShipping");
//       }

//       navigate("/order-confirmation", {
//         state: data.order,
//       });

//     } catch (error) {
//       alert("Payment verification failed.");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ================================
//   // PAYSTACK INITIALIZATION
//   // ================================
//   const handlePaystackPayment = () => {
//     if (
//       !shipping.fullName ||
//       !shipping.address ||
//       !shipping.city ||
//       !shipping.phone
//     ) {
//       alert("Please fill all required shipping fields.");
//       return;
//     }

//     if (!window.PaystackPop) {
//       alert("Payment service unavailable. Refresh page.");
//       return;
//     }

//     setLoading(true);

//     const handler = window.PaystackPop.setup({
//       key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
//       email: user ? user.email : `${Date.now()}@guest.com`,
//       amount: orderTotal * 100, // convert to kobo
//       currency: "NGN",
//       ref: `SBJ_${Date.now()}`,

//       callback: function (response) {
//         // MUST NOT be async
//         verifyPayment(response.reference);
//       },

//       onClose: function () {
//         setLoading(false);
//         alert("Payment cancelled.");
//       },
//     });

//     handler.openIframe();
//   };

//   return (
//     <div className="checkout-container">
//       <div className="checkout-left">
//         <div className="checkout-box">
//           <h2>Shipping Details</h2>
//           <form
//             className="shipping-form"
//             onSubmit={(e) => e.preventDefault()}
//           >
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name *"
//               value={shipping.fullName}
//               onChange={handleInputChange}
//               required
//             />

//             <input
//               type="text"
//               name="address"
//               placeholder="Street Address *"
//               value={shipping.address}
//               onChange={handleInputChange}
//               required
//             />

//             <input
//               type="text"
//               name="city"
//               placeholder="City *"
//               value={shipping.city}
//               onChange={handleInputChange}
//               required
//             />

//             <input
//               type="text"
//               name="postalCode"
//               placeholder="Postal Code"
//               value={shipping.postalCode}
//               onChange={handleInputChange}
//             />

//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number *"
//               value={shipping.phone}
//               onChange={handleInputChange}
//               required
//             />
//           </form>
//         </div>

//         <div className="checkout-box">
//           <h2>Review Your Order</h2>
//           <div className="checkout-items">
//             {cartItems.map((item) => (
//               <div key={item.id} className="checkout-item">
//                 <div className="checkout-item-info">
//                   <span className="item-name">{item.name}</span>

//                   {item.selectedSize && (
//                     <span className="item-variation">
//                       Size: <strong>{item.selectedSize}</strong>
//                     </span>
//                   )}

//                   {item.selectedColor && (
//                     <span className="item-variation">
//                       Color: <strong>{item.selectedColor}</strong>
//                       <span
//                         className="color-swatch"
//                         style={{
//                           backgroundColor: item.selectedColor,
//                         }}
//                       />
//                     </span>
//                   )}

//                   <span className="item-qty">
//                     Qty: {item.quantity}
//                   </span>
//                 </div>

//                 <span className="item-price">
//                   ₦{(item.price * item.quantity).toLocaleString()}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="checkout-summary">
//         <h3>Order Summary</h3>

//         <p>
//           Items: <span>₦{itemsTotal.toLocaleString()}</span>
//         </p>

//         <p>
//           Delivery: <span>₦{DELIVERY_FEE.toLocaleString()}</span>
//         </p>

//         <h3 className="summary-total">
//           Order Total:{" "}
//           <span>₦{orderTotal.toLocaleString()}</span>
//         </h3>

//         <button
//           className="place-order-btn"
//           onClick={handlePaystackPayment}
//           disabled={loading}
//         >
//           {loading
//             ? "Processing..."
//             : `Pay ₦${orderTotal.toLocaleString()}`}
//         </button>

//         {!user && (
//           <p className="guest-note">
//             You are checking out as a guest.
//             Create an account for faster checkout next time.
//           </p>
//         )}

//         <div className="secure-checkout">
//           🔒 Secure checkout powered by Paystack
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useMemo } from "react";
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

  const [loading, setLoading] = useState(false);

  const DELIVERY_FEE = 7000;

  // ================================
  // CALCULATIONS
  // ================================
  const itemsTotal = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const orderTotal = useMemo(() => {
    return itemsTotal + DELIVERY_FEE;
  }, [itemsTotal]);

  // ================================
  // LOAD SAVED GUEST SHIPPING
  // ================================
  useEffect(() => {
    const savedShipping = sessionStorage.getItem("guestShipping");
    if (savedShipping) {
      setShipping(JSON.parse(savedShipping));
    }
  }, []);

  // Dynamic page title
  useEffect(() => {
    document.title = user
      ? `Checkout - ${user.email}`
      : "Checkout - Guest";
  }, [user]);

  const handleInputChange = (e) => {
    const updated = { ...shipping, [e.target.name]: e.target.value };
    setShipping(updated);

    if (!user) {
      sessionStorage.setItem("guestShipping", JSON.stringify(updated));
    }
  };

  // ================================
  // VERIFY PAYMENT
  // ================================
  const verifyPayment = async (reference) => {
    try {
      if (!reference) throw new Error("Missing payment reference");

      const orderPayload = {
        user: user ? user.email : "guest",
        shipping,
        items: cartItems.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          qty: item.quantity,
          selectedSize: item.selectedSize || null,
          selectedColor: item.selectedColor || null,
        })),
        totals: {
          itemsTotal,
          delivery: DELIVERY_FEE,
          orderTotal,
        },
      };

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/orders/verify-payment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reference,
            orderData: orderPayload,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Payment verification failed");
      }

      // ✅ Only clear cart after backend confirms success
      clearCart();

      if (!user) {
        sessionStorage.removeItem("guestShipping");
      }

      navigate("/order-confirmation", {
        state: data.order,
      });

    } catch (error) {
      console.error("Verification error:", error.message);
      alert(error.message || "Payment verification failed.");
    } finally {
      setLoading(false);
    }
  };

  // ================================
  // PAYSTACK INITIALIZATION
  // ================================
  const handlePaystackPayment = () => {
    if (loading) return; // prevent double click

    if (
      !shipping.fullName ||
      !shipping.address ||
      !shipping.city ||
      !shipping.phone
    ) {
      alert("Please fill all required shipping fields.");
      return;
    }

    if (!window.PaystackPop) {
      alert("Payment service unavailable. Refresh page.");
      return;
    }

    setLoading(true);

    const handler = window.PaystackPop.setup({
      key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
      email: user ? user.email : `${Date.now()}@guest.com`,
      amount: orderTotal * 100, // convert to kobo
      currency: "NGN",
      ref: `SBJ_${Date.now()}_${Math.floor(Math.random() * 1000)}`,

      callback: function (response) {
        if (response?.reference) {
          verifyPayment(response.reference);
        } else {
          setLoading(false);
          alert("Payment reference missing.");
        }
      },

      onClose: function () {
        setLoading(false);
        alert("Payment cancelled.");
      },
    });

    handler.openIframe();
  };

  // ================================
  // EMPTY CART
  // ================================
  if (cartItems.length === 0) {
    return (
      <div className="checkout-container empty">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  // ================================
  // UI
  // ================================
  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <div className="checkout-box">
          <h2>Shipping Details</h2>
          <form
            className="shipping-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={shipping.fullName}
              onChange={handleInputChange}
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Street Address *"
              value={shipping.address}
              onChange={handleInputChange}
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City *"
              value={shipping.city}
              onChange={handleInputChange}
              required
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
              required
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
                        style={{
                          backgroundColor: item.selectedColor,
                        }}
                      />
                    </span>
                  )}

                  <span className="item-qty">
                    Qty: {item.quantity}
                  </span>
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

        <p>
          Items: <span>₦{itemsTotal.toLocaleString()}</span>
        </p>

        <p>
          Delivery: <span>₦{DELIVERY_FEE.toLocaleString()}</span>
        </p>

        <h3 className="summary-total">
          Order Total:{" "}
          <span>₦{orderTotal.toLocaleString()}</span>
        </h3>

        <button
          className="place-order-btn"
          onClick={handlePaystackPayment}
          disabled={loading}
        >
          {loading
            ? "Processing..."
            : `Pay ₦${orderTotal.toLocaleString()}`}
        </button>

        {!user && (
          <p className="guest-note">
            You are checking out as a guest.
            Create an account for faster checkout next time.
          </p>
        )}

        <div className="secure-checkout">
          🔒 Secure checkout powered by Paystack
        </div>
      </div>
    </div>
  );
}
