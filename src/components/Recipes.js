import React, { useContext, useEffect } from "react";
import Recipe from "./Recipe";
import { SearchQueryContext } from "../contexts/SearchQueryContext";
import { FavoritesContext } from "../contexts/FavoritesContext";

const Recipes = () => {
  const { recipes } = useContext(SearchQueryContext);
  // const { setFavorites } = useContext(FavoritesContext);

  return (
    <div className="flex flex-wrap justify-center">
      {recipes.map((recipe) => {
        return <Recipe recipe={recipe} key={recipe.recipe.uri.split("_")[1]} />;
      })}
    </div>
  );
};

export default Recipes;
