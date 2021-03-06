import React, { useLayoutEffect } from "react";
import AboutUs from "./components/about/AboutUs";
import Blog from "./components/blogItem/Blog";
import ListItems from "./components/Blogs/ListItems";
import ContactUs from "./components/contact/ContactUs";
import Footer from "./components/layouts/Footer";
import Layout from "./components/layouts/Layout";
import MainHeader from "./components/layouts/MainHeader";
import Router from "./router/Router";

function App() {
  
  return (
    <Layout>
      <MainHeader />
      {/* <ListItems /> */}
      {/* <ContactUs /> */}
      {/* <AboutUs /> */}
      {/* <Blog /> */}
      <Router />
      <Footer />
    </Layout>
  );
}

export default App;
