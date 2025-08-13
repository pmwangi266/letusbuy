import React from 'react';
import './contact.css';
import { FaInstagram, FaFacebook, FaTelegram, FaTiktok } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Scroll from './Scroll';
import Footer from './Footer';
const ContactUs = () => {
 const navigate = useNavigate();
 const handleBrowseClick = () => {
    navigate('/products');
  };

  return (
    <div className="contact-container">
      <Scroll />
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p className="intro">
          We’re always happy to hear from you! Whether you're a shopper looking for product recommendations,
          a brand interested in affiliate partnerships, or someone needing support — we're here to assist.
          Let Us Buy 365 is committed to providing prompt, helpful responses to all inquiries.
        </p>
        <p className="intro">
          Our team operates entirely online, ensuring we’re accessible wherever you are in the world.
          Feel free to reach out using any of the contact options below.
        </p>

        <div className="contact-details">
          <div className="detail">
            <strong>Email:</strong> <span>support@letusbuy365.com</span>
          </div>

          <div className="detail">
            <strong>Phone:</strong> +254 726 174 637
          </div>
          <div className="detail">
            <strong>WhatsApp:</strong> +254 726 174 637
          </div>
          <div className="detail">
            <strong>Location:</strong> Nairobi, Kenya (Online-based)
          </div>
          <div className="detail">
            <strong>Operating Hours:</strong> We serve a <em>global audience</em>.  
            Reach out anytime — we aim to respond within 24 hours, Monday to Saturday.
          </div>
        </div>

        <div className="social-media">
          <p><strong>Connect with us on social media:</strong></p>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" /> Instagram
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" /> Facebook
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="social-icon" /> Telegram
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="social-icon" /> TikTok
              </a>
            </li>
          </ul>
        </div>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to Shop Smarter?</h2>
            <p>Start exploring our product guides and make your next purchase with confidence.</p>
            <button 
              className="cta-button"
              onClick={handleBrowseClick}
            >
              Browse Recommendations
            </button>
          </div>
        </section>
         <Footer />
      
      </div>
      
    </div>
    
  );
};
 <Footer />
export default ContactUs;
