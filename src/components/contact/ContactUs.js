import React, { useLayoutEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import classes from "./ContactUs.module.css";

const ContactUs = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Must not be empty"),
      email: Yup.string()
        .required("Must not be empty")
        .email("Please Enter a valid email!"),
      message: Yup.string().required("Must not be empty"),
    }),
    onSubmit(values) {
      console.log(values);
    },
  });

  console.log(formik.touched);
  console.log(formik.errors);

  const nameClasse =
    formik.touched.name && formik.errors.name && classes.invalid;

  const emailClasse =
    formik.touched.email && formik.errors.email && classes.invalid;

  const messageClasse =
    formik.touched.message && formik.errors.message && classes.invalid;

  return (
    <div className={classes.container}>
      <h1 className={classes.headline}>Say HELLO!</h1>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <div className={classes.control}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            className={nameClasse}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <p className={classes.error_message}>{formik.errors.name}</p>
          )}
        </div>
        <div className={classes.control}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            className={emailClasse}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <p className={classes.error_message}>{formik.errors.email}</p>
          )}
        </div>
        <div className={classes.control}>
          <label>Message</label>
          <textarea
            name="message"
            className={messageClasse}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.errors.message && formik.touched.message && (
            <p className={classes.error_message}>{formik.errors.message}</p>
          )}
        </div>
        <button type="submit" className={classes.button}>
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
