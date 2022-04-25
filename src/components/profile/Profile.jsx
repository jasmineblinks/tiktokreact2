import React from "react";
import Card from "../card/Card";
import Followers from "../followers/Followers";

import ProfileHeader from "./../profileheader/ProfileHeader";

function Profile() {
  return (
    <div>
      <ProfileHeader />
      <Followers />
      <Card />
    </div>
  );
}

export default Profile;
