import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './OrderSuccess.css';

function OrderSuccess() {
  return (
    <div className="order-success-page">
      <Header />
      <div className="success-container">
        <div className="success-content">
          <div className="success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <path d="M22 4L12 14.01l-3-3"/>
            </svg>
          </div>
          <h1>Order Placed Successfully!</h1>
          <p>Thank you for your purchase. We'll start processing your order right away.</p>
          
          <div className="next-steps">
            <h2>What's Next?</h2>
            <ul>
              <li>You'll receive an email confirmation shortly</li>
              <li>We'll notify you when your order ships</li>
              <li>Estimated delivery: 3-5 business days</li>
            </ul>
          </div>

          <div className="support-info">
            <p>Need help? Contact our support team:</p>
            <p>📧 support@shalomoils.com</p>
            <p>📞 +91 1234567890</p>
          </div>

          <div className="action-buttons">
            <Link to="/shop" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderSuccess;