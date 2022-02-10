import React from "react";
import BlogItem from "./BlogItem";

import classes from "./ListItems.module.css";

const ListItems = () => {
  return (
    <>
      <ul className={classes.categories}>
        <li>
          <a className={`${classes.link} ${classes.active}`} href="#">
            Sport
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            Teck
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            Health
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            Fashion
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            Other
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            Other
          </a>
        </li>
      </ul>
      <div className={classes.list_items}>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </>
  );
};

export default ListItems;
