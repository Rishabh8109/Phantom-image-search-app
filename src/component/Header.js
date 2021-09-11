import logo from "../assets/image/logo.png";
import { FiSearch, FiMenu } from "react-icons/fi";

function header() {
  return (
    <header>
      <div className="header-left">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <button type="button">
          <FiSearch className="search-icon" />
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="search for high resolution photos"
        />
      </div>
      <div className="header-right">
        <a href="/signin">Sign In</a>
        <button>Sign Up</button>
      </div>
      <FiMenu className="menu-icon" />
    </header>
  );
}

export default header;
