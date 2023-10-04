import React from 'react';

function Cart() {
  return (
    <div className='Cart'>
      <h2 className='cart__header'>YOUR CART IS EMPTY</h2>
      <img alt='Empty Cart' src='img/empty-cart.png' className='cart__empty__img' />
    </div>
  );
}

export default Cart;
