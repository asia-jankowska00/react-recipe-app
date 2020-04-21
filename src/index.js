import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./tailwindcss/tailwind.css";
import App from "./App";
import FavoritesContextProvider from "./contexts/FavoritesContext";
import CredentialsContextProvider from "./contexts/CredentialsContext";
import SearchQueryContextProvider from "./contexts/SearchQueryContext";

ReactDOM.render(
  <React.StrictMode>
    <CredentialsContextProvider>
      <SearchQueryContextProvider>
        <FavoritesContextProvider>
          <App />
        </FavoritesContextProvider>
      </SearchQueryContextProvider>
    </CredentialsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
