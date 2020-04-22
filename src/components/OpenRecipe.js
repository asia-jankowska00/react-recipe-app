import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CredentialsContext } from "../contexts/CredentialsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FavoritesContext } from "../contexts/FavoritesContext";

const OpenRecipe = ({ match }) => {
  const { APP_KEY, APP_ID } = useContext(CredentialsContext);
  const { favorites, updateFavorites } = useContext(FavoritesContext);
  const [openRecipe, setOpenRecipe] = useState({});
  const [parsedLabels, setParsedLabels] = useState("");
  const [parsedIngredientLines, setParsedIngredientLines] = useState([]);

  const getOpenRecipe = async () => {
    const recipeQuery = `&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${match.params.id}`;
    const res = await fetch(
      `https://api.edamam.com/search?id=${recipeQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data[0]);
      setOpenRecipe(data[0]);
      parseHealthLabels();
    }
  };

  const parseHealthLabels = () => {
    let i,
      string = "";
    for (i in openRecipe.healthLabels) {
      string += `${openRecipe.healthLabels[i]}; `;
    }
    setParsedLabels(string);
  };

  const parseIngredientLines = () => {
    let i,
      arr = [];
    for (i in openRecipe.ingredientLines) {
      arr.push(openRecipe.ingredientLines[i]);
    }
    setParsedIngredientLines(arr);
  };

  useEffect(() => {
    parseHealthLabels();
    parseIngredientLines();
  }, [openRecipe]);

  useEffect(() => {
    getOpenRecipe();
  }, []);

  const history = useHistory();

  return (
    <div className="text-gray-500 flex flex-col items-center justify-center relative">
      <div
        onClick={history.goBack}
        className="cursor-pointer flex items-center text-orange-600 p-4"
      >
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          className="mr-4 text-2xl bg-white rounded-full inline-block self-center"
        />
        Back
      </div>

      <div className="flex flex-col bg-white shadow p-8 w-11/12 sm:w-5/6 md:w-3/4 lg:w-1/2 mx-6 mb-6">
        <img
          src={openRecipe.image}
          alt="recipe"
          className="object-cover h-full"
        />

        <div className="flex justify-between py-8 items-center">
          <h2 className="text-orange-600 w-2/3 text-2xl md:text-3xl font-bold">
            {openRecipe.label}
          </h2>

          <div className="flex w-1/3 justify-left">
            <button
              onClick={() => {
                updateFavorites(match.params.id);
              }}
              className="flex w-full justify-center text-orange-600"
            >
              <FontAwesomeIcon
                icon={favorites.includes(match.params.id) ? fasHeart : farHeart}
                className="mt-1 mr-4 text-2xl inline-block self-center"
              />
              <p className="inline text-center md:text-left self-center">
                {favorites.includes(match.params.id)
                  ? "Remove favorite"
                  : "Add favorite"}
              </p>
            </button>
          </div>
        </div>

        <hr></hr>

        <div className="py-4">
          <p className="text-gray-700 py-2 text-lg md:text-xl">
            Source:{" "}
            <a href={openRecipe.url} className="underline">
              {openRecipe.source} <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </p>

          <p className="py-2">{parsedLabels}</p>

          <div className="py-2">
            Calories per 100g:{" "}
            <p className="inline text-gray-700">
              {Math.floor(
                (openRecipe.calories / openRecipe.totalWeight) * 100
              ).toString() + " kcal"}
            </p>
          </div>
        </div>

        <hr></hr>

        <div className="py-4">
          <h3 className="py-2 text-gray-700 text-lg md:text-xl">
            Ingredients:
          </h3>
          <ul className="py-2 text-gray-600">
            {parsedIngredientLines.map((ingredient) => (
              <li key={ingredient} className="mx-4 py-2 list-disc">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <hr></hr>

        <h1 className="py-2 break-words">Recipe ID: {match.params.id}</h1>
      </div>
    </div>
  );
};

export default OpenRecipe;
