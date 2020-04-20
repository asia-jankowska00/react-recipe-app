import React, { useState, useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import SearchQueryContextProvider from "./contexts/SearchQueryContext";
// import { SearchQueryContext } from "./contexts/SearchQueryContext";
import FavoritesContextProvider from "./contexts/FavoritesContext";
// import { FavoritesContext } from "./contexts/FavoritesContext";
import CredentialsContextProvider from "./contexts/CredentialsContext";
// import { CredentialsContext } from "./contexts/CredentialsContext";

function App() {
  return (
    <CredentialsContextProvider>
      <SearchQueryContextProvider>
        <FavoritesContextProvider>
          <div className="">
            <Header
            // doFavoriteSearch={doFavoriteSearch}
            />

            <Form />

            <Recipes
            // recipes={recipes}
            // setFavorites={setFavorites}
            // favorites={favorites}
            />
          </div>
        </FavoritesContextProvider>
      </SearchQueryContextProvider>
    </CredentialsContextProvider>
  );
}

export default App;
