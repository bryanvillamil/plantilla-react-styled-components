import React from 'react'
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

const DetailProductHome = ({ dataProduct }) => {
  const dispatch = useDispatch();
  const { 
    imgPpal, 
    imgTitle, 
    title, 
    sombraBg,
    imgProduct, 
    description,
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

  const onClickProduct = () => {

  }

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
            <p>{description}</p>
          </div>
        </ProductRight>
      </ProductTop>

      <ProductSlide>
        <Slider slidesToShow={numberItems}>
          {dataSlider.map(item => {
            return (
              <div key={item.id}>
                <ItemProduct>
                  <img src={item.image} className="imgCenter" alt="img slide " />
                  {/* <div className="bg" style={{ background: `url(${item.image})`}}> */}
                  {/* </div> */}
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
          <LinkSeeMore dispatch={dispatch} onClick={onClickProduct} />
        </ContentSeeMore>
      </ProductSlide>
    </ContentProduct>
  )
};

export default DetailProductHome;