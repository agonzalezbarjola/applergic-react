import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import "./Search.scss"
function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredRestaurant = details.filter(
    restaurant => {
      return (
        restaurant
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        restaurant
        .email
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredRestaurant={filteredRestaurant} />
      </Scroll>
    );
  }

  return (
    <section className="c-section">
      <div className="c-titleSearch">
        <h2 className="c-titleSearch__title">Search your restaurant</h2>
      </div>
      <div className="c-imput">
        <input 
          type = "search" 
          placeholder = "" 
           onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;