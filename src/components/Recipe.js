import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FavoritesContext } from "../contexts/FavoritesContext";

const Recipe = (props) => {
  const recipe = props.recipe.recipe || props.recipe;
  const parsedUri = recipe.uri.split("_")[1];

  const { favorites, updateFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="flex flex-col bg-white shadow p-4 xl:w-3/12 lg:w-1/3 md:w-1/2 sm:w-3/4 w-full mx-6 mt-6">
      <img src={recipe.image} alt="recipe" className="object-contain w-full" />
      <h2 className="text-orange-600 text-2xl font-bold my-6">
        {recipe.label.length < 20
          ? recipe.label
          : recipe.label.substring(0, 20) + "..."}
      </h2>
      <p className="text-gray-500">
        Source:{" "}
        <a href={recipe.url} className="underline">
          {recipe.source} <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </p>
      <div className="flex justify-between mt-8">
        <Link to={`/recipe/${parsedUri}`}>
          <button className="flex w-full justify-left p-4 bg-blue-900 text-white">
            <p className="inline self-center">View recipe info</p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-4  self-center"
            />
          </button>
        </Link>
        <button
          onClick={() => {
            updateFavorites(parsedUri);
          }}
          className="flex w-1/3 justify-right text-orange-600"
        >
          <FontAwesomeIcon
            icon={favorites.includes(parsedUri) ? fasHeart : farHeart}
            className="mt-1 mr-4 text-2xl inline-block self-center"
          />
          <p className="w-3/5 inline self-center">
            {favorites.includes(parsedUri) ? "Remove favorite" : "Add favorite"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default Recipe;
