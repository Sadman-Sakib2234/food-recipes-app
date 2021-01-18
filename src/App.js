import "./App.css";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const App = () => {
  // App id
  const APP_ID = "901412de";
  const APP_KEY = "bc9ada781e0e418a7f081712f6e30765";

  const [ recipes, setRecipes ] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e =>{
    setSearch(e.target.value)
  }


  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search__form">
        <input type="text" className="search__bar" value={search} onChange={updateSearch}/>
        <button
          type="submit"
          className="search__button"
        >
          Search
        </button>
      </form>
      <div className="recipe__box">
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} image={recipe.recipe.image} title={recipe.recipe.label} calories={recipe.recipe.calories} ingredients={recipe.recipe.ingredients} source={recipe.recipe.source}/>
      ))}
      </div>
    </div>
  );
};

export default App;