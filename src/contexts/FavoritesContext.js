import React, { createContext, useState, useContext } from "react";
import { CredentialsContext } from "../contexts/CredentialsContext";

export const FavoritesContext = createContext();

const FavoritesContextProvider = (props) => {
  const { APP_KEY, APP_ID } = useContext(CredentialsContext);
  const [favorites, setFavorites] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const doFavoriteSearch = (e) => {
    e.preventDefault();
    getFavoriteRecipes();
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
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
        favoriteRecipes,
        setFavoriteRecipes,
        doFavoriteSearch,
        getFavoriteRecipes,
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
