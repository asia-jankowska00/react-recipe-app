import React from "react";
import Dropdown from "./Dropdown";

const Form = (props) => {
  return (
    <div className="flex justify-around mt-5">
      <form className="flex w-3/4 justify-around items-start relative text-gray-700">
        <input
          type="text"
          placeholder="Search recipes..."
          onInput={props.getSearchQuery}
          className="w-5/12 border border-gray-400 shadow-inner px-4 py-2"
        />
        <Dropdown />
        <button
          onClick={props.doSearch}
          className="w-3/12 bg-blue-900 text-white Merriweather-400 shadow px-4 py-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
