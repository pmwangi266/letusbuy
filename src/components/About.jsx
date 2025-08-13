import React from 'react';
import Scroll from './Scroll';
import './about.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
const AboutUs = () => {
  const navigate = useNavigate();

  const handleBrowseClick = () => {
    navigate('/products');
  };

  return (
    <div className="about-us">
      
      <Scroll />
      <header className="about-header">
        <div className="container">
          <h1>About Us – <span className="brand">Let Us Buy 365</span></h1>
          <p className="tagline">Your trusted partner in smart shopping — 365 days a year</p>
        </div>
      </header>

      <div className="about-content-wrapper">
        <section className="about-section who-we-are">
          <div className="container">
            <div className="section-header">
              <h2>✦ Who We Are</h2>
            </div>
            <div className="section-content">
              <p>We are a product comparison and recommendation platform that helps you make informed buying decisions by offering expert guides, honest comparisons, and affiliate links to trusted brands. Our mission is simple: to help you buy better, every day.</p>
              <p>Whether you're looking for the best tech gadgets, home appliances, health products, or everyday essentials, we do the research so you don't have to. We dive deep into features, prices, reviews, and performance to bring you only what truly matters.</p>
            </div>
          </div>
        </section>

        <section className="about-section mission">
          <div className="container">
            <div className="section-header">
              <h2>✦ Our Mission</h2>
            </div>
            <div className="section-content">
              <blockquote>
                "Empowering consumers with honest, easy-to-understand, and reliable buying guidance — all year round."
              </blockquote>
            </div>
          </div>
        </section>

        <section className="about-section difference">
          <div className="container">
            <div className="section-header">
              <h2>✦ What Makes Us Different</h2>
            </div>
            <div className="section-content">
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">✅</div>
                  <h3>Unbiased Comparisons</h3>
                  <p>We compare products based on performance, quality, and value.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🛒</div>
                  <h3>Affiliate Smart</h3>
                  <p>Yes, we use affiliate links — but only for products we genuinely recommend.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📊</div>
                  <h3>Data-Driven Reviews</h3>
                  <p>We base our comparisons on real specs, user reviews, and market research.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">💬</div>
                  <h3>Reader-Focused</h3>
                  <p>We write for real people. No fluff, no pressure — just clarity and choice.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section how-it-works">
          <div className="container">
            <div className="section-header">
              <h2>✦ How It Works</h2>
            </div>
            <div className="section-content">
              <div className="steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>You Search</h3>
                    <p>Find guides or comparison articles on what you want to buy.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>We Guide</h3>
                    <p>Read through our simplified breakdowns and honest insights.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>You Choose</h3>
                    <p>Click to buy via our affiliate partners (at no extra cost to you!).</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3>We Earn a Small Commission</h3>
                    <p>Which helps us keep helping you — 365 days a year.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;