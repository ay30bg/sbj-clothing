import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaTshirt,
  FaFemale,
  FaMale,
  FaGem,
  FaShoePrints,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchOpen(false); // close mobile search if open
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* Desktop Search */}
        <form className="search-container desktop-search" onSubmit={handleSearchSubmit}>
          <input
            className="search"
            placeholder="Search for clothing, fabrics, accessories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-icon">
            <FaSearch />
          </button>
        </form>

        {/* Desktop Nav */}
        <div className="desktop-nav">
          {user ? (
            <button className="nav-item logout-btn" onClick={logout}>
              <FaUser className="icon" /> Logout
            </button>
          ) : (
            <Link to="/login" className="nav-item">
              <FaUser className="icon" /> Sign In
            </Link>
          )}

          <Link to="/cart" className="cart-link nav-item">
            <FaShoppingCart className="icon" />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="mobile-icons">
          <FaSearch className="mobile-search-icon" onClick={toggleSearch} />
          <FaBars className="hamburger" onClick={toggleSidebar} />
        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
        onClick={closeSidebar}
      ></div>

      {/* ================= RIGHT SIDEBAR ================= */}
      <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>MENU</h3>
          <FaTimes className="close-btn" onClick={closeSidebar} />
        </div>

        {/* SHOP SECTION */}
        <div className="sidebar-section">
          <p className="sidebar-title">Shop</p>
          <Link to="/category/fabrics" onClick={closeSidebar}>
            <FaTshirt /> Fabrics
          </Link>
          <Link to="/category/women" onClick={closeSidebar}>
            <FaFemale /> Women
          </Link>
          <Link to="/category/men" onClick={closeSidebar}>
            <FaMale /> Men
          </Link>
          <Link to="/category/jewelries" onClick={closeSidebar}>
            <FaGem /> Jewelries
          </Link>
          <Link to="/category/shoes" onClick={closeSidebar}>
            <FaShoePrints /> Shoes
          </Link>
        </div>

        <div className="sidebar-divider"></div>

        {/* ACCOUNT SECTION */}
        <div className="sidebar-section">
          <p className="sidebar-title">Account</p>
          {user ? (
            <button
              className="sidebar-logout-btn"
              onClick={() => {
                logout();
                closeSidebar();
              }}
            >
              <FaUser /> Logout
            </button>
          ) : (
            <Link to="/login" onClick={closeSidebar}>
              <FaUser /> Sign In
            </Link>
          )}
          <Link to="/cart" onClick={closeSidebar}>
            <div className="sidebar-cart">
              <FaShoppingCart /> Cart
              {totalItems > 0 && <span className="cart-badge-sidebar">{totalItems}</span>}
            </div>
          </Link>
        </div>
      </div>

      {/* ================= SEARCH OVERLAY ================= */}
      {searchOpen && (
        <div className="search-overlay">
          <form className="search-overlay-content" onSubmit={handleSearchSubmit}>
            <input
              className="overlay-input"
              placeholder="Search for clothing, fabrics, accessories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <button type="submit" className="overlay-search-btn">
              <FaSearch />
            </button>
            <FaTimes className="close-search" onClick={toggleSearch} />
          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;