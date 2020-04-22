import React, { useContext } from "react";
import Dropdown from "./Dropdown";
import { SearchQueryContext } from "../contexts/SearchQueryContext";

const Form = () => {
  const { getSearchQuery, doSearch } = useContext(SearchQueryContext);

  return (
    <div className="flex justify-around h-64 md:h-auto py-8">
      <form className="flex flex-col w-5/6 md:flex-row md:w-11/12 xl:w-3/4 justify-between items-start relative text-gray-700">
        <input
          type="text"
          placeholder="Search recipes..."
          onInput={getSearchQuery}
          className="w-full md:w-5/12 border border-gray-400 shadow-inner px-4 py-2"
        />
        <Dropdown />
        <button
          onClick={doSearch}
          className="w-full md:w-3/12 bg-blue-900 text-white Merriweather-400 shadow px-4 py-2 transform hover:scale-110"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
