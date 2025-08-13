import React from 'react';
import './FAQ.css';
import Scroll from './Scroll';
import Footer from './Footer';
const FAQ = () => {
  return (
    <div className="faq-page">
      <Scroll />
      <div className="faq-content-wrapper">
        <div className="container">
          <div className="faq-header">
            <h1>Frequently Asked <span className="brand">Questions</span></h1>
            <p className="tagline">Welcome to the Let Us Buy 365 Help Center!</p>
          </div>

          <div className="faq-intro">
            <p>Here you'll find answers to some of the most common questions we receive from our visitors. If you can't find what you're looking for, feel free to contact us at support@letusbuy365.com.</p>
          </div>

          <div className="faq-section">
            <div className="faq-item">
              <div className="faq-question">
                <span className="faq-icon">🛍️</span>
                <h3>1. What is Let Us Buy 365?</h3>
              </div>
              <div className="faq-answer">
                <p>Let Us Buy 365 is an online affiliate marketing platform where we help you discover the best products from trusted online stores like Amazon, Jumia, and more.</p>
                <p>We recommend top-quality electronics, smart devices, fashion, home & office furniture, beauty items, and other must-have products.</p>
                <p>When you click our links and make a purchase, we may earn a small commission—at no extra cost to you.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span className="faq-icon">📦</span>
                <h3>2. Do you sell products directly?</h3>
              </div>
              <div className="faq-answer">
                <p>No, we do not sell or ship products directly. Let Us Buy 365 promotes affiliate products sold by third-party retailers.</p>
                <p>When you click on a product link, you'll be redirected to the official seller's website (like Amazon or Jumia) to complete your purchase securely.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span className="faq-icon">💰</span>
                <h3>3. Do I pay extra when I shop through your links?</h3>
              </div>
              <div className="faq-answer">
                <p>Absolutely not. You pay the same price (or less if there's a discount) as you would by going directly to the merchant.</p>
                <p>In fact, our goal is to save you time and money by showing you the best deals, products, and trends.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span className="faq-icon">🖥️</span>
                <h3>4. What types of products do you feature?</h3>
              </div>
              <div className="faq-answer">
                <p>We cover a wide variety of high-quality categories, including:</p>
                <ul className="faq-list">
                  <li>Electronics (smart TVs, laptops, headphones, cameras)</li>
                  <li>Smart Devices (wearables, smartwatches, smart home systems)</li>
                  <li>Home & Kitchen Appliances</li>
                  <li>Clothing & Shoes (men, women, kids)</li>
                  <li>Beauty & Personal Care</li>
                  <li>Office & Home Furniture</li>
                  <li>Software & Digital Tools</li>
                  <li>And much more…</li>
                </ul>
                <p>We're always expanding to match what people want to buy online—365 days a year.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span className="faq-icon">🔐</span>
                <h3>5. Is it safe to shop through Let Us Buy 365?</h3>
              </div>
              <div className="faq-answer">
                <p>Yes! We only link to trusted and secure online retailers. All purchases and payments are processed through the official websites of our affiliate partners.</p>
                <p>We do not collect or store your payment information.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span className="faq-icon">📧</span>
                <h3>6. How can I contact your team?</h3>
              </div>
              <div className="faq-answer">
                <p>You can reach us anytime at:</p>
                <p>📨 support@letusbuy365.com</p>
                <p>We aim to respond to all messages within 24–48 business hours.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span className="faq-icon">🌍</span>
                <h3>7. Do you ship internationally?</h3>
              </div>
              <div className="faq-answer">
                <p>Since we don't sell products directly, shipping policies depend on the retailer you purchase from. Most major platforms like Amazon or Jumia offer options for international or regional delivery.</p>
                <p>Please check the seller's shipping and delivery terms before placing your order.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span className="faq-icon">🔄</span>
                <h3>8. Can I return a product I bought through your site?</h3>
              </div>
              <div className="faq-answer">
                <p>Returns and refunds are handled by the seller or store where you completed your purchase.</p>
                <p>Each affiliate platform (like Amazon or Jumia) has its own return policies. Be sure to review them before buying.</p>
                <p>Let Us Buy 365 is not involved in processing returns or refunds.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span className="faq-icon">🧾</span>
                <h3>9. Do you review all the products personally?</h3>
              </div>
              <div className="faq-answer">
                <p>While we aim to recommend only the best, not all products are physically reviewed by our team.</p>
                <p>We rely on:</p>
                <ul className="faq-list">
                  <li>Verified buyer reviews</li>
                  <li>Product ratings</li>
                  <li>Performance benchmarks</li>
                  <li>Market research</li>
                </ul>
                <p>This helps us give you reliable, well-researched product suggestions.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span className="faq-icon">💼</span>
                <h3>10. How can I become a partner or featured seller?</h3>
              </div>
              <div className="faq-answer">
                <p>We're always open to collaborations! If you're a brand or seller who wants to showcase your product on Let Us Buy 365, contact us at support@letusbuy365.com with:</p>
                <ul className="faq-list">
                  <li>Your company name</li>
                  <li>Product details</li>
                  <li>Partnership proposal</li>
                </ul>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span className="faq-icon">🔎</span>
                <h3>11. How often is your product list updated?</h3>
              </div>
              <div className="faq-answer">
                <p>We work continuously to keep our listings fresh and relevant.</p>
                <p>New products, seasonal items, and bestsellers are updated weekly or even daily depending on availability and affiliate data.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span className="faq-icon">💡</span>
                <h3>12. Can I request a product or recommend one?</h3>
              </div>
              <div className="faq-answer">
                <p>Yes, we welcome suggestions from our community! If you want us to feature a particular product category or item, just email us at support@letusbuy365.com with the details.</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FAQ;