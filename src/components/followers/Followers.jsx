import React from "react";
import videot from "../../images/videot.svg";
import MicroCard from "../microcard/MicroCard";
import "./followers.css";

function Followers() {
  return (
    <div className="followers-banner">
      <div className="followers-section">
        <div className="home" />
        <h4 className="bold-content">For You</h4>
      </div>
      <div className="followers-section">
        <div className="following" />
        <h4>Following</h4>
      </div>
      <div className="followers-section">
        <div className="live">
          <img src={videot} alt="logo" />
        </div>
        <h4>Live</h4>
      </div>
      <div className="line"></div>
      <h5 className="suggest-account">Suggested accounts</h5>
      <MicroCard />
      <div className="line"></div>
      <div className="followers-accounts">
        <h3>Following accounts</h3>
        <h4>Accounts you follow will appear here</h4>
      </div>
    </div>
  );
}

export default Followers;
