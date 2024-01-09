import React from 'react';
import Card from '../components/Card';

function Cards({ cards }) {
  return cards.map((card) => (
    <Card
      key={`card-${card.id}`}
      className='card'
      id={card.id}
      title={card.name}
      prices={card.prices}
      rating={card.rating}
    />
  ));
}

export default Cards;
