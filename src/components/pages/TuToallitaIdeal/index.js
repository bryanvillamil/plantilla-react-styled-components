import React from "react";
import { useDispatch } from "react-redux";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import TuToallitaIdealTemplate from "../../templates/TuToallitaIdealTemplate";

const TuToallitaIdeal = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <TuToallitaIdealTemplate dispatch={dispatch} />
      <Footer />
    </>
  );
};

export default TuToallitaIdeal;