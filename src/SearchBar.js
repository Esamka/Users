import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by username..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-bar"
      aria-label="Search by username"
    />
  );
}

export default SearchBar;
