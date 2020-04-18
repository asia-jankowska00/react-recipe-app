import React from "react";

const DropdownItem = (props) => {
  const updateSelected = () => {
    props.selected.includes(props.parameter) ? deleteSelected() : addSelected();
    props.dropdownLabel.includes(props.title)
      ? props.setDropdownLabel([
          ...props.dropdownLabel.filter((item) => item !== props.title),
        ])
      : props.setDropdownLabel([...props.dropdownLabel, props.title]);
    // props.setDropdownLabel(`${props.dropdownLabel} ${props.title}`);
  };

  const addSelected = () => {
    props.setSelected([...props.selected, props.parameter]);
  };

  const deleteSelected = () => {
    props.setSelected([
      ...props.selected.filter((item) => item !== props.parameter),
    ]);
  };

  return (
    <li
      key={props.parameter}
      onClick={updateSelected}
      parameter={props.parameter}
      className="cursor-pointer hover:bg-gray-200 px-4 py-2"
    >
      <input
        type="checkbox"
        checked={props.selected.includes(props.parameter) ? true : false}
      />
      <p className="inline ml-2">{props.title}</p>
    </li>
  );
};

export default DropdownItem;
