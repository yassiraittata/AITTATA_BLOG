import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MobilHeaderMenu.module.css";

const MobileHeaderMenu = () => {
  return (
    <div className={classes.menu_cotainer}>
      <nav className={classes.nav}>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Contact us
          </NavLink>
        </li>
      </nav>

      <form className={classes.search_form}>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default MobileHeaderMenu;
