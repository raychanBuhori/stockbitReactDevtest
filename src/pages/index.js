import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getMovieList} from '../store/modules/movie/action';
import { setCurrentMovie } from '../store/modules/currentValue/action';
import Search from '../components/search';
import List from '../components/list';

const MainPage = () => {
  const dispatch = useDispatch();
  const movie = useSelector(state => state.movie);
  const {list = [], pagination = {}} = movie;
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMovieList({title: search}));
  }, [true]);

  useEffect(() => {
    if(pagination.currentPage) {
      setPage(currValue => currValue = pagination.currentPage)
    }
  }, [pagination])

  const handleSearchChange = event => {
    const {value} = event.target;
    setSearch(currValue => currValue = value);
    // setTimeout(() => {
    //   dispatch(getMovieList({title: search}))
    // }, 1000)
  }

  const handleSearchEnter = event => {
    const {key} = event;
    if (key === 'Enter') {
      setPage(currValue => currValue = 1);
      dispatch(getMovieList({title: search}));
    }
  }

  const handleButtonSearch = () => {
    dispatch(getMovieList({title: search}));
  }

  const handlePageChange = event => {
    const {value} = event.target;
    if (!value.length > 0) return setPage('');
		if (isNaN(value)) return;
		if (value < 1) return setPage(1);
		if (value > pagination.totalPage) return setPage(pagination.totalPage);
    return setPage(currValue => currValue = value);
  }

  const handlePageEnter = event => {
    const {key} = event;
    if (key === 'Enter') {
      dispatch(getMovieList({title: search, page}));
    }
  }

  const handleDetail = id => {
    dispatch(setCurrentMovie(id));
  }

  return (
    <div className='body'>
      <div className='container'>
        <div className='header'>
          <Search 
            handleChange={handleSearchChange} 
            handleClick={handleButtonSearch} 
            handleKeyPress={handleSearchEnter}
          />
        </div>
        <div className='movie-list'>
          <List list={list} handleDetail={handleDetail} />
        </div>
        <div className='list-pagination'>
          <div><label>Page</label></div>
          <div><input value={page} onChange={handlePageChange} onKeyPress={handlePageEnter} className='pagination-input' type='text' /></div>
          <div><label>{isNaN(pagination.totalPage) ? 0 : pagination.totalPage}</label></div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;