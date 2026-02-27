import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
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
            <a href="https://www.facebook.com/josephine.dara" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/sbj_wurld" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com/@sbjclothing66" aria-label="X">
              <FaTiktok />
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
          <p>Email: sbjclothing349@gmail.com</p>
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
