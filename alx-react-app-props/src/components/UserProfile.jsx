import { useState, createContext, useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const profile = useContext(UserContext)
  return (
    <div>
      <h2>{profile.name}</h2>
      <p>Age: {profile.age}</p>
      <p>Bio: {profile.bio}</p>
    </div>
  );
};

export default UserProfile;