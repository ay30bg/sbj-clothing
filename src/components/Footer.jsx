import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-section">
          <h3 className="footer-logo">SBJ Clothings</h3>
          <p>
            Premium fashion & accessories for modern style.
            Discover elegance, comfort, and confidence.
          </p>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="X">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><Link to="/category/men">Men</Link></li>
            <li><Link to="/category/women">Women</Link></li>
            <li><Link to="/category/jewelries">Jewelries</Link></li>
            <li><Link to="/category/fabrics">Fabrics</Link></li>
            <li><Link to="/category/shoes">Shoes</Link></li>
          </ul>
        </div>

        {/* ADDRESS */}
        <div className="footer-section">
          <h4>Address</h4>
          <p>
            Shop 9 Famutimi Street, Victor Fagbemi Road, <br />
            Beside Lemmy Polly Company, Aboru.
          </p>
          <p>Phone: +234 802 441 4957</p>
          <p>Email: info@sbjclothings.com</p>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-section">
          <h4>Subscribe</h4>
          <p>Get updates on new collections & exclusive offers.</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} SBJ Clothings. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
