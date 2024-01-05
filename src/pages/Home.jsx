import React, { useState, useContext, useCallback } from 'react';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, resetPage } from '../redux/slices/filterSlice';
import axios from 'axios';

import Card from '../components/Card';
import Sort from '../components/Sort';
import Sceleton from '../components/Sceleton';
import Pagination from '../components/pagination';
import { BASEURL, CATEGORIES } from '../components/constants';

function Home() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = useContext(SearchContext);
  const { page, sortBy, order, category } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const getCards = useCallback(async () => {
    const categoryUrl = category === 'All' ? '' : `&group=${category}`;
    const searchUrl = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(`${BASEURL}?limit=4&page=${page}${categoryUrl}${searchUrl}&sortBy=${sortBy}&order=${order}`)
      .then((res) => setCards(res.data))
      .then(() => setIsLoading(false))
      .catch((err) => console.error(err));
  }, [category, sortBy, order, searchValue, page]);

  function changeCategory(item) {
    dispatch(setCategory(item));
    dispatch(resetPage());
  }

  React.useEffect(() => {
    const func = async () => {
      setIsLoading(true);
      await getCards();
    };
    func();
  }, [category, sortBy, order, searchValue, page, getCards]);

  return (
    <div className='Home'>
      <div className='home__header'>
        <div className='categories'>
          {CATEGORIES.map((item, index) => (
            <span key={index} onClick={() => changeCategory(item)} className={category === item ? 'active' : ''}>
              {item}
            </span>
          ))}
        </div>
        <Sort />
      </div>

      <div className='cards'>
        {isLoading
          ? [...new Array(4)].map((_, ind) => <Sceleton className='card' key={ind} />)
          : cards.map((card) => (
              <Card
                key={`card-${card.id}`}
                className='card'
                title={card.name}
                img={card.img}
                prices={card.prices}
                rating={card.rating}
              />
            ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Home;
