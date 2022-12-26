import React = require('react');

const Car = ({ prodName }) => {
  console.log('Car rendered');
  return <h1>{prodName}</h1>;
};

export const MemoizedCar = React.memo(Car);
