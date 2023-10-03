import React, { useState } from 'react';

import Card from '../components/Card';
import Sceleton from '../components/Sceleton';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = React.useState(0);

  const categories = ['All', 'Mail', 'Femail', 'Brain', 'Creature'];

  React.useEffect(() => {
    fetch('https://651af710340309952f0e1bc8.mockapi.io/cards')
      .then((res) => res.json())
      .then((res) => setItems(res))
      .then(() => setTimeout(setIsLoading(false), 3000));
  }, []);

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
