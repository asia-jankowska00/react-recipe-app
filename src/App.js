import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

function App() {
  const APP_KEY = "d2cf812100729746a80f302c5ecd16f2";
  const APP_ID = "560a76dc";

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const doSearch = (e) => {
    e.preventDefault();
    getRecipes();
  };

  const doFavoriteSearch = (e) => {
    e.preventDefault();
    // console.log("get fAVSS");
    getFavoriteRecipes();
  };

  const getRecipes = async () => {
    if (query != "") {
      const res = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=50`
      );
      const data = await res.json();
      console.log(data);
      setRecipes(data.hits);
    }
  };

  const getFavoriteRecipes = async () => {
    if (favorites.length !== 0) {
      let favoritesQuery = "";
      favorites.forEach(
        (favorite) =>
          (favoritesQuery += `&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${favorite}`)
      );
      const res = await fetch(
        `https://api.edamam.com/search?${favoritesQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await res.json();
      console.log(data);
      setFavoriteRecipes(data.hits);
    }
  };

  const getSearchQuery = (e) => {
    setQuery(e.target.value);
  };

  // const urlOne =
  //   "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408";
  // const urlTwo =
  //   "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_b79327d05b8e5b838ad6cfd9576b30b6";
  // const urlThree = "b79327d05b8e5b838ad6cfd9576b30b6";

  // const setFavorite = async () => {
  //   const res = await fetch(
  //     `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&r=${urlTwo}&r=${urlOne}`
  //   );
  //   const data = await res.json();
  //   console.log(data);
  // };

  return (
    <div className="">
      <Header doFavoriteSearch={doFavoriteSearch} />

      <Form
        doSearch={doSearch}
        getSearchQuery={getSearchQuery}
        doFavoriteSearch={doFavoriteSearch}
      />

      <Recipes
        recipes={recipes}
        setFavorites={setFavorites}
        favorites={favorites}
      />
    </div>
  );
}

export default App;
