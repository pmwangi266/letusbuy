import React from 'react';
import './Disclaimer.css';
import Scroll from './Scroll';
import Footer from './Footer';
const Disclaimer = () => {
  return (
    <div className="disclaimer-page">
      <Scroll />
      <div className="disclaimer-content-wrapper">
        <div className="container">
          <div className="disclaimer-header">
            <h1>Disclaimer for <span className="brand">Let Us Buy 365</span></h1>
            <p className="tagline">Your trusted guide for online shopping</p>
          </div>

          <div className="disclaimer-section">
            <div className="section-header">
              <h2>Important Information</h2>
            </div>
            <div className="section-content">
              <p>Welcome to Let Us Buy 365. We appreciate your trust in our content and recommendations. Please read this disclaimer carefully before using our website.</p>
              <p>By visiting or using letusbuy365.com, you agree to the terms of this disclaimer.</p>
            </div>
          </div>

          <div className="disclaimer-section">
            <div className="section-header">
              <h2>1. Affiliate Disclosure</h2>
            </div>
            <div className="section-content">
              <p>Let Us Buy 365 is an affiliate marketing platform. This means that:</p>
              <ul className="disclaimer-list">
                <li>Some of the links on our website are affiliate links.</li>
                <li>If you click on these links and make a purchase, we may earn a small commission—at no extra cost to you.</li>
                <li>This helps us keep our content free, fresh, and helpful.</li>
              </ul>
              <p>We only recommend products and services we believe offer genuine value. However, any purchase you make is solely between you and the third-party retailer.</p>
            </div>
          </div>

          <div className="disclaimer-section">
            <div className="section-header">
              <h2>2. No Product Ownership</h2>
            </div>
            <div className="section-content">
              <p>Let Us Buy 365 does not sell products directly. We:</p>
              <ul className="disclaimer-list">
                <li>Provide reviews, comparisons, and curated buying guides.</li>
                <li>Refer users to third-party merchants (e.g., Amazon, Jumia, Best Buy, etc.).</li>
              </ul>
              <p>We are not responsible for:</p>
              <ul className="disclaimer-list">
                <li>Product quality, delivery timelines, accuracy of descriptions, or pricing.</li>
                <li>Returns, exchanges, warranties, or any disputes arising from your purchase.</li>
              </ul>
              <p>Please consult the terms, conditions, and policies of the respective retailer before purchasing.</p>
            </div>
          </div>

          <div className="disclaimer-section">
            <div className="section-header">
              <h2>3. Accuracy of Information</h2>
            </div>
            <div className="section-content">
              <p>We do our best to:</p>
              <ul className="disclaimer-list">
                <li>Keep information current and accurate.</li>
                <li>Regularly update product prices, availability, and specifications.</li>
              </ul>
              <p>However:</p>
              <ul className="disclaimer-list">
                <li>Information may change without notice.</li>
                <li>We do not guarantee that all content is free of errors or omissions.</li>
              </ul>
              <p>Please verify details with the official seller before making any decisions.</p>
            </div>
          </div>

          <div className="disclaimer-section">
            <div className="section-header">
              <h2>4. No Professional Advice</h2>
            </div>
            <div className="section-content">
              <p>All content on this website is for informational purposes only. It is not intended to substitute:</p>
              <ul className="disclaimer-list">
                <li>Professional, financial, medical, legal, or technical advice.</li>
              </ul>
              <p>Before making purchasing decisions, especially in specialized categories (like health, tech, or software), we recommend consulting a qualified expert or reading the full product documentation from the manufacturer.</p>
            </div>
          </div>

          <div className="disclaimer-section">
            <div className="section-header">
              <h2>5. External Links</h2>
            </div>
            <div className="section-content">
              <p>Our website may link to other websites not owned or controlled by us. We:</p>
              <ul className="disclaimer-list">
                <li>Are not responsible for the content, privacy practices, or terms of those external sites.</li>
                <li>Encourage you to read the privacy policy and terms of service of every site you visit.</li>
              </ul>
            </div>
          </div>

          <div className="disclaimer-section">
            <div className="section-header">
              <h2>6. User Responsibility</h2>
            </div>
            <div className="section-content">
              <p>By using Let Us Buy 365, you acknowledge and agree that:</p>
              <ul className="disclaimer-list">
                <li>You are solely responsible for your decisions based on the information provided.</li>
                <li>You use this website at your own risk.</li>
              </ul>
              <p>We shall not be held liable for any damages or losses resulting from your use of this website, including the purchase of any product through third-party links.</p>
            </div>
          </div>

          <div className="disclaimer-section">
            <div className="section-header">
              <h2>7. Changes to This Disclaimer</h2>
            </div>
            <div className="section-content">
              <p>Let Us Buy 365 reserves the right to update or change this disclaimer at any time. Updates will be reflected by the "Effective Date" at the top of this page. We encourage you to review this page regularly.</p>
            </div>
          </div>

          <div className="disclaimer-section">
            <div className="section-header">
              <h2>8. Contact Us</h2>
            </div>
            <div className="section-content">
              <p>If you have questions about this disclaimer or need more information, feel free to contact us:</p>
              <p>📧 Email: support@letusbuy365.com<br />
              🌐 Website: www.letusbuy365.com</p>
              <blockquote>
                Thank you for trusting Let Us Buy 365 — your partner in smart, secure, and satisfying online shopping.
              </blockquote>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;