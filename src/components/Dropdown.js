import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import DropdownItem from "./DropdownItem";

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [dietaryOptions, setDietaryOptions] = useState([
    {
      parameter: "gluten-free",
      title: "Gluten-free",
      type: "health",
    },
    {
      parameter: "keto-friendly",
      title: "Keto-friendly",
      type: "health",
    },
    {
      parameter: "paleo",
      title: "Paleo",
      type: "health",
    },
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
    {
      parameter: "low-sodium",
      title: "Low-sodium",
      type: "diet",
    },
    {
      parameter: "low-sugar",
      title: "Low-sugar",
      type: "health",
    },
  ]);

  const [selected, setSelected] = useState([]);
  const [dropdownLabel, setDropdownLabel] = useState([]);

  //   const updateSelected = () => {
  //     selected.includes(props.parameter) ? deleteSelected() : addSelected();
  //   };

  //   const addSelected = () => {
  //     setSelected([...selected, props.parameter]);
  //   };

  //   const deleteSelected = () => {
  //     setSelected([...selected.filter((item) => item !== props.parameter)]);
  //   };

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
      console.log("inside");
      // inside click
      return;
    }
    // outside click
    console.log("outside");
    setOpen(false);
  };

  const handleDropdown = () => {
    setOpen(!isOpen);
  };

  //   const handleSelectionText = () => {
  //     // let text = "";
  //     // if (selected.length === 0) {
  //     //   text = "Diet preferences";
  //     // } else {
  //     let text = "";
  //     selected.forEach((item) => {
  //       text += item;
  //       console.log(text);
  //     });
  //     // }

  //     //   ? ()
  //     //   :
  //   };

  return (
    <div ref={node} className="relative w-3/12">
      <div
        onClick={handleDropdown}
        className="flex justify-between align-center bg-white border border-gray-400 shadow-inner px-4 py-2"
      >
        <p className="inline-block self-center">
          {selected.length === 0
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
            ? "block w-full bg-white border border-gray-400 shadow-inner"
            : "hidden w-full bg-white border border-gray-400 shadow-inner"
        }
      >
        {dietaryOptions.map((option) => {
          //   const handleCheckbox = () => {
          //     option.selected = !option.selected;
          //   };
          return (
            <DropdownItem
              //   updateSelected={updateSelected}
              dropdownLabel={dropdownLabel}
              setDropdownLabel={setDropdownLabel}
              selected={selected}
              setSelected={setSelected}
              parameter={option.parameter}
              title={option.title}
              type={option.type}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
