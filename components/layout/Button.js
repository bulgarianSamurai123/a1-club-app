import React from "react";

const Button = ({ children }) => {
  return (
    <button className="mt-4 px-7 py-2.5 bg-white rounded-full text-center border border-red-255">
      {children}
    </button>
  );
};

export default Button;
