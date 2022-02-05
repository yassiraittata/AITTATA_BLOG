import React from "react";

import classes from "./MainHeader.module.css";
import PageTitle from "./PageTitle";

const MainHeader = () => {
  return (
    <>
      <div className={classes.header_container}>
        <header className={classes.header}>
          <h1 className={classes.logo}>Blog</h1>
          <form className={classes.search}>
            <input type="text" placeholder="Search" />
          </form>
          <nav className={classes.nav}>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </nav>
        </header>
        <PageTitle />
      </div>
    </>
  );
};

export default MainHeader;
