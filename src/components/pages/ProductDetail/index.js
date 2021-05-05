import React from "react";
import { useDispatch } from "react-redux";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import ProductDetailTemplate from "../../templates/ProductDetailTemplate";

const ProductDetail = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <ProductDetailTemplate dispatch={dispatch} />
      <Footer />
    </>
  );
};

export default ProductDetail;