import React, { useState } from "react";

const DropDown = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const dropDownHandler = () => {
    setToggle(!toggle);
    console.log("Toggled");
  };

  return (
    <div className="flex flex-col bg-white px-8 py-3 rounded-3xl shadow-2xl">
      <div
        className="flex flex-row gap-10 justify-between cursor-pointer"
        onClick={dropDownHandler}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-auto text-red-255 xs:text-black"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {toggle ? (
        <ul>
          <li>Something</li>
        </ul>
      ) : null}
    </div>
  );
};

export default DropDown;
