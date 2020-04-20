import React, { useContext } from "react";
import Recipe from "./Recipe";
import { SearchQueryContext } from "../contexts/SearchQueryContext";

const Recipes = () => {
  const { recipes } = useContext(SearchQueryContext);

  return (
    <div className="flex flex-wrap justify-center">
      {recipes.map((recipe) => {
        return (
          <Recipe
            recipe={recipe}
            key={recipe.recipe.uri.split("_")[1]}
            // setFavorites={props.setFavorites}
            // favorites={props.favorites}
          />
        );
      })}
    </div>
  );
};

export default Recipes;
