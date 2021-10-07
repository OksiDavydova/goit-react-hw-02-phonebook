import React from "react";
export function Filter({ value, onChange }) {
  return (
    <label>
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
}
