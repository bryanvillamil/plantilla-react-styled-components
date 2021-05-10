import React from 'react'

import FormSelectOption from '../FormSelectOption'
import titleImg from '../../../assets/TOALLITAS/ingredientes.svg'
import almendra from '../../../assets/TOALLITAS/ALMENDRA@2x.png'
import agua from '../../../assets/TOALLITAS/99_AGUA@2x.png'
import humectacion from '../../../assets/TOALLITAS/HUMECTACION@2x.png'
import { ContentIngredients, WrapperBoxes, Box } from './styledComponents'

const SelectIngredients = ({ setCurrentView }) => {

  const onClickSendData = (nameProduct) => {
    localStorage.setItem('nameProduct', nameProduct)
  }

  return (
    <ContentIngredients>
      <FormSelectOption title={titleImg}>
        <WrapperBoxes>
          <Box onClick={() => onClickSendData('dataProductAcolchamax')} to="/producto/acolchamax">
            <img src={almendra} alt="almendra" />
            <p>Brinda un <strong> Cuidado Superior,</strong> gracias a su formula con extracto de almendra ayuda a hidratar y proteger su piel</p>
          </Box>
          <Box onClick={() => onClickSendData('dataProductSkin')} to="/producto/pure-skin">
            <img src={agua} alt="agua" />
            <p>Para un <strong>Cuidado puro,</strong> porque gracias a su fórmula 99% agua y sin fragancia, es lo más parecido a limpiar con agua y algodón y no altera el pH de la piel.</p>
          </Box>
          <Box onClick={() => onClickSendData('dataProductAleo')} to="/producto/aloe-natural">
            <img src={humectacion} alt="humectacion" />
            <p>Un <strong>cuidado refrescante,</strong> porque gracias a su fórmula con aloe natural, ayudan a humectar y cuidar la piel.</p>
          </Box>
        </WrapperBoxes>
      </FormSelectOption>
    </ContentIngredients>
  )
}

export default SelectIngredients;