import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

function About() {
  return (
    <div className="about-page">
      <Header />
      <main className="about-content">
        <section className="hero-section">
          <h1>Our Journey to Pure & Natural Oils</h1>
          <p className="subtitle">Bringing nature's goodness to your doorstep since 1995</p>
        </section>

        <section className="about-section">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                At <strong>Natural Glow</strong>, we believe in the power of pure, natural oils. 
                Our journey began three decades ago with a simple mission: to bring the finest quality, 
                traditionally processed oils to modern households.
              </p>
              <p>
                We take pride in our cold-pressing technique, a method passed down through generations, 
                ensuring that every drop retains its full nutritional value and authentic aroma. Our 
                commitment to quality starts from carefully selecting the finest ingredients from 
                organic farms across India.
              </p>
            </div>
            <div className="about-image">
              <img src="/src/assets/oils-banner.jpg" alt="Natural oil production process" />
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <h2>Why Choose Our Oils?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-icon">🌿</span>
              <h3>Pure & Natural</h3>
              <p>100% unrefined oils with no additives or artificial processing</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">💪</span>
              <h3>Rich in Nutrients</h3>
              <p>Natural antioxidants and essential fatty acids preserved</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">🌱</span>
              <h3>Sustainably Sourced</h3>
              <p>Supporting local farmers and traditional farming methods</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">👨‍🌾</span>
              <h3>Traditional Process</h3>
              <p>Wood-pressed and cold-pressed using age-old techniques</p>
            </div>
          </div>
        </section>

        <section className="quality-section">
          <div className="quality-content">
            <h2>Our Quality Commitment</h2>
            <ul className="quality-list">
              <li>Rigorous quality testing at every stage</li>
              <li>ISO 22000:2018 certified production facility</li>
              <li>FSSAI approved manufacturing process</li>
              <li>Regular farm visits and supplier audits</li>
            </ul>
            <Link to="/shop" className="cta-button">
              Explore Our Products
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
