import React from "react";
import { useDispatch } from "react-redux";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import HomeTemplate from "../../templates/HomeTemplate";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <HomeTemplate dispatch={dispatch} />
      <Footer />
    </>
  );
};

export default Home;
