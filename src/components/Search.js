import React from "react";
import Form from "./Form";
import Recipes from "./Recipes";

const Search = () => {
  return (
    <div>
      <h1 className="text-gray-700 text-4xl font-semibold Merriweather-700 text-center py-4">
        Search recipes
      </h1>
      <hr></hr>
      <Form />
      <hr></hr>
      <Recipes />
    </div>
  );
};

export default Search;
