import React from 'react'

import FormSelectOption from '../FormSelectOption'
import titleImg from '../../../assets/TOALLITAS/tela.svg'
import acolchamax from '../../../assets/TOALLITAS/EXTRA-ACOLCHADO@2x.png'
import skin from '../../../assets/TOALLITAS/SUAVIDAD@2x.png'
import aloevera from '../../../assets/TOALLITAS/SUPER-ACOLCHADA@2x.png'
import { ContentIngredients, WrapperBoxes, Box } from './styledComponents'

const SelectIngredients = () => {

  const onClickSendData = (nameProduct) => {
    localStorage.setItem('nameProduct', nameProduct)
  }

  return (
    <ContentIngredients>
      <FormSelectOption title={titleImg}>
        <WrapperBoxes>
          <Box onClick={() => onClickSendData('dataProductAcolchamax')} to="/producto/acolchamax">
            <img src={acolchamax} alt="acolchamax" />
            <p>Ofrece una limpieza superior</p>
          </Box>
          <Box onClick={() => onClickSendData('dataProductSkin')} to="/producto/pure-skin">
            <img src={skin} alt="skin" />
            <p>Fibras de algodón natural Lo mas parecido a limpiar con algodón</p>
          </Box>
          <Box onClick={() => onClickSendData('dataProductAleo')} to="/producto/aloe-natural">
            <img src={aloevera} alt="aloevera" />
            <p>Para una limpieza avanzada</p>
          </Box>
        </WrapperBoxes>
      </FormSelectOption>
    </ContentIngredients>
  )
}

export default SelectIngredients;