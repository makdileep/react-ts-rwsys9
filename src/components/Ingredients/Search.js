import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(({ handleSearchItem }) => {
  const [searchText, setSearchText] = useState('Apple');
  const inputRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText === inputRef.current.value) {
        //Checking with current value after 500 milliseconds
        const query =
          searchText.length === 0
            ? ''
            : `?orderBy="title"&equalTo="${searchText}"`;
        fetch(
          'https://react-hooks-6e5a0-default-rtdb.firebaseio.com/ingrediants.json' +
            query
        )
          .then((response) => response.json())
          .then((responseData) => {
            const loadedIngrediants = [];
            for (let key in responseData) {
              loadedIngrediants.push({
                id: key,
                title: responseData[key].title,
                amount: responseData[key].amount,
              });
            }
            handleSearchItem(loadedIngrediants);
          });
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText, handleSearchItem]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            ref={inputRef}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
