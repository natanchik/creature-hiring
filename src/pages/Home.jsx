import React, { useState, useContext } from 'react';
import { SearchContext } from '../App';

import Card from '../components/Card';
import Sort from '../components/Sort';
import Sceleton from '../components/Sceleton';
import Pagination from '../components/pagination';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [sortInd, setSortInd] = React.useState(0);
  const [sortDir, setsortDir] = useState(true);
  const [page, setPage] = useState(1);
  const { searchValue } = useContext(SearchContext);

  const categories = ['All', 'Mail', 'Woman', 'Brain', 'Creature'];
  const sortItems = ['rating', 'name', 'group'];

  async function getItems() {
    const baseURL = 'https://651af710340309952f0e1bc8.mockapi.io/cards';
    const categoryUrl = activeCategory ? `group=${categories[activeCategory]}` : '';
    const sortByUrl = `sortBy=${sortItems[sortInd]}`;
    const order = sortDir ? '&order=asc' : '&order=desc';
    const searchUrl = searchValue ? `search=${searchValue}` : '';
    const currentPage = `limit=4&page=${page}`;

    fetch([baseURL, [currentPage, categoryUrl, searchUrl, sortByUrl, order].join('&')].join('?'), {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then((res) => setItems(res))
      .then(() => setIsLoading(false));
  }

  function changeCategory(index) {
    setActiveCategory(index);
    setPage(1);
  }

  function changeSort(index) {
    setSortInd(index);
    setPage(1);
  }

  React.useEffect(() => {
    setIsLoading(true);
    getItems();
  }, [activeCategory, sortInd, sortDir, searchValue, page]);

  return (
    <div className='Home'>
      <div className='home__header'>
        <div className='categories'>
          {categories.map((category, index) => (
            <span
              key={index}
              onClick={() => changeCategory(index)}
              className={activeCategory === index ? 'active' : ''}
            >
              {category}
            </span>
          ))}
        </div>
        <Sort
          sortItems={sortItems}
          sortInd={sortInd}
          setSortInd={(i) => changeSort(i)}
          sortDir={sortDir}
          setsortDir={setsortDir}
        />
      </div>

      <div className='cards'>
        {isLoading
          ? [...new Array(4)].map((_, ind) => <Sceleton className='card' key={ind} />)
          : items.map((card) => (
              <Card
                key={'card-' + card.id}
                className='card'
                title={card.name}
                img={card.img}
                prices={card.prices}
                rating={card.rating}
              />
            ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Home;
