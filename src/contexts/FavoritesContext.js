import React, { createContext, useState, useContext } from "react";
import { CredentialsContext } from "../contexts/CredentialsContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

export const FavoritesContext = createContext();

const FavoritesContextProvider = (props) => {
  const { APP_KEY, APP_ID } = useContext(CredentialsContext);
  const [favorites, setFavorites] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const [message, setMessage] = useState("");
  const [heart, setHeart] = useState();

  const updateFavorites = (id) => {
    console.log(id);
    favorites.includes(id) ? deleteFavorite(id) : addFavorite(id);
  };

  const addFavorite = (id) => {
    setFavorites([...favorites, id]);
    setMessage("Remove favorite");
    setHeart(fasHeart);
  };

  const deleteFavorite = (id) => {
    setFavorites([...favorites.filter((favorite) => favorite !== id)]);
    setMessage("Add favorite");
    setHeart(farHeart);
  };

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
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setFavoriteRecipes(data);
      }
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
        updateFavorites,
        addFavorite,
        deleteFavorite,
        message,
        setMessage,
        heart,
        setHeart,
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
