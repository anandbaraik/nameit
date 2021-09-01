import React from 'react';
import './SearchBox.css';
const SearchBox = ({onInputChange}) => {
  return (
      <div className="search-container">
        <input
        className='search'
        maxLength="10"
        type='search'
        placeholder="Type keywords here"
        onChange={(event) => onInputChange(event.target.value)}
        />
    </div>
  );
}

export default SearchBox;