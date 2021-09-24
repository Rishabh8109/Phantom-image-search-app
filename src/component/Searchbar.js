import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import {useHistory} from 'react-router-dom';

function Searchbar() {
  const [slug, setslug] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    history.push(`/photos/${slug}`)
    setslug("");
  }

  return (
    <React.Fragment>
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <FiSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="search for high resolution photos"
            value={slug}
            onChange={(e) => setslug(e.target.value)}
          />
        </form>
      </div>
    </React.Fragment>
  );
}
export default Searchbar;
