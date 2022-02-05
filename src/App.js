import React from "react";
import ListItems from "./components/Blogs/ListItems";
import Layout from "./components/layouts/Layout";
import MainHeader from "./components/layouts/MainHeader";

function App() {
  return (
    <Layout>
      <MainHeader />
      <ListItems />
    </Layout>
  );
}

export default App;
