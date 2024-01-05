import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortBy, setOrder, resetPage } from '../redux/slices/filterSlice';
import { SORTBYITEMS } from './constants';

function Sort() {
  const [openPopup, setOpenPopup] = useState(false);
  const sortBy = useSelector((state) => state.filter.sortBy);
  const order = useSelector((state) => state.filter.order);
  const dispatch = useDispatch();

  function changeSortBy(item) {
    dispatch(setSortBy(item));
    dispatch(resetPage());
    setOpenPopup(!openPopup);
  }

  return (
    <div className='Sort'>
      <span className='sort__title'>
        Sort by
        <b className='sort__list' onClick={() => setOpenPopup(!openPopup)}>
          {sortBy}
        </b>
        <span className='sort__order' onClick={() => dispatch(setOrder(order === 'asc' ? 'desc' : 'asc'))}>
          {order === 'asc' ? <b>&#8593;</b> : <b>&#8595;</b>}
        </span>
      </span>
      <ul className={openPopup ? 'sort__block open' : 'sort__block'}>
        {SORTBYITEMS.map((item) => (
          <li key={item} onClick={() => changeSortBy(item)} className={sortBy === item ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sort;
