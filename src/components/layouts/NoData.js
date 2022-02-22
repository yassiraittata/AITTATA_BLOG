import React from "react";

import classes from "./NoData.module.css";

const NoData = () => {
  return (
    <h1 className={classes.noData}>Sorry! There is no blog with this title</h1>
  );
};

export default NoData;
