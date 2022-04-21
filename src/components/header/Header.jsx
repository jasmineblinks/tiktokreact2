import React from "react";
import tiktoklogo from "../../images/tiktoklogo.png";
import dots from "../../images/menu-dots.svg";
import search from "../../images/search.svg";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="nav-bar">
      <img src={tiktoklogo} className="app-logos" alt="logo" />
      <form className="form__banner">
        <input
          className="search__input"
          type="text"
          placeholder="Search accounts and videos"
          name="search"
        />
        <button className="search__submit" type="submit">
          <img src={search} alt="logo" />
        </button>
      </form>
      <ul className="nav-links">
        <li>Upload</li>

        <Link to="/profile" style={{ textDecoration: "none" }}>
          <li className="btn">Log in</li>
        </Link>
        <li>
          <img src={dots} alt="logo" />
        </li>
      </ul>
    </div>
  );
}

export default Header;
