import React, { useLayoutEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

import classes from "./Blog.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const Blog = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const blogsCollection = collection(db, "Blogs");

  const { blogId } = useParams();

  const { data, isLoading } = useQuery(["blog", blogId], async () => {
    const blogs = await getDocs(blogsCollection);
    const blogsList = blogs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const blogItem = blogsList.find((el) => el.id == blogId);
    // const blog = doc(db, "Blogs", blogId);
    // const blog = blogs.where("id", "==", blogId);
    // console.log(blog);
    // return blog;
    return blogItem;
  });

  console.log(data);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className={classes.blog}>
          <img src={data.image} className={classes.blog__image} />
          <div className={classes.blog__information}>
            <div className={classes.blog__date}>
              <p>Publishesd on: </p>
              <p>{data.date}</p>
            </div>
            <div className={classes.blog__publisher}>
              <p>By: </p>
              <p>Yassir AITTATA</p>
            </div>
          </div>

          <div className={classes.blog__description}>
            <h1 className={classes.blog__headline}>{data.title}</h1>
            <p className={classes.blog__text}>{data.text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
