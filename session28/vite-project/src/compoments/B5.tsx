import React from 'react';
import Bbt5 from './Bbt5';

const B5 = () => {
  const product = {
    id: 1,
    name: 'Nhà',
    price: 1099,
    quantity: 1
  };

  return (
    <div>
      <h2>B5</h2>
      <Bbt5 product={product} />
    </div>
  );
};

export default B5;