import React, { useRef } from 'react';
import { Link,  } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram,FaTiktok } from 'react-icons/fa';
import './Footer.css';


const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const Footer = () => {
  const footerRef = useRef(null);
  

 

  return (
    <footer className="footer-modern" ref={footerRef}>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1 */}
          <div>
            <h3 className="footer-title">About Us</h3>
            <ul>
              <li><Link to="/aboutus" className="footer-link" onClick={scrollToTop}>Our Company</Link></li>
              <li><Link to="/terms" className="footer-link" onClick={scrollToTop}>Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="footer-link" onClick={scrollToTop}>Privacy Policy</Link></li>
              <li>
                <Link
                  to="/"
                  className="footer-link"
                  onClick={() => setTimeout(() => footerRef.current?.scrollIntoView({ behavior: "smooth" }), 300)}
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="footer-title">Customer Service</h3>
            <ul>
              <li><Link to="/how-to-shop" className="footer-link" onClick={scrollToTop}>How to Shop</Link></li>
              <li><Link to="/contactus" className="footer-link" onClick={scrollToTop}>Contact Us</Link></li>
              <li><Link to="/faq" className="footer-link" onClick={scrollToTop}>FAQ</Link></li>
              <li><Link to="/disclaimer" className="footer-link" onClick={scrollToTop}>Disclaimer</Link></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="footer-title">Stay Connected</h3>
            <div className="footer-social">
              <a href="https://facebook.com/yourpage" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/yourpage" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/yourpage" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
               <a href="https://instagram.com/yourpage" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Let Us Buy 365. Your Everyday Guide to Smarter Online Shopping — Powered by Affiliate Insight.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
