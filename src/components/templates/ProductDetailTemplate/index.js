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

const ProductDetailTemplate = (props) => {

  const { viewport } = props;

  const [ dataProduct, setDataProduct] = useState({})

  useEffect(() => {
    window.scrollTo(0,0);
    const nameProduct = localStorage.getItem('nameProduct');
    const data = dataProducts.find(item => item.nameProduct == nameProduct)
    setDataProduct(data)
  }, [localStorage.getItem('nameProduct')])

  console.log('dataProduct', dataProduct)

  return (
    <ProductDetail>
      {dataProduct && dataProduct.contentDetail && (
        <>
          <ProductDetailTop mancha={dataProduct.contentDetail.mancha}>
            <ProductDetailLeft>
              <img src={dataProduct.contentDetail.title} alt="images title" />

              {viewport.isMobileView && (
                <div className="productMobile">
                  <img src={dataProduct.contentDetail.imageDetail} alt="images product" />
                </div>
              )}

              <dataProduct.contentDetail.DescriptionDetail />
            </ProductDetailLeft>

            {!viewport.isMobileView && (
              <ProductDetailRight>
                <img src={dataProduct.contentDetail.imageDetail} alt="images product" />
              </ProductDetailRight>
            )}
          </ProductDetailTop>

          <ProductSlide>
            <Slider viewport={viewport} slidesToShow={dataProduct.numberItems}>
              {dataProduct.dataSlider.map(item => {
                return (
                  <div key={item.id}>
                    <ItemProduct className={!item.description ? 'notAnimation' : ''}>
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

            <Slider viewport={viewport} slidesToShow={dataProduct.contentDetail.numberItems}>
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
