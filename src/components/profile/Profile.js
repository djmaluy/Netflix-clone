import React from "react";
import { Navbar } from "../navbar/Navbar";
import "./Profile.css";
import avatar from "../../images/avatar.png";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/userSelector";
import { auth } from "../../firebase";

export const Profile = () => {
  const user = useSelector(getUser);
  return (
    <div className="profile">
      <Navbar />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img src={avatar} alt="avatar" />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <h3>Plans</h3>
              <p></p>
              <button
                onClick={() => auth.signOut()}
                className="profile__signOut"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
