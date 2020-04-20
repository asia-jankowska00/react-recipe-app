import React, { useContext, useEffect } from "react";
import { SearchQueryContext } from "../contexts/SearchQueryContext";
import { FavoritesContext } from "./contexts/FavoritesContext";

const Favorites = (props) => {
  // make request to API to fetch favs

  const { selectedProperties, setSelectedProperties } = useContext(
    SearchQueryContext
  );
  const { favorites, setFavorites, getFavoriteRecipes } = useContext(
    FavoritesContext
  );

  useEffect(getFavoriteRecipes);

  return (
    <div className="flex flex-wrap justify-center">
      {props.favorites.map((favorite) => {
        return (
          <Recipe
            recipe={favorite}
            key={favorite.recipe.uri.split("_")[1]}
            setFavorites={setFavorites}
            favorites={favorites}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
