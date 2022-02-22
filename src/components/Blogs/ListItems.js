import React, { useContext } from "react";
import { useQuery } from "react-query";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase-config";

import BlogItem from "./BlogItem";
import { searchContext } from "../../store/search-contet";

import classes from "./ListItems.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoData from "../layouts/NoData";

const ListItems = () => {
  const searchCtx = useContext(searchContext);
  const blogsCollection = collection(db, "Blogs");

  const searchValue = searchCtx.searchValue;

  console.log(searchCtx.blogsFiltered);

  const { isLoading, data } = useQuery("blogs", async () => {
    const blogs = await getDocs(blogsCollection);
    // console.log(blogs);
    return blogs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  });

  // console.log(data);

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

      {isLoading && <LoadingSpinner />}
      {/* {searchValue && searchCtx.isLoading && <LoadingSpinner />} */}

      {
        searchValue && (
          <div className={classes.list_items}>
            {searchCtx.isLoading && <LoadingSpinner />}
            {!searchCtx.isLoading &&
              searchCtx.blogsFiltered.map((el) => (
                <BlogItem
                  key={el.id}
                  id={el.id}
                  title={el.title}
                  date={el.date}
                  image={el.image}
                  text={el.text}
                />
              ))}
            {searchCtx.blogsFiltered.length === 0 && !searchCtx.isLoading && (
              <NoData />
            )}
          </div>
        )
        // !searchCtx.isLoading &&
        // searchCtx.blogsFiltered.map((el) => {
        //   return (
        //     <BlogItem
        //       key={el.id}
        //       id={el.id}
        //       title={el.title}
        //       date={el.date}
        //       image={el.image}
        //       text={el.text}
        //     />
        //   );
        // })
      }
      {!isLoading && !searchValue && (
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
      )}
    </div>
  );
};

export default ListItems;
