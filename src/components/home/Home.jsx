import React from "react";
import Followers from "../followers/Followers";
import Header from "./../header/Header";
import "./home.css";

function Home() {
  return (
    <div>
      <Header />
      <Followers />
    </div>
  );
}

export default Home;
