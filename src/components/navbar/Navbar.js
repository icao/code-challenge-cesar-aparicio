import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import pokeball from "../../assets/pokeball.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={pokeball} className="logo-icon" alt="logo pokebola" />
        <span className="logo-title">POKE APP</span>
      </div>
      <div className="navbar__menu">
        <NavLink
          to="/about"
          activeClassName="navbar__menu__link--active"
          className="navbar__menu__link"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
