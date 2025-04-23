// src/pages/ProductDetail.jsx
import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { products } from '../data/products';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);
  const [selectedSize, setSelectedSize] = useState('1');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="product-not-found">
        <Header />
        <div className="not-found-content">
          <h2>Product Not Found</h2>
          <p>Sorry, we couldn't find the product you're looking for.</p>
          <Link to="/shop" className="back-to-shop">
            Return to Shop
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    const productWithDetails = {
      ...product,
      selectedSize,
      quantity,
      price: product.prices[selectedSize],
      originalPrice: product.originalPrices[selectedSize]
    };
    addToCart(productWithDetails);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const currentPrice = product.prices[selectedSize];
  const originalPrice = product.originalPrices[selectedSize];
  const discountPercentage = Math.round(
    ((originalPrice - currentPrice) / originalPrice) * 100
  );

  return (
    <div className="product-detail-page">
      <Header />
      <div className="product-detail-container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/shop">Shop</Link> / 
          <span>{product.name}</span>
        </nav>

        <div className="product-detail">
          <div className="product-image-section">
            <div className="image-container">
              <img src={product.image} alt={product.name} className="detail-image" />
              {discountPercentage > 0 && (
                <span className="discount-badge">-{discountPercentage}%</span>
              )}
              <button 
                className={`wishlist-button ${isInWishlist(product.id) ? 'in-wishlist' : ''}`}
                onClick={toggleWishlist}
              >
                <i className="fas fa-heart"></i>
              </button>
            </div>
          </div>

          <div className="product-info-section">
            <h1 className="product-title">{product.name}</h1>
            
            <div className="size-container">
              <label className="size-label">Size:</label>
              <div className="size-selector">
                {['0.5', '1', '5'].map(size => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size} L
                  </button>
                ))}
              </div>
            </div>

            <div className="price-container">
              <span className="original-price">₹{originalPrice}</span>
              <span className="discounted-price">₹{currentPrice}</span>
              {discountPercentage > 0 && (
                <span className="discount-tag">-{discountPercentage}% OFF</span>
              )}
            </div>

            <p className="product-description">{product.description}</p>

            <div className="quantity-selector">
              <button onClick={() => handleQuantityChange(-1)} disabled={quantity === 1}>−</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>

            <div className="action-buttons">
              <button 
                className={`add-to-cart ${addedToCart ? 'added' : ''}`}
                onClick={handleAddToCart}
              >
                {addedToCart ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>
              <Link to="/cart" className="buy-now">
                Buy Now
              </Link>
            </div>

            <div className="product-details">
              <h2>Product Benefits</h2>
              <ul className="benefits-list">
                {product.benefits?.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>

              <h2>Specifications</h2>
              <table className="specifications-table">
                <tbody>
                  {Object.entries(product.specifications || {}).map(([key, value]) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
