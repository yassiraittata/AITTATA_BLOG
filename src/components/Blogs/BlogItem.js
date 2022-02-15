import React from "react";
import { Link } from "react-router-dom";

import classes from "./BlogItem.module.css";

const BlogItem = (props) => {
  return (
    <div className={classes.blog_item}>
      <img src={props.image} />
      <div className={classes.creator}>
        <p>Created by:</p>
        <p>Yassir aitatata</p>
      </div>
      <h2 className={classes.headline}>{props.title}</h2>
      <h4 className={classes.post_text}>{props.text}</h4>
      <div className={classes.post_date}>
        <span>Posted on:</span>
        <span>{props.date}</span>
      </div>
      <Link to={`/blogs/${props.id}`} className={classes.btn}>
        Read the post
      </Link>
    </div>
  );
};

export default BlogItem;
