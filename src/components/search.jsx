import React, { useContext } from 'react';
import { SearchContext } from '../App';

function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <div className='search'>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className='search__input'
        placeholder='Search creature...'
      />
      <span>
        <img className='search__img' alt='Search' src='img/glass.svg' />
      </span>
      {searchValue && (
        <span onClick={() => setSearchValue('')} className='search__clear'>
          &#10006;
        </span>
      )}
    </div>
  );
}

export default Search;
