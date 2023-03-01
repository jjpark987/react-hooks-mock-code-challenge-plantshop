import React from "react";

function Search({ searchInput, onSetSearchInput }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchInput}
        onChange={e => onSetSearchInput(e.target.value)}
      />
    </div>
  );
}

export default Search;
