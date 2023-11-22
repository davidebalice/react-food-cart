import React from "react";
import headerImg from "../../assets/images/food.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../../assets/images/logo_white.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes["header-container"]}>
          <div className={classes.logoContainer}>
            <NavLink to="/">
              <img src={logo} className={classes.logo} alt="logo db" />
            </NavLink>
            <NavLink to="/" className={classes.menu}>Home</NavLink>
          </div>
          <NavLink to="/cart">
            <HeaderCartButton />
          </NavLink>
        </div>
      </header>
      <div className={classes.hero}>
        <div className={classes.overText}>
          
          Example of implemetation of a food cart developed in React

        </div>
        <img src={headerImg} alt="food" />
      </div>
    </>
  );
};

export default Header;
