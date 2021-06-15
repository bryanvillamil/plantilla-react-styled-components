import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import ModalHeader from "../../molecules/ModalHeader";
import HomeTemplate from "../../templates/HomeTemplate";

const Home = () => {
  const dispatch = useDispatch();
  const [ openModalHeader, setOpenModalHeader ] = useState({
    open: false,
    bgBox: '#fff',
    type: '',
  });

  return (
    <>
      <Header openModalHeader={openModalHeader} setOpenModalHeader={setOpenModalHeader} />
      <HomeTemplate dispatch={dispatch} />
      <Footer />
      {openModalHeader.open && (
        <ModalHeader setOpenModalHeader={setOpenModalHeader} openModalHeader={openModalHeader} />
      )}
    </>
  );
};

export default Home;
