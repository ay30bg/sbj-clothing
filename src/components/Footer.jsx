import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
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
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping Policy</li>
            <li>Returns & Refunds</li>
            <li>Track Order</li>
          </ul>
        </div>

        {/* ADDRESS */}
        <div className="footer-section">
          <h4>Address</h4>
          <p>
            12 Adeola Odeku Street,<br />
            Victoria Island, Lagos, Nigeria
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