import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextPage, prevPage } from '../redux/slices/filterSlice';

function Pagination() {
  const page = useSelector((state) => state.filter.page);
  const dispatch = useDispatch();

  return (
    <div className='Pagination'>
      <span className={page === 1 ? 'disable page' : 'page'} onClick={() => dispatch(prevPage())}>
        &#x3c;
      </span>
      <span>{page}</span>
      <span className={page === 4 ? 'disable page' : 'page'} onClick={() => dispatch(nextPage())}>
        &#x3e;
      </span>
    </div>
  );
}

export default Pagination;
