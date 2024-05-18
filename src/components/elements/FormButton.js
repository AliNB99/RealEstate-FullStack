import React from "react";

function FormButton({ children, bgColor, color, type, event }) {
  return (
    <button
      onClick={event}
      type={type}
      className={`${bgColor} ${color} font-semibold p-3 rounded-md w-full`}
    >
      {children}
    </button>
  );
}

export default FormButton;
