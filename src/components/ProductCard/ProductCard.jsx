import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { WishlistContext } from '../../context/WishlistContext';
import { CartContext } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState('1');
  const [itemQuantity, setItemQuantity] = useState(1);
  const { wishlistItems, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const isInWishlist = wishlistItems.some(item => item.id === product.id);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, itemQuantity + change);
    setItemQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      selectedSize: selectedQuantity,
      quantity: itemQuantity,
      price: product.prices[selectedQuantity],
      originalPrice: product.originalPrices[selectedQuantity]
    };
    addToCart(productToAdd);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    const productToAdd = {
      ...product,
      selectedSize: selectedQuantity,
      quantity: itemQuantity,
      price: product.prices[selectedQuantity],
      originalPrice: product.originalPrices[selectedQuantity]
    };
    addToCart(productToAdd);
    navigate('/cart');
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className={`wishlist-button ${isHovered ? 'hovered' : ''} ${isInWishlist ? 'active' : ''}`}>
          <button 
            className="wishlist-btn"
            onClick={handleWishlistToggle}
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <i className={`fa-${isInWishlist ? 'solid' : 'regular'} fa-heart`}></i>
            <span className="wishlist-text">
              {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </span>
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <select 
          value={selectedQuantity} 
          onChange={(e) => setSelectedQuantity(e.target.value)}
          className="quantity-select"
        >
          {['0.5', '1', '5'].map(quantity => (
            <option key={quantity} value={quantity}>{quantity}L</option>
          ))}
        </select>
        <div className="product-rating">
          <div className="stars">
            {'★'.repeat(Math.floor(product.rating || 0))}
            {'☆'.repeat(5 - Math.floor(product.rating || 0))}
          </div>
          <span className="review-count">({product.reviews || 0} reviews)</span>
        </div>
        <div className="price-container">
          <span className="current-price">₹{product.prices[selectedQuantity]}</span>
          {product.originalPrices && (
            <span className="original-price">₹{product.originalPrices[selectedQuantity]}</span>
          )}
        </div>
        <div className="quantity-selector">
          <button onClick={() => handleQuantityChange(-1)} disabled={itemQuantity <= 1}>−</button>
          <span>{itemQuantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <div className="product-actions">
          <button 
            className={`add-to-cart ${addedToCart ? 'added' : ''}`}
            onClick={handleAddToCart}
            disabled={addedToCart}
          >
            <i className="fas fa-shopping-cart"></i>
            {addedToCart ? 'Added ✓' : 'Add to Cart'}
          </button>
          <button className="buy-now" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;