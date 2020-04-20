import React, { useContext } from "react";
import { SearchQueryContext } from "../contexts/SearchQueryContext";

const DropdownItem = (props) => {
  const { selectedProperties, setSelectedProperties } = useContext(
    SearchQueryContext
  );
  const updateSelected = () => {
    selectedProperties.includes(props.option)
      ? deleteSelected()
      : addSelected();
    props.dropdownLabel.includes(props.option.title)
      ? props.setDropdownLabel([
          ...props.dropdownLabel.filter((item) => item !== props.option.title),
        ])
      : props.setDropdownLabel([...props.dropdownLabel, props.option.title]);
    // props.setDropdownLabel(`${props.dropdownLabel} ${props.title}`);
  };

  const addSelected = () => {
    setSelectedProperties([...selectedProperties, props.option]);
  };

  const deleteSelected = () => {
    setSelectedProperties([
      ...selectedProperties.filter((item) => item !== props.option),
    ]);
  };

  return (
    <li
      onClick={updateSelected}
      parameter={props.option.parameter}
      className="cursor-pointer hover:bg-gray-200 px-4 py-2"
    >
      <input
        type="checkbox"
        onChange={updateSelected}
        checked={selectedProperties.includes(props.option) ? true : false}
      />
      <p className="inline ml-2">{props.option.title}</p>
    </li>
  );
};

export default DropdownItem;
