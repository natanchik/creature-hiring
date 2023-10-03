import React from 'react';

function Card({ title, img, prices }) {
  const [activePrice, setActivePrice] = React.useState(0);

  return (
    <div className='card'>
      <h4>{title}</h4>
      <img src={img} className='card__img' />
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
