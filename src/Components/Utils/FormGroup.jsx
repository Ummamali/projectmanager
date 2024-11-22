import React from "react";

export default function FormGroup({ id, label, ...others }) {
  return (
    <div className="">
      <label htmlFor={id} className="block mb-1">
        {label}
      </label>
      <input
        id={id}
        name={id}
        {...others}
        className="w-full border border-gray-400 rounded py-2 px-3"
      />
    </div>
  );
}
