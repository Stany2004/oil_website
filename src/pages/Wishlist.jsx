import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../context/WishlistContext';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Wishlist.css';

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const [addedItems, setAddedItems] = useState(new Set());

  const handleAddToCart = (product) => {
    const productToAdd = {
      ...product,
      selectedSize: '1',
      quantity: 1,
      price: product.prices['1'],
      originalPrice: product.originalPrices['1']
    };
    addToCart(productToAdd);
    setAddedItems(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
      removeFromWishlist(product.id);
    }, 1000);
  };

  if (!wishlistItems.length) {
    return (
      <div className="wishlist-page">
        <Header />
        <div className="empty-wishlist">
          <div className="empty-wishlist-content">
            <svg className="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <h2>Your Wishlist is Empty</h2>
            <p>Add items you love to your wishlist. Review them anytime and easily move them to the cart.</p>
            <Link to="/shop" className="continue-shopping">Continue Shopping</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <Header />
      <div className="wishlist-container">
        <h1>My Wishlist</h1>
        <div className="wishlist-items">
          {wishlistItems.map((item) => {
            const discount = Math.round(
              ((item.originalPrices['1'] - item.prices['1']) / item.originalPrices['1']) * 100
            );
            
            return (
              <div key={item.id} className="wishlist-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  <div className="price-info">
                    <span className="current-price">₹{item.prices['1']}</span>
                    <span className="original-price">₹{item.originalPrices['1']}</span>
                    {discount > 0 && (
                      <span className="discount">
                        {discount}% OFF
                      </span>
                    )}
                  </div>
                  <div className="item-actions">
                    <button 
                      className={`add-to-cart-btn ${addedItems.has(item.id) ? 'added' : ''}`}
                      onClick={() => handleAddToCart(item)}
                      disabled={addedItems.has(item.id)}
                    >
                      {addedItems.has(item.id) ? (
                        <>
                          Added to Cart <span className="checkmark">✓</span>
                        </>
                      ) : (
                        'Add to Cart'
                      )}
                    </button>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromWishlist(item.id)}
                      disabled={addedItems.has(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Wishlist;