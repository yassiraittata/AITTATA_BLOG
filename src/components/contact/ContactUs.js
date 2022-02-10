import React, { useLayoutEffect } from "react";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={classes.container}>
      <h1 className={classes.headline}>Say HELLO!</h1>
      <form className={classes.form}>
        <div className={classes.control}>
          <label>Your Name</label>
          <input type="text" />
        </div>
        <div className={classes.control}>
          <label>Email</label>
          <input type="email" />
        </div>
        <div className={classes.control}>
          <label>Message</label>
          <textarea></textarea>
        </div>
        <button className={classes.button}>Send message</button>
      </form>
    </div>
  );
};

export default ContactUs;
