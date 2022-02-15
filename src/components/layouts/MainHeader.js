import React, { useState } from "react";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";

import classes from "./MainHeader.module.css";
import MobileHeaderMenu from "./MobileHeaderMenu";
import PageTitle from "./PageTitle";

const MainHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className={classes.mobile_header}>
        <Link to="/">
          <h1 className={classes.logo}>AITTATA Blog</h1>
        </Link>
        <button onClick={() => setShowMobileMenu((prev) => !prev)}>
          <ion-icon name="menu"></ion-icon>
        </button>
      </div>

      {showMobileMenu && <MobileHeaderMenu />}

      <div className={classes.header_container}>
        <header className={classes.header}>
          <Link to="/">
            <h1 className={classes.logo}>AITTATA Blog</h1>
          </Link>
          <form className={classes.search}>
            <input type="text" placeholder="Search" />
          </form>
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
        </header>

        <Routes>
          <Route path="/blogs" element={<PageTitle />} />
        </Routes>
      </div>
    </>
  );
};

export default MainHeader;
