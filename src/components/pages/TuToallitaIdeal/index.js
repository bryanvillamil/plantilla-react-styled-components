import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import ModalHeader from "../../molecules/ModalHeader";
import TuToallitaIdealTemplate from "../../templates/TuToallitaIdealTemplate";

const TuToallitaIdeal = () => {
  const dispatch = useDispatch();
  const [ openModalHeader, setOpenModalHeader ] = useState({
    open: false,
    bgBox: '#fff',
    type: '',
  });

  return (
    <>
      <Header openModalHeader={openModalHeader} setOpenModalHeader={setOpenModalHeader} />
      <TuToallitaIdealTemplate dispatch={dispatch} />
      <Footer />
      {openModalHeader.open && (
        <ModalHeader setOpenModalHeader={setOpenModalHeader} openModalHeader={openModalHeader} />
      )}
    </>
  );
};

export default TuToallitaIdeal;