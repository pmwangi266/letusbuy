import React from 'react';
import './Terms.css';
import Scroll from './Scroll';
import Footer from './Footer';
const Terms = () => {
  return (
    <div className="terms-page">
        <Scroll />
      <div className="terms-content-wrapper">
        <div className="container">
          <div className="terms-header">
            <h1>Terms of <span className="brand">Service</span></h1>
            <p className="tagline">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
        
          <div className="terms-section">
            <div className="section-content">
              <p>Welcome to Let Us Buy 365! These Terms of Service ("Terms") govern your use of our website, content, recommendations, and affiliate services. Please read them carefully before using the site. By accessing or using Let Us Buy 365, you agree to be bound by these Terms.</p>
            </div>
          </div>

          <div className="terms-section">
            <div className="section-header">
              <h2>1. About Let Us Buy 365</h2>
            </div>
            <div className="section-content">
              <p>Let Us Buy 365 is an online platform that helps users make smarter purchasing decisions through product recommendations, reviews, and affiliate links. We do not sell products directly. When you click on certain links, you may be redirected to third-party sites where purchases can be made.</p>
            </div>
          </div>

          <div className="terms-section">
            <div className="section-header">
              <h2>2. Who Can Use This Website</h2>
            </div>
            <div className="section-content">
              <p>You may use our website if you are 18 years or older or have the consent of a legal guardian. By using Let Us Buy 365, you confirm that:</p>
              <ul className="terms-list">
                <li>You are legally able to enter into these Terms.</li>
                <li>You will comply with all applicable laws.</li>
                <li>You will not use the site for any unlawful or abusive purpose.</li>
              </ul>
            </div>
          </div>

          <div className="terms-section">
            <div className="section-header">
              <h2>3. Affiliate Disclosure</h2>
            </div>
            <div className="section-content">
              <p>Some links on our website are affiliate links. This means we may earn a commission if you purchase a product after clicking our link. This does not impact the price you pay. Our reviews and recommendations are based on research and user interest, not commissions.</p>
            </div>
          </div>

          <div className="terms-section">
            <div className="section-header">
              <h2>4. Accuracy of Information</h2>
            </div>
            <div className="section-content">
              <p>We aim to keep all content up to date and accurate. However, prices, availability, and features of products may change on third-party websites without notice. We are not liable for outdated or incorrect information provided by sellers or manufacturers.</p>
            </div>
          </div>

          <div className="terms-section">
            <div className="section-header">
              <h2>5. User Conduct</h2>
            </div>
            <div className="section-content">
              <p>You agree not to:</p>
              <ul className="terms-list">
                <li>Use our site for any illegal or harmful activity.</li>
                <li>Attempt to interfere with the operation or security of the website.</li>
                <li>Copy or republish our content without permission.</li>
                <li>Misuse product review features or feedback forms.</li>
              </ul>
            </div>
          </div>

          <div className="terms-section">
            <div className="section-header">
              <h2>6. Intellectual Property</h2>
            </div>
            <div className="section-content">
              <p>All website content—including text, images, graphics, logos, design, and layout—is owned by or licensed to Let Us Buy 365 and is protected by copyright and intellectual property laws. You may not reuse or reproduce our content without express permission.</p>
            </div>
          </div>

          <div className="terms-section">
            <div className="section-header">
              <h2>7. Third-Party Links and Content</h2>
            </div>
            <div className="section-content">
              <p>Our site contains links to third-party websites. We are not responsible for the content, products, or privacy practices of these third parties. Your use of their websites is subject to their terms and policies.</p>
            </div>
          </div>

          <div className="terms-section">
            <div className="section-header">
              <h2>8. Disclaimer of Warranties</h2>
            </div>
            <div className="section-content">
              <p>Let Us Buy 365 is provided "as is" and "as available." We do not guarantee:</p>
              <ul className="terms-list">
                <li>That our site will be error-free or uninterrupted.</li>
                <li>The accuracy or reliability of product listings or offers.</li>
                <li>That affiliate links will always be active or lead to valid purchases.</li>
              </ul>
            </div>
          </div>

          <div className="terms-section">
            <div className="section-header">
              <h2>9. Limitation of Liability</h2>
            </div>
            <div className="section-content">
              <p>To the fullest extent permitted by law, Let Us Buy 365 and its team shall not be liable for any damages arising out of your use or inability to use the website or reliance on any information provided on our platform.</p>
            </div>
          </div>

          <div className="terms-section">
            <div className="section-header">
              <h2>10. Changes to These Terms</h2>
            </div>
            <div className="section-content">
              <p>We may update these Terms occasionally. Changes will be posted on this page with a revised "Effective Date." Your continued use of the site after changes means you accept the new Terms.</p>
            </div>
          </div>

          <div className="terms-section">
            <div className="section-header">
              <h2>11. Termination</h2>
            </div>
            <div className="section-content">
              <p>We reserve the right to terminate or suspend your access to the site for any reason, including violation of these Terms.</p>
            </div>
          </div>

          <div className="terms-section">
            <div className="section-header">
              <h2>12. Governing Law</h2>
            </div>
            <div className="section-content">
              <p>These Terms shall be governed by and interpreted in accordance with the laws of Kenya (or your applicable jurisdiction if operating elsewhere).</p>
            </div>
          </div>

          <div className="terms-section">
            <div className="section-header">
              <h2>13. Contact Us</h2>
            </div>
            <div className="section-content">
              <p>If you have any questions about these Terms or your use of Let Us Buy 365, feel free to reach out:</p>
              <p>📧 Email: support@letusbuy365.com<br />
              🌐 Website: https://www.letusbuy365.com</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Terms;