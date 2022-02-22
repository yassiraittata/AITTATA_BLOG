import React, { useState, useContext } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

import classes from "./MainHeader.module.css";
import MobileHeaderMenu from "./MobileHeaderMenu";
import PageTitle from "./PageTitle";
import { searchContext } from "../../store/search-contet";

const MainHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const searchCtx = useContext(searchContext);

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
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => searchCtx.setSearchValue(e.target.value)}
            />
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
          {!searchCtx.searchValue && (
            <Route path="/blogs" element={<PageTitle />} />
          )}
        </Routes>
      </div>
    </>
  );
};

export default MainHeader;
