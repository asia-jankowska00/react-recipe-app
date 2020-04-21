import React, { useContext, useEffect } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import Recipe from "./Recipe";

const Favorites = () => {
  const {
    favorites,
    setFavorites,
    getFavoriteRecipes,
    favoriteRecipes,
  } = useContext(FavoritesContext);

  useEffect(() => {
    getFavoriteRecipes();
  }, [favorites]);

  return (
    <div>
      <h1 className="text-gray-700 text-4xl font-semibold Merriweather-700 text-center py-4">
        Favorites
      </h1>
      <hr></hr>

      <div className="flex flex-wrap justify-center">
        {favoriteRecipes.map((favorite) => {
          return <Recipe key={favorite.uri.split("_")[1]} recipe={favorite} />;
        })}
      </div>
    </div>
  );
};

export default Favorites;
