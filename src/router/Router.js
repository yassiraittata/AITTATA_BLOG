import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PageTitle from "../components/layouts/PageTitle";
import About from "../pages/About";
import BlogPage from "../pages/BlogPage";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/blogs" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="/blogs/:blogId" element={<BlogPage />} />
      </Routes>
    </>
  );
};

export default Router;
