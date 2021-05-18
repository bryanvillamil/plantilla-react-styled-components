import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

import withViewportHandler from '../../atoms/WithViewportHandler';
import ProductHome from '../../molecules/ProductHome'
import DetailProductHome from '../../organisms/DetailProductHome'
import Discover from '../../organisms/Discover'
import Contact from '../../organisms/Contact'

import { dataProducts } from '../../../data/products'


import llegamosImg from '../../../assets/HOME/frase-etapa@2x.png';
import producto1 from '../../../assets/HOME/acuarela-pureskin@2x.png';
import producto2 from '../../../assets/HOME/acuarela-aloevera@2x.png';
import producto3 from '../../../assets/HOME/acuarela-acolchamax@2x.png';

import { 
  Home,
  BannerHome,
  BannerContent,
  BannerContentDiscover,
  WrapperProductsHome,
  ContentDetail,
} from './styledComponents';

const HomeTemplate = (props) => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  const onClickSendData = (nameProduct) => {
    localStorage.setItem('nameProduct', nameProduct)
  }

  return (
    <Home>
      <BannerHome>
        <BannerContent>
          <img className="llegamosAPeru" src={llegamosImg} alt="llegamos a peru" />
          <BannerContentDiscover>
            <p>Descubre todas nuestras toallitas húmedas</p>
          </BannerContentDiscover>
        </BannerContent>
      </BannerHome>

      <WrapperProductsHome>
        <div className="containerProducts">
          <Link onClick={() => onClickSendData('dataProductSkin')} to="/producto/pure-skin">
            <ProductHome image={producto1} />
          </Link>
          <Link  onClick={() => onClickSendData('dataProductAcolchamax')} to="/producto/acolchamax">
            <ProductHome image={producto3} />
          </Link>
          <Link onClick={() => onClickSendData('dataProductAleo')} to="/producto/aloe-natural">
            <ProductHome image={producto2} />
          </Link>
        </div>
      </WrapperProductsHome>

      <ContentDetail>
        <DetailProductHome dataProduct={dataProducts[0]} />
      </ContentDetail>


      <ContentDetail>
        <DetailProductHome dataProduct={dataProducts[2]} />
      </ContentDetail>

      <ContentDetail>
        <DetailProductHome dataProduct={dataProducts[1]} />
      </ContentDetail>
      <Discover />

      <Contact />
    </Home>
  )
}

export default withViewportHandler(HomeTemplate);