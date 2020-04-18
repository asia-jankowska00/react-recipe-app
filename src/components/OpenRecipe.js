import React from "react";

const OpenRecipe = () => {
  return (
    <div className="flex flex-col bg-white shadow p-4 w-1/4 mx-6 mt-6">
      <img src={recipe.image} alt="recipe" />
      <h2 className="text-orange-600 text-2xl font-bold my-6">
        {recipe.label.length < 25
          ? recipe.label
          : recipe.label.substring(0, 25) + "..."}
      </h2>
      <ul>
        {recipe.ingredientLines.map((ingredient) => (
          <li key={ingredient}>
            <input type="checkbox" />
            {ingredient}
          </li>
        ))}
      </ul>
      <p>
        Source:{" "}
        <a href={recipe.url} className="underline">
          {recipe.source} <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </p>
      <div className="flex justify-between">
        <button className="flex w-1/2 text-orange-600">
          <a href="#" className="">
            <p className="inline self-center">View recipe</p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-4 text-2xl self-center"
            />
          </a>
        </button>
        <button
          onClick={updateFavorites}
          className="flex w-1/3 justify-between py-2 align-center text-orange-600"
        >
          <FontAwesomeIcon
            icon={props.favorites.includes(parsedUri) ? fasHeart : farHeart}
            className="mt-1 text-2xl inline-block self-center"
          />
          <p className="w-3/5">
            {props.favorites.includes(parsedUri)
              ? "Remove favorite"
              : "Add favorite"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default OpenRecipe;
