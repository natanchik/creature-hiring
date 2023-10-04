import React, { useState } from 'react';

import Card from '../components/Card';
import Sceleton from '../components/Sceleton';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = React.useState(0);

  const categories = ['All', 'Mail', 'Woman', 'Brain', 'Creature'];

  React.useEffect(() => {
    setIsLoading(true);
    const baseURL = 'https://651af710340309952f0e1bc8.mockapi.io/cards';
    const categoryUrl = activeCategory ? `?group=${categories[activeCategory]}` : '';
    fetch(baseURL + categoryUrl)
      .then((res) => res.json())
      .then((res) => setItems(res))
      .then(() => setTimeout(setIsLoading(false), 2000));
  }, [activeCategory]);

  return (
    <div className='Home'>
      <ul className='categories'>
        {categories.map((category, index) => (
          <li key={index} onClick={() => setActiveCategory(index)} className={activeCategory === index ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
      <div className='cards'>
        {isLoading
          ? [...new Array(8)].map((_, ind) => <Sceleton className='card' key={ind} />)
          : items.map((card) => (
              <Card key={'card-' + card.id} className='card' title={card.title} img={card.img} prices={card.prices} />
            ))}
      </div>
    </div>
  );
}

export default Home;
