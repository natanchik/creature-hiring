import React from 'react';

function Pagination({ page, setPage }) {
  return (
    <div className='Pagination'>
      <span className={page === 1 ? 'disable' : ''} onClick={() => setPage(page === 1 ? 1 : page - 1)}>
        &#x3c;
      </span>
      <span>{page}</span>
      <span className={page === 4 ? 'disable' : ''} onClick={() => setPage(page === 4 ? page : page + 1)}>
        &#x3e;
      </span>
    </div>
  );
}

export default Pagination;
