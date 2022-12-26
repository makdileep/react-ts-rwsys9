import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';

function Ingredients() {
  const [userIngredient, setUserIngredient] = useState([]);
  const onAddIngredient = (ingredient) => {
    setUserIngredient([
      ...userIngredient,
      { id: Math.random().toString(), ...ingredient },
    ]);
  };
  console.log(userIngredient);
  return (
    <div className="App">
      <IngredientForm addIngredient={onAddIngredient} />

      <section>
        <Search />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
