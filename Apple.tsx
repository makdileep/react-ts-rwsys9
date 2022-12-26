import React = require('react');

const Apple = ({ prodName }) => {
  console.log('Apple rendered');
  var arr = [1, 2, 3, 4, 4, 5, 6, 6, 7];

  function removeDuplicates(arr) {
    return arr.filter((num, i) => arr.indexOf(num) === i);
  }
  let Obj1 = { a: 1, b: 2 };
  var Obj2 = { ...Obj1 };
  Obj2.a = 100;

  console.log(Obj1, Obj2);

  console.log(removeDuplicates(arr));
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export const MemoizedApple = React.memo(Apple);
