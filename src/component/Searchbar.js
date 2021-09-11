import React from "react";
import { FiSearch } from "react-icons/fi";

function Searchbar() {
  return (
    <>
      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="search for high resolution photos"
        />
      </div>
    </>
  );
}

export default Searchbar;
