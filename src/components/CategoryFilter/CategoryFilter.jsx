// src/components/CategoryFilter.js
import React, { useState } from 'react';
import './CategoryFilter.css';

function CategoryFilter({ onSelectCategory }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="category-filter">
      <button 
        className={`category-btn ${activeCategory === 'All' ? 'active' : ''}`}
        onClick={() => handleCategoryClick('All')}
      >
        All
      </button>
      <button 
        className={`category-btn ${activeCategory === 'Coconut' ? 'active' : ''}`}
        onClick={() => handleCategoryClick('Coconut')}
      >
        Coconut
      </button>
      <button 
        className={`category-btn ${activeCategory === 'Groundnut' ? 'active' : ''}`}
        onClick={() => handleCategoryClick('Groundnut')}
      >
        Groundnut
      </button>
      <button 
        className={`category-btn ${activeCategory === 'Sesame' ? 'active' : ''}`}
        onClick={() => handleCategoryClick('Sesame')}
      >
        Sesame
      </button>
    </div>
  );
}

export default CategoryFilter;
