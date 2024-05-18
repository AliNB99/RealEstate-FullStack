import React from "react";

function RadioButton({ value, form, setForm, name, children }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <div className="bg-blue-50 flex gap-3 py-2 px-4 rounded-md">
      <label htmlFor={value} className="text-blue-700 font-medium">
        {children}
      </label>
      <input
        id={value}
        name={name}
        type="radio"
        value={value}
        onChange={changeHandler}
        checked={form[name] === value}
      />
    </div>
  );
}

export default RadioButton;
