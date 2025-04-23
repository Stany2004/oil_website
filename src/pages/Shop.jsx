import React, { useState } from 'react';
import { products } from '../data/products';
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import ProductCard from "../components/ProductCard/ProductCard";
import SortOptions from "../components/SortOptions/SortOptions";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Shop.css';

function Shop() {
  const [category, setCategory] = useState('All');
  const [sortOption, setSortOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on category and search term
  const filteredProducts = products.filter(product => {
    const matchesCategory = category === 'All' || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-asc') {
      return a.prices['1'] - b.prices['1'];
    } else if (sortOption === 'price-desc') {
      return b.prices['1'] - a.prices['1'];
    }
    return 0;
  });

  return (
    <div className="shop-page">
      <Header />
      <div className="shop-header">
        <h2>Shop Our Oils</h2>
        <div className="shop-controls">
          <SearchBar onSearch={setSearchTerm} />
          <CategoryFilter onSelectCategory={setCategory} />
          <SortOptions onSortChange={setSortOption} />
        </div>
      </div>
      
      <div className="product-list">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="special-offers">
        <div className="offer-box">
          <h3>Special Offers</h3>
          <p><strong>🌿 20% OFF</strong> on your first purchase! Use code: <span className="offer-code">SHALOM20</span></p>
          <p><strong>🛒 Buy 2 Get 1 Free</strong> – Limited Time Only!</p>
          <p><strong>🎁 Free Shipping</strong> on orders above ₹1000</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;