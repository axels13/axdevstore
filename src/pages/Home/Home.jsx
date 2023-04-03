import React from "react";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";

import "./home.css";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Contact />
    </>
  );
};

export default Home;
