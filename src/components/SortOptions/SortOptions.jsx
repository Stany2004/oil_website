import React, { useState } from 'react';
import './SortOptions.css';

function SortOptions({ onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('recommended');

  const handleSort = (value) => {
    setSelectedOption(value);
    onSortChange(value);
    setIsOpen(false);
  };

  return (
    <div className="sort-options-container">
      <div className="sort-options">
        <button 
          className={`sort-button ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="sort-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h10M4 18h6"/>
            </svg>
          </span>
          <span className="sort-text">Sort by: </span>
          <span className="selected-option">{
            selectedOption === 'price-asc' ? 'Price: Low to High' :
            selectedOption === 'price-desc' ? 'Price: High to Low' :
            selectedOption === 'popularity' ? 'Popularity' :
            selectedOption === 'newest' ? 'Newest' : 'Recommended'
          }</span>
          <span className={`chevron-icon ${isOpen ? 'open' : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </span>
        </button>

        {isOpen && (
          <div className="sort-dropdown" role="listbox">
            <button 
              className={`sort-option ${selectedOption === 'recommended' ? 'selected' : ''}`}
              onClick={() => handleSort('recommended')}
              role="option"
              aria-selected={selectedOption === 'recommended'}
            >
              Recommended
            </button>
            <button 
              className={`sort-option ${selectedOption === 'price-asc' ? 'selected' : ''}`}
              onClick={() => handleSort('price-asc')}
              role="option"
              aria-selected={selectedOption === 'price-asc'}
            >
              Price: Low to High
            </button>
            <button 
              className={`sort-option ${selectedOption === 'price-desc' ? 'selected' : ''}`}
              onClick={() => handleSort('price-desc')}
              role="option"
              aria-selected={selectedOption === 'price-desc'}
            >
              Price: High to Low
            </button>
            <button 
              className={`sort-option ${selectedOption === 'popularity' ? 'selected' : ''}`}
              onClick={() => handleSort('popularity')}
              role="option"
              aria-selected={selectedOption === 'popularity'}
            >
              Popularity
            </button>
            <button 
              className={`sort-option ${selectedOption === 'newest' ? 'selected' : ''}`}
              onClick={() => handleSort('newest')}
              role="option"
              aria-selected={selectedOption === 'newest'}
            >
              Newest
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SortOptions;