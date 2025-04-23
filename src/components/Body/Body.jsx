import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css';

const products = [
  {
    id: 1,
    name: 'Coconut Oil',
    price: 150,
    discountedPrice: 135,
    image: 'src/assets/coconut-oil.jpg',
    description: 'Pure and natural coconut oil, cold-pressed for maximum benefits',
    category: 'traditional'
  },
  {
    id: 2,
    name: 'Groundnut Oil',
    price: 270,
    discountedPrice: 243,
    image: 'src/assets/groundnut-oil.jpg',
    description: 'Premium quality groundnut oil for authentic taste',
    category: 'traditional'
  },
  {
    id: 3,
    name: 'Sesame Oil',
    price: 400,
    discountedPrice: 360,
    image: 'src/assets/sesame-oil.jpg',
    description: 'Traditional wood-pressed sesame oil for authentic flavor',
    category: 'premium'
  },
  {
    id: 4,
    name: 'Cold Pressed Coconut Oil',
    price: 300,
    discountedPrice: 270,
    image: 'src/assets/coldpressedcoconut-oil.jpg',
    description: 'Premium cold-pressed coconut oil for superior quality',
    category: 'premium'
  }
];

function Body() {
  return (
    <main className="main-content">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Pure, Natural, and Healthy Oils</h1>
          <p className="hero-description">
            Experience the essence of nature with every drop. Our oils are carefully sourced
            and processed to maintain their natural goodness.
          </p>
          <Link to="/shop" className="cta-button">
            Explore Our Collection
          </Link>
        </div>
        <div className="hero-image">
          <img 
            src="src/assets/oils-banner.jpg" 
            alt="Collection of Natural Oils" 
            loading="eager"
          />
        </div>
      </section>

      <section className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">
                  <span className="original-price">₹{product.price}</span>
                  <span className="discounted-price">₹{product.discountedPrice}</span>
                </div>
                <Link to={`/product/${product.id}`} className="view-details-button">
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="special-offers">
        <h2 className="section-title">Special Offers</h2>
        <div className="offers-grid">
          <article className="offer-card new-customer">
            <span className="offer-icon">🌿</span>
            <h3>New Customer Special</h3>
            <p>Get 20% OFF on your first purchase</p>
            <div className="promo-code">
              <span>Use Code:</span>
              <code>NATURAL20</code>
            </div>
          </article>

          <article className="offer-card bundle-deal">
            <span className="offer-icon">🛒</span>
            <h3>Bundle Deal</h3>
            <p>Buy 2 Get 1 Free on all products</p>
            <small>Limited Time Offer</small>
          </article>

          <article className="offer-card free-shipping">
            <span className="offer-icon">🎁</span>
            <h3>Free Shipping</h3>
            <p>On orders above ₹2000</p>
            <small>India-wide Delivery</small>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Body;
