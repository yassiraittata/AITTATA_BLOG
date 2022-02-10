import React from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <h1 className={classes.headline}>Blog Post</h1>
      <div className={classes.footer__description}>
        <div className={classes.copyright}>
          <h2 className={classes.copyright__tag}>
            &copy; 2022, YASSIR AITTATA
          </h2>
          <p className={classes.copyright__text}>
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée. Généralement, on
            utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
          </p>
        </div>
        <nav className={classes.links}>
          <li className={classes.link__item}>
            <Link to="/about">About us</Link>
          </li>
          <li className={classes.link__item}>
            <Link to="/contact">Contact us</Link>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
