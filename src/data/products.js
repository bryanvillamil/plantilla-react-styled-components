//product Skin
import bgSkin from '../assets/HOME/img-pureskin@2x.png';
import titleSkin from '../assets/HOME/pureskin.svg';
import productSkin from '../assets/HOME/empaque-pureskin@2x.png';
import contentSombra from '../assets/HOME/manchon-pureskin@2x.png';
import selloAgua from '../assets/HOME/Sellos/99_agua.svg';
import selloAlgodon from '../assets/HOME/Sellos/algodon.svg';
import selloFree from '../assets/HOME/Sellos/libre-plastico.svg';
import selloAlcohol from '../assets/HOME/Sellos/alcohol-parabenos.svg';
import titleDetailProductSkin from '../assets/PRODUCTOS/frase-etapa-PURE-SKIN.svg';
import imageDetailSkin from '../assets/PRODUCTOS/empaque-pure-skin@2x.png';
import moreProductSkin1 from '../assets/PRODUCTOS/pureskin-80@2x.png';
 

//product Aleo
import bgAloe from '../assets/HOME/acuarela-aloe@2x.png';
import titleAloe from '../assets/HOME/alore-vera.svg';
import productAloe from '../assets/HOME/empaque-aloe@2x.png';
import contentSombraAloe from '../assets/HOME/manchon-aloe@2x.png';
import selloHumecta from '../assets/HOME/Sellos/humecta-piel.svg';
import selloSuper from '../assets/HOME/Sellos/super-acolchada.svg';
import titleDetailProductAleo from '../assets/PRODUCTOS/frase-etapa-ALOE.svg';
import imageDetailAleo from '../assets/PRODUCTOS/empaque-aloe@2x.png';
import moreProductAleo1 from '../assets/PRODUCTOS/Aloe-100@2x.png';

//product Acolchamax
import bgAcolchamax from '../assets/HOME/acuarela-acolchamax.png';
import titleAcolchamax from '../assets/HOME/acolchamax.svg';
import productAcolchamax from '../assets/HOME/empaque-acolchamax@2x.png';
import contentSombraAcolchamax from '../assets/HOME/manchon-acolchamax@2x.png';
import selloHidrata from '../assets/HOME/Sellos/almendra.svg';
import selloExtra from '../assets/HOME/Sellos/extra-acolchada.svg';
import titleDetailProductAcol from '../assets/PRODUCTOS/frase-etapa-ACOLCHAMAX.svg';
import imageDetailAcol from '../assets/PRODUCTOS/empaque-acolchamax@2x.png';
import moreProductAcol1 from '../assets/PRODUCTOS/acolchamax-80@2x.png';

import { BtnSeeMore } from './styledComponents'

const onClickSendData = (nameProduct) => {
  localStorage.setItem('nameProduct', nameProduct)
}

export const dataProducts = [
  {
    id: 1,
    nameProduct: 'dataProductSkin',
    imgPpal: bgSkin, 
    imgTitle: titleSkin, 
    title: 'Pure Skin', 
    imgProduct: productSkin, 
    sombraBg: contentSombra,
    Description: () => <p>Toallitas Húmedas Pequeñín Pure Skin te ofrecen un <strong>Cuidado puro</strong> para tu bebé, porque gracias a su fórmula <strong>99% agua y sin fragancia,</strong> es lo más parecido a limpiar con agua y algodón y no altera el pH de la piel <strong>¡Ideales para usar desde el primer día!</strong></p>,
    numberItems: 2,
    dataSlider: [
      {
        id: 1,
        image: selloAgua,
        title: 'Cuidado Puro',
        description: 'Su fórmula hecha con 99% agua, no altera el pH natural y son libres de fragancia.',
      },
      {
        id: 2,
        image: selloFree,
        title: 'Tela libre de plástico',
        description: 'Ahora su tela es hecha con fibras de origen natural y biodegradables.',
      },
      // {
      //   id: 3,
      //   image: selloAlgodon,
      //   title: 'Cuidado Puro',
      //   description: 'Su fórmula hecha con 99% agua, no altera el pH natural y son libres de fragancia.',
      // },
      // {
      //   id: 4,
      //   image: selloAlcohol,
      //   title: 'Cuidado Puro',
      //   description: 'Su fórmula hecha con 99% agua, no altera el pH natural y son libres de fragancia.',
      // }
    ],
    LinkSeeMore: ({dispatch}) => <BtnSeeMore onClick={() => onClickSendData('dataProductSkin')} to='/producto/pure-skin'>Ver más</BtnSeeMore>,
    contentDetail: {
      title: titleDetailProductSkin,
      DescriptionDetail: () => <div className="description"><p>Ofrecen un Cuidado puro para los bebés, porque gracias a su fórmula <strong>99% agua y sin fragancia,</strong> son lo más parecido a limpiar con agua y algodón y no altera el pH de la piel. <strong>¡Ideales para usar desde el primer día!</strong></p> <p>Además ofrecen un cuidado para el planeta porque tienen una tela libre de plástico hechas con fibras de origen natural y biodegradables, conservando su suavidad y pureza.</p></div>,
      imageDetail: imageDetailSkin,
      numberItems: 3,
      moreProducts: [
        {
          id: 1,
          image: moreProductSkin1,
          text: 'Empaque con tapita x 80 toallitas'
        },
        {
          id: 2,
          image: moreProductSkin1,
          text: 'Empaque con tapita x 80 toallitas'
        },
        {
          id: 3,
          image: moreProductSkin1,
          text: 'Empaque con tapita x 80 toallitas'
        }
      ]
    }
  },
  {
    id: 2,
    nameProduct: 'dataProductAleo',
    imgPpal: bgAloe, 
    imgTitle: titleAloe, 
    title: 'Aloe Natural', 
    imgProduct: productAloe, 
    sombraBg: contentSombraAloe,
    Description: () => <p>Toallitas húmedas Pequeñín Aloe te ofrecen un <strong>cuidado refrescante</strong> para tu bebé, porque gracias a su fórmula con aloe natural, <strong>ayudan a humectar y cuidar la piel.</strong></p>,
    numberItems: 3,
    dataSlider: [
      {
        id: 1,
        image: selloHumecta,
        title: 'Humecta la piel',
        description: 'Te ofrecen un cuidado refrescante, porque gracias a su fórmula con aloe, ayudan a humectar y cuidar la piel de tu bebé.',
      },
      {
        id: 2,
        image: selloExtra,
        title: 'Súper acolchadas',
        description: 'Su tela super acolchada ofrece una limpieza avanzada.',
      },
      {
        id: 3,
        image: selloAlcohol,
        title: '0% Alcohol y parabenos*',
        description: 'Los parabenos son preservantes y algunos de ellos están prohibidos porque no se ha comprobado su seguridad.',
      },
    ],
    LinkSeeMore: ({dispatch}) => <BtnSeeMore onClick={() => onClickSendData('dataProductAleo')} to='/producto/aloe-natural'>Ver más</BtnSeeMore>,
    contentDetail: {
      title: titleDetailProductAleo,
      DescriptionDetail: () => <div className="description"><p>Ofrecen un <strong>cuidado refrescante</strong> para los bebés, porque gracias a su fórmula con <strong>aloe natural, ayudan a humectar y cuidar la piel.</strong></p> <p>Con ingredientes naturales y una tela súper acolchada que ofrecen una limpieza avanzada permitiendo usar menos toallitas por cambio de pañal.</p></div>,
      imageDetail: imageDetailAleo,
      numberItems: 3,
      moreProducts: [
        {
          id: 1,
          image: moreProductAleo1,
          text: 'Empaque con tapita x 100 toallitas'
        },
        {
          id: 2,
          image: moreProductAleo1,
          text: 'Empaque con tapita x 100 toallitas'
        },
        {
          id: 3,
          image: moreProductAleo1,
          text: 'Empaque con tapita x 100 toallitas'
        }
      ]
    }
  },
  {
    id: 3,
    nameProduct: 'dataProductAcolchamax',
    imgPpal: bgAcolchamax, 
    imgTitle: titleAcolchamax, 
    title: 'Acolchamax', 
    imgProduct: productAcolchamax, 
    sombraBg: contentSombraAcolchamax,
    Description: () => <p>Toallitas húmedas Pequeñín Acolchamax te ofrecen <strong>Cuidado Superior</strong> para tu bebé, gracias a su formula con extracto de almendra ayuda a <strong>hidratar y proteger su piel.</strong></p>,
    numberItems: 3,
    dataSlider: [
      {
        id: 1,
        image: selloFree,
        title: 'Tela libre de plástico',
        description: 'Hecha con fibras de origen natural y biodegradables',
      },
      {
        id: 2,
        image: selloHidrata,
        title: 'Cuidado superior',
        description: 'Gracias a su fórmula con almendra, ayudan a hidratar y proteger la piel de tu bebé',
      },
      {
        id: 3,
        image: selloExtra,
        title: 'Tela extra acolchada',
        description: 'Ofrece una absorción y limpieza superior. ',
      },
      // {
      //   id: 4,
      //   image: selloAlcohol,
      //   title: 'Cuidado Puro',
      //   description: 'Su fórmula hecha con 99% agua, no altera el pH natural y son libres de fragancia.',
      // }
    ],
    LinkSeeMore: ({dispatch}) => <BtnSeeMore onClick={() => onClickSendData('dataProductAcolchamax')} to='/producto/acolchamax'>Ver más</BtnSeeMore>,
    contentDetail: {
      title: titleDetailProductAcol,
      DescriptionDetail: () => <div className="description"><p>Ofrecen <strong>Cuidado Superior</strong> para los bebés, gracias a su formula con <strong>extracto de almendra ayuda a hidratar y proteger su piel.</strong></p><p> Además ofrecen un cuidado para el planeta con su tela extra acolchada y libre de plástico hechas con fibras de origen natural y biodegradables, que brindan una absorción superior.</p></div>,
      imageDetail: imageDetailAcol,
      numberItems: 3,
      moreProducts: [
        {
          id: 1,
          image: moreProductAcol1,
          text: 'Empaque con tapita x 80 toallitas'
        },
        {
          id: 2,
          image: moreProductAcol1,
          text: 'Empaque con tapita x 80 toallitas'
        },
        {
          id: 3,
          image: moreProductAcol1,
          text: 'Empaque con tapita x 80 toallitas'
        }
      ]
    }
  }
]

// export const dataProductAleo = 

// export const dataProductAcolchamax = 
