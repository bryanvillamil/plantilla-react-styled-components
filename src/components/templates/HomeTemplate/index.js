import React from 'react'
import withViewportHandler from '../../atoms/WithViewportHandler';
import ProductHome from '../../molecules/ProductHome'
import DetailProductHome from '../../organisms/DetailProductHome'
import Discover from '../../organisms/Discover'
import Contact from '../../organisms/Contact'


import llegamosImg from '../../../assets/HOME/frase-etapa@2x.png';
import producto1 from '../../../assets/HOME/acuarela-pureskin@2x.png';
import producto2 from '../../../assets/HOME/acuarela-aloevera@2x.png';
import producto3 from '../../../assets/HOME/acuarela-acolchamax@2x.png';

//product Skin
import bgSkin from '../../../assets/HOME/img-pureskin@2x.png';
import titleSkin from '../../../assets/HOME/pureskin.svg';
import productSkin from '../../../assets/HOME/empaque-pureskin@2x.png';
import contentSombra from '../../../assets/HOME/manchon-pureskin@2x.png';
import selloAgua from '../../../assets/HOME/Sellos/99_agua.svg';
import selloAlgodon from '../../../assets/HOME/Sellos/algodon.svg';
import selloFree from '../../../assets/HOME/Sellos/libre-plastico.svg';
import selloAlcohol from '../../../assets/HOME/Sellos/alcohol-parabenos.svg';

//product Aleo
import bgAloe from '../../../assets/HOME/acuarela-aloe@2x.png';
import titleAloe from '../../../assets/HOME/alore-vera.svg';
import productAloe from '../../../assets/HOME/empaque-aloe@2x.png';
import contentSombraAloe from '../../../assets/HOME/manchon-aloe@2x.png';
import selloHumecta from '../../../assets/HOME/Sellos/humecta-piel.svg';
import selloSuper from '../../../assets/HOME/Sellos/super-acolchada.svg';

//product Acolchamax
import bgAcolchamax from '../../../assets/HOME/acuarela-acolchamax.png';
import titleAcolchamax from '../../../assets/HOME/acolchamax.svg';
import productAcolchamax from '../../../assets/HOME/empaque-acolchamax@2x.png';
import contentSombraAcolchamax from '../../../assets/HOME/manchon-acolchamax@2x.png';
import selloHidrata from '../../../assets/HOME/Sellos/almendra.svg';
import selloExtra from '../../../assets/HOME/Sellos/extra-acolchada.svg';

import { 
  Home,
  BannerHome,
  BannerContent,
  BannerContentDiscover,
  WrapperProductsHome,
  ContentDetail,
  BtnSeeMore
} from './styledComponents';

const HomeTemplate = (props) => {

  const dataProductSkin = {
    imgPpal: bgSkin, 
    imgTitle: titleSkin, 
    title: 'Pure Skin', 
    imgProduct: productSkin, 
    sombraBg: contentSombra,
    description: 'Toallitas húmedas Pequeñín Pure Skin te ofrecen un Cuidado puro para tu bebé, porque gracias a su fórmula 99% agua y sin fragancia, es lo más parecido a limpiar con agua y algodón y no altera el pH de la piel, ¡ideales para usar desde el primer día!',
    numberItems: 4,
    dataSlider: [
      {
        id: 1,
        image: selloAgua,
      },
      {
        id: 2,
        image: selloAlgodon,
      },
      {
        id: 3,
        image: selloFree,
      },
      {
        id: 4,
        image: selloAlcohol,
      },
      {
        id: 5,
        image: selloFree,
      }
    ],
    LinkSeeMore: () => <BtnSeeMore href="#">Ver más</BtnSeeMore>,
  }

  const dataProductAleo = {
    imgPpal: bgAloe, 
    imgTitle: titleAloe, 
    title: 'Aloe Natural', 
    imgProduct: productAloe, 
    sombraBg: contentSombraAloe,
    description: 'Toallitas húmedas Pequeñín Aloe te ofrecen un cuidado refrescante para tu bebé, porque gracias a su fórmula con aloe natural, ayudan a humectar y cuidar la piel.',
    numberItems: 3,
    dataSlider: [
      {
        id: 1,
        image: selloHumecta,
      },
      {
        id: 2,
        image: selloSuper,
      },
      {
        id: 3,
        image: selloAlcohol,
      },
    ],
    LinkSeeMore: () => <BtnSeeMore href="#">Ver más</BtnSeeMore>,
  }

  const dataProductAcolchamax = {
    imgPpal: bgAcolchamax, 
    imgTitle: titleAcolchamax, 
    title: 'Acolchamax', 
    imgProduct: productAcolchamax, 
    sombraBg: contentSombraAcolchamax,
    description: 'Toallitas húmedas Pequeñín Acolchamax te ofrecen Cuidado Superior para tu bebé, gracias a su formula con extracto de almendra ayuda a hidratar y proteger su piel.',
    numberItems: 4,
    dataSlider: [
      {
        id: 1,
        image: selloHidrata,
      },
      {
        id: 2,
        image: selloExtra,
      },
      {
        id: 3,
        image: selloFree,
      },
      {
        id: 4,
        image: selloAlcohol,
      },
      {
        id: 5,
        image: selloFree,
      }
    ],
    LinkSeeMore: () => <BtnSeeMore href="#">Ver más</BtnSeeMore>,
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
          <ProductHome image={producto1} />
          <ProductHome image={producto2} />
          <ProductHome image={producto3} />
        </div>
      </WrapperProductsHome>

      <ContentDetail>
        <DetailProductHome dataProduct={dataProductSkin} />
      </ContentDetail>

      <ContentDetail>
        <DetailProductHome dataProduct={dataProductAleo} />
      </ContentDetail>

      <ContentDetail>
        <DetailProductHome dataProduct={dataProductAcolchamax} />
      </ContentDetail>

      <Discover />

      <Contact />
    </Home>
  )
}

export default withViewportHandler(HomeTemplate);