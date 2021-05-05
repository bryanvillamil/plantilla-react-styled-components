import React, { useEffect } from 'react'
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
          <ProductHome image={producto1} />
          <ProductHome image={producto2} />
          <ProductHome image={producto3} />
        </div>
      </WrapperProductsHome>

      <ContentDetail>
        <DetailProductHome dataProduct={dataProducts[0]} />
      </ContentDetail>

      <ContentDetail>
        <DetailProductHome dataProduct={dataProducts[1]} />
      </ContentDetail>

      <ContentDetail>
        <DetailProductHome dataProduct={dataProducts[2]} />
      </ContentDetail>

      <Discover />

      <Contact />
    </Home>
  )
}

export default withViewportHandler(HomeTemplate);