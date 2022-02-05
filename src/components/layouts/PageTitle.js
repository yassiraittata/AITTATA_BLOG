import React from "react";

import classes from "./PageTitle.module.css";

const PageTitle = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.head_title}>Let's explore the world!</h1>
      <h3 className={classes.second_title}>
        Read blogs about anything you want! Sport, Cinima, Education...{" "}
      </h3>
    </div>
  );
};

export default PageTitle;
