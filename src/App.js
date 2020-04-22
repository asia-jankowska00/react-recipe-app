import React, { useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Search from "./components/Search";
// import Form from "./components/Form";
// import Recipes from "./components/Recipes";
import OpenRecipe from "./components/OpenRecipe";
import Favorites from "./components/Favorites";

// import SearchQueryContextProvider from "./contexts/SearchQueryContext";
// import { SearchQueryContext } from "./contexts/SearchQueryContext";
// import FavoritesContextProvider from "./contexts/FavoritesContext";
import { FavoritesContext } from "./contexts/FavoritesContext";
// import CredentialsContextProvider from "./contexts/CredentialsContext";
// import { CredentialsContext } from "./contexts/CredentialsContext";

function App() {
  const { setFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    let favs = JSON.parse(localStorage.getItem("favorites"));
    if (favs != null) {
      setFavorites(favs);
    }
  }, []);

  return (
    <div className="mb-8">
      <Header />
      <Route path="/recipe/:id" component={OpenRecipe} />
      <Route path="/" exact component={Search} />
      <Route path="/favorites" component={Favorites} />
    </div>
  );
}

export default App;
