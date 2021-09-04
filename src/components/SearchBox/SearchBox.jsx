import React from 'react';
import './SearchBox.css';
const SearchBox = ({onInputChange}) => {
  return (
      <div className="search-container">
        <input
        className='search'
        type='search'
        placeholder="Type keywords here"
        onChange={(event) => onInputChange(event.target.value)}
        maxLength="10"
        />
    </div>
  );
}

export default SearchBox;