import { useState } from "react";
import "./index.css";

const ITEMS = ["Yes", "Probably not"];

const Dropdown = () => {
    const [selectOption, setSelectOption] = useState("Select");
  const [isOpen, setIsOpen] = useState(false);

  const openHandle = () => {
    setIsOpen(true);
  };

  const itemSelectHandle = (item) => {
    setIsOpen(false);
    setSelectOption(item);
  };

  return (
    <div className="dropdown-container">
      <div className="select-container" onMouseEnter={openHandle}>
        <div>{selectOption}</div>
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
