// src/pages/Cart.jsx
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Cart.css';

function Cart() {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price) || 0;
      const itemQuantity = parseInt(item.quantity) || 0;
      return total + (itemPrice * itemQuantity);
    }, 0);
  };

  const calculateItemTotal = (price, quantity) => {
    const itemPrice = parseFloat(price) || 0;
    const itemQuantity = parseInt(quantity) || 0;
    return itemPrice * itemQuantity;
  };

  const calculateDiscount = () => {
    if (couponApplied && couponCode === 'SHALOM20') {
      return calculateSubtotal() * 0.2;
    }
    return 0;
  };

  const calculateShipping = (subtotal) => {
    return subtotal >= 1000 ? 0 : 50;
  };

  const handleQuantityChange = (itemId, newQuantity, size) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity, size);
    }
  };

  const handleApplyCoupon = () => {
    if (couponCode === 'SHALOM20') {
      setCouponApplied(true);
    } else {
      alert('Invalid coupon code');
    }
  };

  const handlePlaceOrder = () => {
    clearCart();
    navigate('/order-success');
  };

  if (!cartItems.length) {
    return (
      <div className="cart-page">
        <Header />
        <div className="empty-cart">
          <div className="empty-cart-content">
            <svg className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <h2>Your Cart is Empty</h2>
            <p>Add some products to your cart and start shopping!</p>
            <Link to="/shop" className="continue-shopping">Continue Shopping</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const subtotal = calculateSubtotal();
  const discount = calculateDiscount();
  const shipping = calculateShipping(subtotal);
  const total = subtotal - discount + shipping;

  return (
    <div className="cart-page">
      <Header />
      <div className="cart-container">
        <div className="cart-content">
          <div className="cart-items-section">
            <h2>Shopping Cart</h2>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-info">
                    <div className="item-header">
                      <h3 className="item-name">{item.name}</h3>
                      <div className="item-price-info">
                        <span className="current-price">₹{item.price}</span>
                        {item.originalPrice > item.price && (
                          <span className="original-price">₹{item.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <p className="item-size">Size: {item.selectedSize}L</p>
                    <div className="item-controls">
                      <div className="quantity-controls">
                        <button 
                          onClick={() => handleQuantityChange(item.id, parseInt(item.quantity) - 1, item.selectedSize)} 
                          disabled={parseInt(item.quantity) <= 1}
                        >−</button>
                        <span>{parseInt(item.quantity) || 1}</span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, parseInt(item.quantity) + 1, item.selectedSize)}
                        >+</button>
                      </div>
                      <button 
                        className="remove-button" 
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="item-total">
                      Item Total: ₹{calculateItemTotal(item.price, item.quantity)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            
            <div className="coupon-section">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button onClick={handleApplyCoupon}>Apply Coupon</button>
            </div>

            <div className="price-breakdown">
              <div className="price-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="price-row discount">
                  <span>Discount (20% OFF)</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>
              )}
              <div className="price-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
              </div>
              <div className="price-row total">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              className="place-order-button" 
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>

            <div className="cart-footer">
              <p>✓ Secure Payment</p>
              <p>✓ Quality Assured</p>
              <p>✓ Fast Delivery</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
