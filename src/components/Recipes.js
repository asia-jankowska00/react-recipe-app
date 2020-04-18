import React from "react";
import Recipe from "./Recipe";

const Recipes = (props) => {
  return (
    <div className="flex flex-wrap justify-center">
      {props.recipes.map((recipe) => {
        return (
          <Recipe
            recipe={recipe}
            key={recipe.recipe.uri.split("_")[1]}
            setFavorites={props.setFavorites}
            favorites={props.favorites}
          />
        );
      })}
    </div>
  );
};

export default Recipes;
