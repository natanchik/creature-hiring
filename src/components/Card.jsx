import React from 'react';

function Card({ id, title, prices, rating }) {
  const [activePrice, setActivePrice] = React.useState(0);

  return (
    <div className='card'>
      <h4>
        {title} <b>&#11088;</b> {rating}
      </h4>
      <img src={`img/${id}.png`} alt={title} className='card__img' />
      <div className='card__prices'>
        {prices.map((price, index) => (
          <p
            key={index}
            onClick={() => setActivePrice(index)}
            className={activePrice === index ? 'card__price active' : 'card__price'}
          >
            {price}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Card;
