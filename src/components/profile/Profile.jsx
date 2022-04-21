import React from "react";
import Followers from "../followers/Followers";
import Home from "../home/Home";
import ProfileHeader from "./../profileheader/ProfileHeader";

function Profile() {
  return (
    <div>
      <ProfileHeader />
      <Followers />
    </div>
  );
}

export default Profile;
