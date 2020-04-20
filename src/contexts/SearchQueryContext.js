import React, { createContext, useState, useEffect } from "react";

export const SearchQueryContext = createContext();

const SearchQueryContextProvider = (props) => {
  const APP_KEY = "d2cf812100729746a80f302c5ecd16f2";
  const APP_ID = "560a76dc";

  const [recipes, setRecipes] = useState([]);

  const [query, setQuery] = useState("");
  const [queryOptions, setQueryOptions] = useState("");

  const [dietaryOptions, setDietaryOptions] = useState([
    // {
    //   parameter: "gluten-free",
    //   title: "Gluten-free",
    //   type: "health",
    // },
    // {
    //   parameter: "keto-friendly",
    //   title: "Keto-friendly",
    //   type: "health",
    // },
    // {
    //   parameter: "paleo",
    //   title: "Paleo",
    //   type: "health",
    // },
    {
      parameter: "vegan",
      title: "Vegan",
      type: "health",
    },
    {
      parameter: "vegetarian",
      title: "Vegetarian",
      type: "health",
    },
    {
      parameter: "low-carb",
      title: "Low-carb",
      type: "diet",
    },
    {
      parameter: "low-fat",
      title: "Low-fat",
      type: "diet",
    },
    // {
    //   parameter: "low-sodium",
    //   title: "Low-sodium",
    //   type: "diet",
    // },
    // {
    //   parameter: "low-sugar",
    //   title: "Low-sugar",
    //   type: "health",
    // },
  ]);

  const [selectedProperties, setSelectedProperties] = useState([]);

  const doSearch = (e) => {
    e.preventDefault();
    getRecipes();
  };

  const buildQueryString = () => {
    let string = "";
    // if (selectedProperties.length !== 0) {
    selectedProperties.forEach((property) => {
      string += `&${property.type}=${property.parameter}`;
      // setQueryOptions(
      //   (queryOptions += `&${property.type}=${property.parameter}`)
      // );
    });
    // setQueryOptions(string, [
    //   () => {
    //     return true;
    //   },
    // ]);
    // console.log(string);
    // }
    setQueryOptions(string);
    console.log(string);
  };

  useEffect(buildQueryString, [selectedProperties]);

  const getRecipes = async () => {
    if (query !== "") {
      const res = await fetch(
        `https://api.edamam.com/search?q=${query}${queryOptions}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=50`
      );
      console.log(queryOptions);
      const data = await res.json();
      console.log(data);
      setRecipes(data.hits);
    }
  };

  const getSearchQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <SearchQueryContext.Provider
      value={{
        dietaryOptions,
        setDietaryOptions,
        selectedProperties,
        setSelectedProperties,
        recipes,
        setRecipes,
        getRecipes,
        doSearch,
        getSearchQuery,
        buildQueryString,
      }}
    >
      {props.children}
    </SearchQueryContext.Provider>
  );
};

export default SearchQueryContextProvider;
