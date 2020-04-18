import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <header className="flex bg-blue-900 text-white p-4 px-16 justify-between">
      <div>
        <h1 className="inline text-4xl font-semibold Merriweather-700 text-center">
          <FontAwesomeIcon icon={faUtensils} className="mx-4" />
          diet'O
        </h1>
        <p className="inline ml-12 text-center">
          Find inspiration and enhance your diet
        </p>
      </div>

      <nav className="flex ">
        <button className="text-white Merriweather-400 px-4 py-2">
          Search recipes
        </button>
        <button
          onClick={props.doFavoriteSearch}
          className="text-white Merriweather-400 px-4 py-2"
        >
          Favorites
        </button>
      </nav>
    </header>
  );
};

export default Header;
