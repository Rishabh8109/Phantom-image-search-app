import React, { useState } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { useHistory , Link} from "react-router-dom";
import logo from "../assets/image/logo.png";

function Header() {
  const [slug, setslug] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    setslug("");
    // search image by topics
    history.push(`/photos/${slug}`);
  }

  return (
    <header>
      <div className="header-left">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <form onSubmit={handleSubmit}>
          <button type="button" className="bg-light">
            <FiSearch className="search-icon" />
          </button>
          <input
            type="text"
            className="search-input"
            placeholder="search for high resolution photos"
            value={slug}
            onChange={(e) => setslug(e.target.value)}
          />
        </form>
      </div>
      <div className="header-right">
        <Link to={"/collections"} className="text-dark">Collections</Link>
        <Link to="/signin" className="text-dark">Sign In</Link>
        <button>Sign Up</button>
      </div>
      <FiMenu className="menu-icon" />
    </header>
  );
}

export default Header;
