import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setPage } from '../redux/slices/filterSlice';
import { CATEGORIES } from './constants';

function Categories() {
  const { category } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  function changeCategory(item) {
    dispatch(setCategory(item));
    dispatch(setPage(1));
  }

  return (
    <div className='categories'>
      {CATEGORIES.map((item, index) => (
        <span key={index} onClick={() => changeCategory(item)} className={category === item ? 'active' : ''}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default Categories;
