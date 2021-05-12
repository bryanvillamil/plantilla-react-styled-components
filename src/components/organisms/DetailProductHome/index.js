import React from 'react'
import WithViewportHandler from '../../atoms/WithViewportHandler'
import Slider from '../../molecules/Slider'
import { useDispatch } from 'react-redux'

import { 
  ContentProduct,
  ProductTop,
  ProductLeft,
  ProductRight,
  ProductSlide,
  ItemProduct,
  ContentSeeMore
} from './styledComponents'

const DetailProductHome = (props) => {
  const { dataProduct, viewport } = props;
  const dispatch = useDispatch();
  const { 
    imgPpal, 
    imgTitle, 
    title, 
    sombraBg,
    imgProduct, 
    Description,
    numberItems,
    dataSlider,
    LinkSeeMore,
  } = dataProduct;

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: dataSlider.length,
  //   slidesToScroll: dataSlider.length
  // };

  return (
    <ContentProduct>
      <ProductTop sombraBg={sombraBg}>
        <ProductLeft>
          <img src={imgPpal} alt="product" />
        </ProductLeft>

        <ProductRight>
          <div className="content--title">
            <h2>
              {title}
              <img src={imgTitle} alt={title} />
            </h2>
          </div>

          <div className="content--product">
            <img src={imgProduct} alt="img product" />
          </div>

          <div className="content--desc">
            <Description />
          </div>
        </ProductRight>
      </ProductTop>

      <ProductSlide>
        <Slider viewport={viewport} slidesToShow={numberItems}>
          {dataSlider.map(item => {
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

        <ContentSeeMore>
          <LinkSeeMore dispatch={dispatch} />
        </ContentSeeMore>
      </ProductSlide>
    </ContentProduct>
  )
};

export default WithViewportHandler(DetailProductHome);