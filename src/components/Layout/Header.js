import React from "react";
import headerImg from "../../assets/images/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../../assets/images/logo_white.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes["header-container"]}>
          <NavLink to="/">
            <img src={logo} className={classes.logo} />
          </NavLink>
          <NavLink to="/cart">
            <HeaderCartButton />
          </NavLink>
        </div>
      </header>
      <div className={classes.hero}>
        <div className={classes.overText}>aaaaaaaaaaaaaa</div>
        <img src={headerImg} alt="food" />
      </div>
    </>
  );
};

export default Header;
