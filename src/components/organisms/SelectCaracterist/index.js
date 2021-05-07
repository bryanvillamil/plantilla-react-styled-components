import React from 'react'

import FormSelectOption from '../FormSelectOption'
import titleImg from '../../../assets/TOALLITAS/caracteristicas.svg'
import ingrediente from '../../../assets/TOALLITAS/INGREDIENTES@2x.png'
import cuidado from '../../../assets/TOALLITAS/CUIDADO-DE-LA-PIEL@2x.png'
import textura from '../../../assets/TOALLITAS/TEXTURA@2x.png'
import { ContentCaraterist, WrapperBoxes, Box } from './styledComponents'

const SelectCaracterist = () => {
  return (
    <ContentCaraterist>
      <FormSelectOption title={titleImg}>
        
        <WrapperBoxes>
          <Box>
            <img src={ingrediente} alt="ingrediente" />
            <span>Ingrediente</span>
          </Box>
          <Box>
            <img src={cuidado} alt="cuidado" />
            <span>Cuidado de la piel</span>
          </Box>
          <Box>
            <img className="imgBig" src={textura} alt="textura" />
            <span>Textura</span>
          </Box>
        </WrapperBoxes>

      </FormSelectOption>
    </ContentCaraterist>
  )
}

export default SelectCaracterist;