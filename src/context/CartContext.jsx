// import { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(() => {
//     const savedCart = localStorage.getItem("cartItems");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       // Merge items only if id + size + color match
//       const existing = prev.find(
//         (item) =>
//           item.id === product.id &&
//           item.selectedSize === product.selectedSize &&
//           item.selectedColor === product.selectedColor
//       );

//       if (existing) {
//         return prev.map((item) =>
//           item === existing
//             ? { ...item, quantity: item.quantity + product.quantity }
//             : item
//         );
//       }

//       return [...prev, { ...product, quantity: product.quantity }];
//     });
//   };

//   const removeFromCart = (itemToRemove) => {
//     setCartItems((prev) =>
//       prev.filter(
//         (item) =>
//           !(
//             item.id === itemToRemove.id &&
//             item.selectedSize === itemToRemove.selectedSize &&
//             item.selectedColor === itemToRemove.selectedColor
//           )
//       )
//     );
//   };

//   const getTotal = () =>
//     cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, clearCart, getTotal }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      // Merge items if id + size + color match
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize &&
          item.selectedColor === product.selectedColor
      );

      if (existing) {
        return prev.map((item) =>
          item === existing
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      return [...prev, product];
    });
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === itemToRemove.id &&
            item.selectedSize === itemToRemove.selectedSize &&
            item.selectedColor === itemToRemove.selectedColor
          )
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const getTotalItems = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);