
import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by username..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-bar"
      aria-label="Search by username"
    />
  );
}

export default SearchBar;