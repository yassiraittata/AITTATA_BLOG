import React from "react";

import classes from "./BlogItem.module.css";

const BlogItem = () => {
  return (
    <div className={classes.blog_item}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Niagara_Falls_Sunset_%28cropped%29.jpg" />
      <div className={classes.creator}>
        <p>Created by:</p>
        <p>Yassir aitatata</p>
      </div>
      <h2 className={classes.headline}>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour lorem en imprimerie, une suite de mots
        sans signification utilisée à titre provisoire pour calibrer une mise en
        page, le texte
      </h2>
      <h4 className={classes.post_text}>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </h4>
      <div className={classes.post_date}>
        <span>Posted on:</span>
        <span>22-2-2021</span>
      </div>
      <button className={classes.btn}>Read the post</button>
    </div>
  );
};

export default BlogItem;
