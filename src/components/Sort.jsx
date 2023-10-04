import React, { useState } from 'react';

function Sort({ sortItems, sortInd, setSortInd, sortDir, setsortDir }) {
  const [openPopup, setOpenPopup] = useState(false);

  function changeItem(index) {
    setSortInd(index);
    setOpenPopup(!openPopup);
  }

  return (
    <div className='Sort'>
      <span className='sort__title'>
        Sort by
        <b className='sort__list' onClick={() => setOpenPopup(!openPopup)}>
          {sortItems[sortInd]}
        </b>
        <span className='sort__order' onClick={() => setsortDir(!sortDir)}>
          {sortDir ? <b>&#8593;</b> : <b>&#8595;</b>}
        </span>
      </span>
      <ul className={openPopup ? 'sort__block open' : 'sort__block'}>
        {sortItems.map((item, index) => (
          <li key={index} onClick={() => changeItem(index)} className={sortInd === index ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sort;
