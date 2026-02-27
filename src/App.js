// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// // Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop"; 

// // Pages
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword"; 
// import ProductDetails from "./pages/ProductDetails";
// import CategoryPage from "./pages/CategoryPage";
// import Checkout from "./pages/Checkout";
// import Search from "./pages/Search";
// import OrderConfirmation from "./pages/OrderConfirmation";

// // Context
// import { CartProvider } from "./context/CartContext";
// import { AuthProvider } from "./context/AuthContext";

// // Styles
// import "./styles/global.css";

// function AppContent() {
//   const location = useLocation();

//   // Hide layout on auth-related pages
//   const authPages = ["/login", "/signup", "/forgot-password"];
//   const hideLayout = authPages.includes(location.pathname);

//   return (
//     <>
//       <ScrollToTop /> {/* ✅ Add it here */}

//       {!hideLayout && <Navbar />}

//       <div className="main-content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/order-confirmation" element={<OrderConfirmation />} />
//           <Route path="/category/:category" element={<CategoryPage />} />
//           <Route path="/search" element={<Search />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/product/:id" element={<ProductDetails />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>

//       {!hideLayout && <Footer />}
//     </>
//   );
// }

// function App() {
//   return (
//     <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
//       <AuthProvider>
//         <CartProvider>
//           <Router>
//             <AppContent />
//           </Router>
//         </CartProvider>
//       </AuthProvider>
//     </GoogleOAuthProvider>
//   );
// }

// function NotFound() {
//   return (
//     <div style={{ padding: "80px", textAlign: "center" }}>
//       <h2>404 - Page Not Found</h2>
//       <p>The page you're looking for doesn't exist.</p>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; 

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword"; // ✅ New page
import ProductDetails from "./pages/ProductDetails";
import CategoryPage from "./pages/CategoryPage";
import Checkout from "./pages/Checkout";
import Search from "./pages/Search";
import OrderConfirmation from "./pages/OrderConfirmation";

// Context
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

// Styles
import "./styles/global.css";

function AppContent() {
  const location = useLocation();

  // Hide layout on auth-related pages
  const authPages = ["/login", "/signup", "/forgot-password", "/reset-password/:token"];
  
  // ✅ Check dynamic routes for hiding layout
  const hideLayout = authPages.some((path) =>
    location.pathname.startsWith(path.replace("/:token", ""))
  );

  return (
    <>
      <ScrollToTop /> {/* ✅ Keeps scroll at top on route change */}

      {!hideLayout && <Navbar />}

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} /> {/* ✅ New route */}
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <AuthProvider>
        <CartProvider>
          <Router>
            <AppContent />
          </Router>
        </CartProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

function NotFound() {
  return (
    <div style={{ padding: "80px", textAlign: "center" }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

export default App;
