import React, { useCallback, useContext, useState, useRef } from 'react';
import { SearchContext } from '../App';
import debounce from 'lodash.debounce';

function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [search, setSearch] = useState('');
  const inputRef = useRef();

  const debounceSearch = useCallback(
    debounce((text) => setSearchValue(text), 500),
    [],
  );

  function onChangeSearch(event) {
    setSearch(event.target.value);
    debounceSearch(event.target.value);
  }

  function onClickClear() {
    setSearch('');
    setSearchValue('');
    inputRef.current.focus();
  }

  return (
    <div className='search'>
      <input
        ref={inputRef}
        name='search'
        value={search}
        onChange={onChangeSearch}
        className='search__input'
        placeholder='Search creature...'
      />
      <span>
        <img className='search__img' alt='Search' src='img/glass.svg' />
      </span>
      {searchValue && (
        <span onClick={onClickClear} className='search__clear'>
          &#10006;
        </span>
      )}
    </div>
  );
}

export default Search;
