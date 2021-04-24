import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import avatar from "../../images/avatar.png";
import { useHistory } from "react-router";

export const Navbar = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src={logo}
          alt="logo"
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src={avatar}
          alt="avatar"
        />
      </div>
    </div>
  );
};
