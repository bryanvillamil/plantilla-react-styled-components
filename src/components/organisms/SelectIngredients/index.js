import React from 'react'

import FormSelectOption from '../FormSelectOption'
import titleImg from '../../../assets/TOALLITAS/ingredientes.svg'
import { ContentIngredients, } from './styledComponents'

const SelectIngredients = () => {

  return (
    <ContentIngredients>
      <FormSelectOption title={titleImg} />
    </ContentIngredients>
  )
}

export default SelectIngredients;