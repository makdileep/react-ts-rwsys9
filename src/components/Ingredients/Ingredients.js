import React, { useState, useEffect } from 'react';
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import Search from './Search';

function Ingredients() {
  const [userIngredient, setUserIngredient] = useState([]);

  useEffect(()=>{
    console.log('useEffect');
    fetch('https://react-hooks-6e5a0-default-rtdb.firebaseio.com/ingrediants.json')
    .then(response => response.json())
    .then((responseData)=>{
      const loadedIngrediants = [];
      for(let key in responseData) {
        loadedIngrediants.push({
          id: key,
          title: responseData[key].title,
          amount: responseData[key].amount
        })
      }
     setUserIngredient(loadedIngrediants)
    })
  },[])
  const onAddIngredient = (ingredient) => {
    fetch('https://react-hooks-6e5a0-default-rtdb.firebaseio.com/ingrediants.json', 
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ingredient)
    }).then(res=>{
      return res.json();
    }).then(responseData =>{
      setUserIngredient([
        ...userIngredient,
        { id: responseData.name, ...ingredient }
      ]);
    })

  };

  const removeItem = (this, id)=>{
    setUserIngredient(userIngredient.filter(ingrediant => ingrediant.id !== id))
  }
  return (
    <div className="App">
      <IngredientForm addIngredient={onAddIngredient} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredient} onRemoveItem={removeItem} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
