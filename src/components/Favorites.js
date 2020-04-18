import React from "react";

const Favorites = (props) => {
  return (
    <div className="flex flex-wrap justify-center">
      {props.favorites.map((favorite) => {
        return (
          <Recipe
            recipe={favorite}
            key={favorite.recipe.uri.split("_")[1]}
            setFavorites={props.setFavorites}
            favorites={props.favorites}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
