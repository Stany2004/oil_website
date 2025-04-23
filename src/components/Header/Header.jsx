// src/components/Header.js
import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishlistContext';
import './Header.css';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);

  const isActive = (path) => location.pathname === path;
  const cartItemCount = cartItems?.length || 0;
  const wishlistItemCount = wishlistItems?.length || 0;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-container">
          <h1 className="logo">Shalom Oil Mill</h1>
          <span className="logo-tagline">Pure & Natural Oils</span>
        </Link>

        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="menu-icon"></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            Home
          </Link>
          <Link to="/shop" className={isActive('/shop') ? 'active' : ''}>
            Shop
          </Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>
            About
          </Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
            Contact
          </Link>
          <Link to="/wishlist" className={`wishlist-link ${isActive('/wishlist') ? 'active' : ''}`}>
            <svg viewBox="0 0 24 24" className="wishlist-icon" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {wishlistItemCount > 0 && (
              <span className="wishlist-count">{wishlistItemCount}</span>
            )}
          </Link>
          <Link to="/cart" className={`cart-link ${isActive('/cart') ? 'active' : ''}`}>
            <svg viewBox="0 0 24 24" className="cart-icon" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
