import React, { useState, useEffect } from 'react'
import withViewportHandler from '../../atoms/WithViewportHandler';
import SelectIngredients from '../../organisms/SelectIngredients';
import SelectCaracterist from '../../organisms/SelectCaracterist';
import SelectCloth from '../../organisms/SelectCloth';

import bannerToallitas from '../../../assets/TOALLITAS/frase-toallitas.svg';
import producto1 from '../../../assets/HOME/acuarela-pureskin@2x.png';
import producto2 from '../../../assets/HOME/acuarela-aloevera@2x.png';
import producto3 from '../../../assets/HOME/acuarela-acolchamax@2x.png';

import {
  TuToallitaContent,
  BannerToallitas,
  BannerContent,
  BannerContentToallitas,
  LinkToallitas,
  WrapperProducts,
  BoxProduct
} from './styledComponents';

const TuToallitaIdealTemplate = (props) => {
  const [ currentView, setCurrentView ] = useState(0);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <>
      {currentView === 0 && (
        <TuToallitaContent>
          <BannerToallitas>
            <BannerContent>
              <img className="llegamosAPeru" src={bannerToallitas} alt="llegamos a peru" />
              <BannerContentToallitas>
                <p>Te ayudaremos a elegir las toallitas húmedas que más se adaptan a las necesidades de tu pequeñín</p>
              </BannerContentToallitas>
              <LinkToallitas onClick={() => setCurrentView(1)}>Comenzar</LinkToallitas>
            </BannerContent>

            <WrapperProducts>
              <BoxProduct>
                <img src={producto1} alt="producto 1" />
              </BoxProduct>

              <BoxProduct>
                <img src={producto2} alt="producto 2" />
              </BoxProduct>

              <BoxProduct>
                <img src={producto3} alt="producto 3" />
              </BoxProduct>
            </WrapperProducts>

          </BannerToallitas>
        </TuToallitaContent>
      )}

      {currentView === 1 && (
        <SelectCaracterist viewport={props.viewport} setCurrentView={setCurrentView} />
      )}

      {currentView === 2 && (
        <SelectIngredients setCurrentView={setCurrentView} />
      )}

      {currentView === 3 && (
        <SelectCloth setCurrentView={setCurrentView} />
      )}

    </>
  )
}

export default withViewportHandler(TuToallitaIdealTemplate);
