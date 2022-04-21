import React from "react";
import tiktoklogo from "../../images/tiktoklogo.png";
import search from "../../images/search.svg";
import { Link } from "react-router-dom";
import profile from "../../images/profile.jpg";
import letter from "../../images/letter.svg";
import message from "../../images/message.svg";
import "./profileheader.css";

function ProfileHeader() {
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
        <Link to="/upload">
          <li className="upload"> </li>
        </Link>

        <li>
          {" "}
          <img src={message} alt="logo" />
        </li>
        <li>
          <img src={letter} alt="logo" />
        </li>
        <li>
          <img className="profile" src={profile} alt="logo" />
        </li>
      </ul>
    </div>
  );
}

export default ProfileHeader;
