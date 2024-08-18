import { useState } from "react";
import "./index.css";

// Define a constant array containing the dropdown options
const ITEMS = ["Yes", "Probably not"];

/**
 * Dropdown Component
 * This component renders a dropdown menu with two options: "Yes" and "Probably not".
 * The dropdown opens when the user hovers over it and closes when an option is selected.
 */
const Dropdown = () => {
  // State to manage the selected option in the dropdown
  const [selectOption, setSelectOption] = useState("Select");

  // State to manage whether the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  /**
   * openHandle
   * This function opens the dropdown when the user hovers over it.
   */
  const openHandle = () => {
    setIsOpen(true);
  };

  /**
   * itemSelectHandle
   * @param {string} item - The item selected by the user from the dropdown.
   * This function closes the dropdown and sets the selected item as the current option.
   */
  const itemSelectHandle = (item) => {
    setIsOpen(false);
    setSelectOption(item);
  };

  return (
    <div className="dropdown-container">
      {/* Dropdown selector container. Opens dropdown on mouse enter. */}
      <div className="select-container" onMouseEnter={openHandle}>
        <div>{selectOption}</div>
        {/* Conditional rendering of the dropdown arrow icon */}
        {isOpen ? (
          <img
            src="https://cdn-icons-png.flaticon.com/128/32/32195.png"
            alt="down"
          />
        ) : (
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271239.png"
            alt="up"
          />
        )}
      </div>
      {/* Dropdown menu options list */}
      <ul>
        {isOpen &&
          ITEMS.map((item, index) => (
            <li key={index} onClick={() => itemSelectHandle(item)}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;
