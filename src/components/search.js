import React from 'react';

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