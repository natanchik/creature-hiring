import React, { useState, useContext, useCallback } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setMaxPage } from '../redux/slices/filterSlice';
import { SearchContext } from '../App';

import Cards from '../components/Cards';
import Categories from '../components/categories';
import Sort from '../components/Sort';
import Sceletons from '../components/Sceletons';
import Pagination from '../components/Pagination';
import { BASEURL } from '../components/constants';

function Home() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = useContext(SearchContext);
  const { page, sortBy, perPage, order, category } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const getCards = useCallback(async () => {
    const categoryUrl = category === 'All' ? '' : `&category=${category.toLowerCase()}`;
    const searchUrl = searchValue ? `&name=*${searchValue}*` : '';
    const orderBy = order === 'asc' ? '' : '-';

    axios
      .get(`${BASEURL}?limit=${perPage}&page=${page}${categoryUrl}${searchUrl}&sortBy=${orderBy}${sortBy}`)
      .then((res) => {
        console.log(res);
        setCards(res.data.items);
        dispatch(setMaxPage(res.data.meta.total_pages));
      })
      .then(() => setIsLoading(false))
      .catch((err) => console.error(err));
  }, [category, perPage, sortBy, order, searchValue, page, dispatch]);

  React.useEffect(() => {
    const func = async () => {
      setIsLoading(true);
      await getCards();
    };
    func();
  }, [category, perPage, sortBy, order, searchValue, page, getCards]);

  return (
    <div className='Home'>
      <div className='home__header'>
        <Categories />
        <Sort />
      </div>

      <div className='cards'>{isLoading ? <Sceletons /> : cards && <Cards cards={cards} />}</div>
      <Pagination />
    </div>
  );
}

export default Home;
