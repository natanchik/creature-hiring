import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../redux/slices/filterSlice';

function Pagination() {
  const { page, maxPage } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className='Pagination'>
      <span
        className={page === 1 ? 'disable page' : 'page'}
        onClick={() => (page === 1 ? null : dispatch(setPage(page - 1)))}
      >
        &#x3c;
      </span>
      <span>{page}</span>
      <span
        className={page === maxPage ? 'disable page' : 'page'}
        onClick={() => (page === maxPage ? null : dispatch(setPage(page + 1)))}
      >
        &#x3e;
      </span>
    </div>
  );
}

export default Pagination;
