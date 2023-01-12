import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(({ addIngredient }) => {
  const [inputState, setInputState] = useState({ title: '', amount: '' });
  console.log('IngredientForm');
  const submitHandler = (event) => {
    event.preventDefault();
    const ingredient = {
      title: inputState.title,
      amount: inputState.amount,
    };
    addIngredient(ingredient);
    setInputState({
      title: '',
      amount: '',
    });
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputState.title}
              onChange={(e) => {
                setInputState({ ...inputState, title: e.target.value });
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState.amount}
              onChange={(e) => {
                setInputState({ ...inputState, amount: e.target.value });
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
