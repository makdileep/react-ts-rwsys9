import React = require('react');

const Banana = ({ prodName }) => {
  console.log('Banana rendered');
  return <h1>{prodName}</h1>;
};

export const MemoizedBanana = React.memo(Banana);
