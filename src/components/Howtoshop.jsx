import React from 'react';
import './Howtoshop.css';
import Scroll from './Scroll';
import Footer from './Footer';
const HowToShop = () => {
  return (
    <div className="how-to-shop-page">
       <Scroll/>
      <div className="how-to-shop-content-wrapper">
        <div className="container">
          <div className="how-to-shop-header">
            <h1>How to Shop on <span className="brand">Let Us Buy 365</span></h1>
            <p className="tagline">Discover. Click. Shop. It's that simple!</p>
          </div>
         
          <div className="how-to-shop-intro">
            <p>Welcome to Let Us Buy 365, your trusted guide to finding the best products online. We make it easy for you to shop quality products from top retailers like Amazon, Jumia, AliExpress, and more—365 days a year.</p>
          </div>

          <div className="how-to-shop-section">
            <h2>Here's how you can shop through our platform in just a few steps:</h2>
            
            <div className="step">
              <div className="step-header">
                <span className="step-icon">✅</span>
                <h3>Step 1: Browse Our Categories</h3>
              </div>
              <div className="step-content">
                <p>We've organized our website to make your shopping experience fast and exciting.</p>
                <p>Explore high-demand categories like:</p>
                <ul className="category-list">
                  <li><span className="category-icon">🖥️</span> Electronics & Smart Devices (Smart TVs, Phones, Laptops, Smartwatches)</li>
                  <li><span className="category-icon">🛋️</span> Home & Office Furniture (Sofas, Desks, Cabinets, Chairs)</li>
                  <li><span className="category-icon">👗</span> Clothing & Accessories (Men, Women, Kids, Shoes)</li>
                  <li><span className="category-icon">🧴</span> Beauty & Personal Care (Skincare, Haircare, Grooming)</li>
                  <li><span className="category-icon">🍳</span> Home & Kitchen Appliances (Cookers, Blenders, Fridges)</li>
                  <li><span className="category-icon">💾</span> Software & Digital Tools</li>
                  <li>…and so much more!</li>
                </ul>
                <p>Click on any product image or link to learn more.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-header">
                <span className="step-icon">✅</span>
                <h3>Step 2: Read Product Details</h3>
              </div>
              <div className="step-content">
                <p>Each product page gives you:</p>
                <ul className="feature-list">
                  <li>A high-quality image</li>
                  <li>A brief product description</li>
                  <li>A highlight of key features</li>
                  <li>A direct link to "Buy from [Retailer]"</li>
                </ul>
                <p>This helps you make an informed decision before you leave our site.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-header">
                <span className="step-icon">✅</span>
                <h3>Step 3: Click the Product Link</h3>
              </div>
              <div className="step-content">
                <p>When you're ready, click the button that says something like:</p>
                <p className="link-example">🔗 Buy on Amazon or 🔗 Shop on Jumia</p>
                <p>This will redirect you to the official product page on the seller's website, where you can complete your purchase securely.</p>
                <div className="note">
                  <p>🛡️ <strong>Note:</strong> Let Us Buy 365 never collects your payment details. All payments are processed by the official online store.</p>
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-header">
                <span className="step-icon">✅</span>
                <h3>Step 4: Complete Your Purchase</h3>
              </div>
              <div className="step-content">
                <p>Once you're on the retailer's site:</p>
                <ol className="purchase-steps">
                  <li>Review the product again to confirm features, price, and shipping.</li>
                  <li>Click Add to Cart or Buy Now.</li>
                  <li>Enter your shipping address and payment details securely.</li>
                  <li>Finalize your purchase with confidence.</li>
                </ol>
              </div>
            </div>

            <div className="step">
              <div className="step-header">
                <span className="step-icon">✅</span>
                <h3>Step 5: Track Your Order & Enjoy!</h3>
              </div>
              <div className="step-content">
                <p>After completing your order, the retailer will:</p>
                <ul className="delivery-list">
                  <li>Send a confirmation email with your order details.</li>
                  <li>Provide tracking information where applicable.</li>
                  <li>Deliver the product to your door.</li>
                </ul>
                <p>If you have any issues, reach out to the retailer's customer service directly using the support contacts provided.</p>
              </div>
            </div>

            <div className="tips-section">
              <h3>💡 Tips for a Better Shopping Experience</h3>
              <ul className="tips-list">
                <li>✔️ <strong>Compare Products</strong> – Browse multiple options before you buy.</li>
                <li>✔️ <strong>Check Ratings & Reviews</strong> – See what other buyers are saying.</li>
                <li>✔️ <strong>Look for Deals</strong> – We highlight discounts and trending items often.</li>
                <li>✔️ <strong>Use the Search Bar</strong> – Quickly find what you're looking for.</li>
                <li>✔️ <strong>Subscribe to Our Newsletter</strong> – Stay informed about flash deals and new product drops.</li>
              </ul>
            </div>

            <div className="contact-section">
              <h3>🧾 Need Help or Have Questions?</h3>
              <p>We're here to assist!</p>
              <p>📧 Contact us at support@letusbuy365.com if you need help choosing a product or using the site.</p>
              <blockquote>
                Let Us Buy 365 — Helping You Shop Smarter Every Day.
              </blockquote>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default HowToShop;