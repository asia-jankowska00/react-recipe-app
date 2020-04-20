import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FavoritesContext } from "../contexts/FavoritesContext";

const Recipe = (props) => {
  const recipe = props.recipe.recipe;
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const [message, setMessage] = useState("");
  const [heart, setHeart] = useState();

  const parsedUri = recipe.uri.split("_")[1];

  const updateFavorites = () => {
    favorites.includes(parsedUri) ? deleteFavorite() : addFavorite();
  };

  const addFavorite = () => {
    setFavorites([...favorites, parsedUri]);
    setMessage("Remove favorite");
    setHeart(fasHeart);
  };

  const deleteFavorite = () => {
    setFavorites([...favorites.filter((favorite) => favorite !== parsedUri)]);
    setMessage("Add favorite");
    setHeart(farHeart);
  };

  return (
    <div className="flex flex-col bg-white shadow p-4 w-1/4 mx-6 mt-6">
      <img src={recipe.image} alt="recipe" />
      <h2 className="text-orange-600 text-2xl font-bold my-6">
        {recipe.label.length < 25
          ? recipe.label
          : recipe.label.substring(0, 25) + "..."}
      </h2>
      <p className="text-gray-500">
        Source:{" "}
        <a href={recipe.url} className="underline">
          {recipe.source} <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </p>
      <div className="flex justify-between mt-8">
        <button className="flex w-1/2 justify-left text-orange-600">
          <a href="#" className="">
            <p className="inline self-center">View recipe info</p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-4 text-2xl self-center"
            />
          </a>
        </button>
        <button
          onClick={updateFavorites}
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
