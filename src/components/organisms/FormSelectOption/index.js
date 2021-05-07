import React from 'react'

import bannerPurple from '../../../assets/TOALLITAS/BG.png'
import { ContentFormSelect, BgFormSelect, FormSelectTitle, FormSelectContent } from './styledComponents'

const FormSelect = ({ title, children }) => {
  return (
    <ContentFormSelect>
      <BgFormSelect src={bannerPurple} alt="bg purple" />

      <FormSelectTitle>
        <img src={title} alt="title" />
      </FormSelectTitle>

      <FormSelectContent>
        {children}
      </FormSelectContent>
    </ContentFormSelect>
  )
}

export default FormSelect;
