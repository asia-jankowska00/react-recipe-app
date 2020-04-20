import React, { useState, useRef, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import DropdownItem from "./DropdownItem";
import { SearchQueryContext } from "../contexts/SearchQueryContext";

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const {
    dietaryOptions,
    setDietaryOptions,
    selectedProperties,
    setSelectedProperties,
  } = useContext(SearchQueryContext);

  const [dropdownLabel, setDropdownLabel] = useState([]);

  // detect click outside dropdown
  const node = useRef();
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleDropdown = () => {
    setOpen(!isOpen);
  };

  return (
    <div ref={node} className="relative w-3/12">
      <div
        onClick={handleDropdown}
        className="flex justify-between align-center bg-white border border-gray-400 shadow-inner px-4 py-2"
      >
        <p className="inline-block self-center">
          {selectedProperties.length === 0
            ? "Diet preferences"
            : dropdownLabel.toString().substring(0, 20) + "..."}
        </p>
        <FontAwesomeIcon
          icon={faCaretDown}
          className="ml-4 inline-block self-center"
        />
      </div>
      <ul
        className={
          isOpen === true
            ? "block w-full absolute bg-white border border-gray-400 shadow-inner"
            : "hidden w-full bg-white border border-gray-400 shadow-inner"
        }
      >
        {dietaryOptions.map((option) => {
          return (
            <DropdownItem
              key={option.parameter}
              dropdownLabel={dropdownLabel}
              setDropdownLabel={setDropdownLabel}
              option={option}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
