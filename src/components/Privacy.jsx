import React from 'react';
import './Privacy.css';
import Scroll from './Scroll';
import Footer from './Footer';
const Privacy = () => {
  return (
    <div className="privacy-page">
        <Scroll />
      <div className="privacy-content-wrapper">
        <div className="container">
          <div className="privacy-header">
            <h1>Privacy <span className="brand">Policy</span></h1>
            <p className="tagline">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
        
          <div className="privacy-section">
            <div className="section-content">
              <p>Welcome to Let Us Buy 365. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://www.letusbuy365.com.</p>
              <p>Please read this policy carefully. By using our website, you agree to the terms outlined below.</p>
            </div>
          </div>

          <div className="privacy-section">
            <div className="section-header">
              <h2>1. Information We Collect</h2>
            </div>
            <div className="section-content">
              <p>We collect two types of information:</p>
              <p><strong>a) Personal Information (only if you voluntarily provide it):</strong></p>
              <ul className="privacy-list">
                <li>Your name</li>
                <li>Email address</li>
                <li>Contact form submissions</li>
                <li>Comments or reviews</li>
              </ul>
              <p><strong>b) Non-Personal Information (collected automatically):</strong></p>
              <ul className="privacy-list">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Referral source</li>
                <li>Device type and operating system</li>
                <li>General location (e.g., city or country)</li>
              </ul>
              <p>We use cookies and similar technologies to collect non-personal data for analytics and website optimization.</p>
            </div>
          </div>

          <div className="privacy-section">
            <div className="section-header">
              <h2>2. How We Use Your Information</h2>
            </div>
            <div className="section-content">
              <p>We may use your information to:</p>
              <ul className="privacy-list">
                <li>Improve and personalize your user experience</li>
                <li>Analyze website performance and traffic</li>
                <li>Respond to your inquiries or feedback</li>
                <li>Send newsletters or updates (if you've subscribed)</li>
                <li>Recommend affiliate products</li>
                <li>Monitor and prevent security issues</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </div>
          </div>

          <div className="privacy-section">
            <div className="section-header">
              <h2>3. Use of Cookies</h2>
            </div>
            <div className="section-content">
              <p>Let Us Buy 365 uses cookies to:</p>
              <ul className="privacy-list">
                <li>Remember user preferences</li>
                <li>Analyze user behavior and traffic</li>
                <li>Track affiliate links and purchases</li>
              </ul>
              <p>You can disable cookies through your browser settings. However, this may affect the website's functionality.</p>
            </div>
          </div>

          <div className="privacy-section">
            <div className="section-header">
              <h2>4. Affiliate Disclosure</h2>
            </div>
            <div className="section-content">
              <p>Our site contains affiliate links. When you click on an affiliate link and make a purchase on a third-party site, we may receive a commission. These affiliate partners may use cookies to track purchases and user behavior on their platforms. Please refer to their privacy policies for more details.</p>
            </div>
          </div>

          <div className="privacy-section">
            <div className="section-header">
              <h2>5. Third-Party Services</h2>
            </div>
            <div className="section-content">
              <p>We may use third-party services like:</p>
              <ul className="privacy-list">
                <li>Google Analytics – for traffic analysis</li>
                <li>Email marketing platforms – for newsletters</li>
                <li>Affiliate networks – to manage product links and track sales</li>
              </ul>
              <p>These services may have access to limited user data necessary for their functions, and they operate under their own privacy policies.</p>
            </div>
          </div>

          <div className="privacy-section">
            <div className="section-header">
              <h2>6. How We Protect Your Information</h2>
            </div>
            <div className="section-content">
              <p>We take reasonable precautions to secure your data, including:</p>
              <ul className="privacy-list">
                <li>HTTPS encryption</li>
                <li>Firewall and malware protection</li>
                <li>Secure email communication</li>
                <li>Limited access to personal data</li>
              </ul>
              <p>However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
            </div>
          </div>

          <div className="privacy-section">
            <div className="section-header">
              <h2>7. Your Rights and Choices</h2>
            </div>
            <div className="section-content">
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="privacy-list">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent for email marketing</li>
                <li>Disable cookies through your browser</li>
              </ul>
              <p>To make any such requests, contact us at support@letusbuy365.com.</p>
            </div>
          </div>

          <div className="privacy-section">
            <div className="section-header">
              <h2>8. Children's Privacy</h2>
            </div>
            <div className="section-content">
              <p>Let Us Buy 365 is not intended for users under the age of 13. We do not knowingly collect personal data from children. If we become aware that we have collected data from a child under 13, we will take immediate steps to delete it.</p>
            </div>
          </div>

          <div className="privacy-section">
            <div className="section-header">
              <h2>9. Changes to This Privacy Policy</h2>
            </div>
            <div className="section-content">
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated "Effective Date." Continued use of the website implies your acceptance of the new terms.</p>
            </div>
          </div>

          <div className="privacy-section">
            <div className="section-header">
              <h2>10. Contact Us</h2>
            </div>
            <div className="section-content">
              <p>If you have any questions or concerns about this Privacy Policy, or if you'd like to access or delete your information, please reach out to us:</p>
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

export default Privacy;