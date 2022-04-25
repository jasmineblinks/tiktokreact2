import React from "react";
import Card from "../card/Card";
import Followers from "../followers/Followers";
import Header from "./../header/Header";
import "./home.css";

function Home() {
  return (
    <div className="home-banner">
      <Header />
      <Followers />
      <Card />
    </div>
  );
}

export default Home;
