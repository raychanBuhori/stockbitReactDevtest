import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
  const {handleChange, handleClick, handleKeyPress} = props;

  return (
    <div className='search'>
      <div className='search-input'>
        <label>Title</label>
        <input onChange={handleChange} onKeyPress={handleKeyPress} placeholder='Movie title' />
      </div>
      <div className='search-button'>
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  )
}

export default Search;

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired
}