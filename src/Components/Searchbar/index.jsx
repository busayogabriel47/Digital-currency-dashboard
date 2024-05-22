import React, { useState } from 'react';
import "./style.css";

const Searchbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`search-bar ${isExpanded ? 'search-bar--expanded' : ''}`}>
      
      <i className="search-bar__icon
       fa-solid 
      fa-magnifying-glass"
      onClick={handleSearchClick}></i>
      {isExpanded && (
        <input
          type="text"
          className="search-bar__input"
          placeholder="Search..."
        />
      )}
    </div>
  );
};

export default Searchbar;