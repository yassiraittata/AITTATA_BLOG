import React from "react";
// import axios from axios;
import { useQuery } from "react-query";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase-config";

import BlogItem from "./BlogItem";

import classes from "./ListItems.module.css";

const ListItems = () => {
  const blogsCollection = collection(db, "Blogs");

  // console.log(blogsCollection);

  const { isLoading, data } = useQuery("blogs", async () => {
    const blogs = await getDocs(blogsCollection);
    // console.log(blogs);
    return blogs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  });

  console.log(data);

  return (
    <div className={classes.list_items_container}>
      {/* <ul className={classes.categories}>
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
      </ul> */}

      <div className={classes.list_items}>
        {isLoading && <h1>Loading...</h1>}
        {!isLoading &&
          data &&
          data.map((el) => (
            <BlogItem
              key={el.id}
              id={el.id}
              title={el.title}
              date={el.date}
              image={el.image}
              text={el.text}
            />
          ))}
      </div>
    </div>
  );
};

export default ListItems;
