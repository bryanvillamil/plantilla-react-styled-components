import React, { useEffect, useState } from 'react'
import Slider from '../../molecules/Slider'
import withViewportHandler from '../../atoms/WithViewportHandler';
import Discover from '../../organisms/Discover'
import Contact from '../../organisms/Contact'
import { dataProducts } from '../../../data/products'

import {
  ProductDetail,
  ProductDetailTop,
  ProductDetailLeft,
  ProductDetailRight,
  ProductSlide,
  ItemProduct,
  ContentMoreProducts,
  TitleMoreProducts
} from './styledComponents';

const ProductDetailTemplate = () => {

  const [ dataProduct, setDataProduct] = useState({})

  useEffect(() => {
    window.scrollTo(0,0);
    const nameProduct = localStorage.getItem('nameProduct');
    const data = dataProducts.find(item => item.nameProduct == nameProduct)
    setDataProduct(data)
  }, [localStorage.getItem('nameProduct')])

  return (
    <ProductDetail>
      {dataProduct && dataProduct.contentDetail && (
        <>
          <ProductDetailTop>
            <ProductDetailLeft>
              <img src={dataProduct.contentDetail.title} alt="images title" />

              <dataProduct.contentDetail.DescriptionDetail />
            </ProductDetailLeft>

            <ProductDetailRight>
              <img src={dataProduct.contentDetail.imageDetail} alt="images product" />
            </ProductDetailRight>
          </ProductDetailTop>

          <ProductSlide>
            <Slider slidesToShow={dataProduct.numberItems}>
              {dataProduct.dataSlider.map(item => {
                return (
                  <div key={item.id}>
                    <ItemProduct>
                      <img src={item.image} className="imgCenter" alt="img slide " />
                      <div className="content--text">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </div>
                    </ItemProduct>
                  </div>
                )
              })}
            </Slider>
          </ProductSlide>


          <ContentMoreProducts>
            <TitleMoreProducts>Presentaciones del producto</TitleMoreProducts>

            <Slider slidesToShow={dataProduct.contentDetail.numberItems}>
              {dataProduct.contentDetail.moreProducts.map(item => {
                return (
                  <div className="content--more" key={item.id}>
                    <img src={item.image} className="imgCenter" alt="img slide " />
                    <div className="content--text">
                      <p>{item.text}</p>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </ContentMoreProducts>

        </>
      )}


      <Discover />
      <Contact />
    </ProductDetail>
  )
}

export default withViewportHandler(ProductDetailTemplate);
