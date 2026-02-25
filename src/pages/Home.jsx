import { useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { FaWhatsapp } from "react-icons/fa";
import bannerImage from "../assets/sbj-banner.png";
import womanImage from "../assets/women-category.png";
import manImage from "../assets/men-category.png";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  // ✅ Dynamic page title
  useEffect(() => {
    document.title = "Home - SBJ Clothings";
  }, []);

  // WhatsApp phone number
  const whatsappNumber = "2348024414957";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Shuffle function
  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const dynamicProducts = useMemo(
    () => shuffleArray(products).slice(0, 5),
    []
  );

  const dynamicBestSellers = useMemo(
    () => shuffleArray(products.filter((p) => p.bestSeller)).slice(0, 5),
    []
  );

  return (
    <div className="home-page">
      {/* ================= HERO SECTION ================= */}
      <section className="top-hero">
        <div
          className="main-banner"
          style={{ backgroundImage: `url(${bannerImage})` }}
        ></div>
      </section>

      {/* ================= ALL PRODUCTS ================= */}
      <section className="section">
        <div className="section-header">
          <h2>All Products</h2>
        </div>

        <div className="product-grid">
          {dynamicProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="categories">
        <div
          className="category-box"
          style={{ backgroundImage: `url(${womanImage})` }}
        >
          <span>Women</span>
          <button
            className="shop-now-btn"
            onClick={() => navigate("/category/women")}
          >
            Shop Now
          </button>
        </div>

        <div
          className="category-box"
          style={{ backgroundImage: `url(${manImage})` }}
        >
          <span>Men</span>
          <button
            className="shop-now-btn"
            onClick={() => navigate("/category/men")}
          >
            Shop Now
          </button>
        </div>

        <div
          className="category-box"
          style={{
            backgroundImage:
              "url('https://tse3.mm.bing.net/th/id/OIP.w7a7CIKEz5sOIjUo3rWxnQHaEK?pid=Api&P=0&h=220')",
          }}
        >
          <span>Jewelries</span>
          <button
            className="shop-now-btn"
            onClick={() => navigate("/category/jewelries")}
          >
            Shop Now
          </button>
        </div>

        <div
          className="category-box"
          style={{
            backgroundImage:
              "url('https://tse3.mm.bing.net/th/id/OIP.m6c2AE6cAtP34NpcLWUCtQHaFK?pid=Api&P=0&h=220')",
          }}
        >
          <span>Lace Fabrics</span>
          <button
            className="shop-now-btn"
            onClick={() => navigate("/category/fabrics")}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-choose-us">
        <h2>Why Shop With Us?</h2>

        <div className="why-grid">
          <div className="why-card">
            <span>🚚</span>
            <h4>Fast Delivery</h4>
            <p>Nationwide delivery across Nigeria</p>
          </div>

          <div className="why-card">
            <span>🔒</span>
            <h4>Secure Payments</h4>
            <p>100% safe and encrypted checkout</p>
          </div>

          <div className="why-card">
            <span>💎</span>
            <h4>Premium Quality</h4>
            <p>Luxury fabrics sourced globally</p>
          </div>

          <div className="why-card">
            <span>↩</span>
            <h4>Easy Returns</h4>
            <p>7-day return guarantee</p>
          </div>
        </div>
      </section>

      {/* ================= BEST SELLERS ================= */}
      <section className="section">
        <div className="section-header">
          <h2>Best Sellers</h2>
          <span className="view-all">View All</span>
        </div>

        <div className="product-grid">
          {dynamicBestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={28} color="#fff" />
      </a>
    </div>
  );
};

export default Home;