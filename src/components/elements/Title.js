import React from "react";

function Title({ color, children }) {
  return (
    <h1 className={`${color} py-2 mb-3 font-medium border-b-2 border-zinc-300`}>
      {children}
    </h1>
  );
}

export default Title;
