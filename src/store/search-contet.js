import React, { createContext, useState } from "react";
import { useQuery } from "react-query";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase-config";

export const searchContext = createContext({
  searchValue: "",
  setSearchValue: () => "",
  blogsFiltered: [],
  isLoading: false,
});

const SearchProvider = (props) => {
  const [searchValue, setSearchValue] = useState();

  const blogsCollection = collection(db, "Blogs");

  // console.log(blogsCollection);

  const { isLoading, data } = useQuery(["blog", searchValue], async () => {
    const blogs = await getDocs(blogsCollection);
    console.log(searchValue);
    const blogdArray = blogs.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const filteredArray = blogdArray.filter((blog) =>
      blog.title.includes(searchValue)
    );

    return filteredArray;
  });

  console.log("the data is here:", data);

  const contextValue = {
    searchValue,
    setSearchValue,
    blogsFiltered: data || [],
    isLoading,
  };

  return (
    <searchContext.Provider value={contextValue}>
      {props.children}
    </searchContext.Provider>
  );
};

export default SearchProvider;
