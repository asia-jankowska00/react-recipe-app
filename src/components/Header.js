import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="flex bg-blue-900 text-white p-4 px-10 md:px-12 xl:px-20 justify-between">
      <div>
        <Link to="/" className="">
          <h1 className=" text-4xl font-semibold Merriweather-700r">
            <FontAwesomeIcon
              icon={faUtensils}
              className="inline transform hover:scale-110"
            />
            <p className="hidden ml-8 sm:inline transform hover:scale-110">
              it just forks!
            </p>
          </h1>
        </Link>
        <p className=" hidden md:inline text-center">
          Find culinary inspiration and enhance your diet
        </p>
      </div>

      <nav className="flex ">
        <Link
          to="/"
          className="flex align-middle text-white Merriweather-400 px-4 py-2 hover:underline transform hover:scale-110"
        >
          <button>Search recipes</button>
        </Link>
        <Link
          to="/favorites"
          className="flex align-middle text-white Merriweather-400 px-4 py-2 hover:underline transform hover:scale-110"
        >
          <button>Favorites</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
