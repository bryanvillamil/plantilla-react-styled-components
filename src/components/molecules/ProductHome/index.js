import React from 'react'
import { BoxProduct } from './styledComponents'

const ProductoHome = ({ image }) => {
  return (
    <BoxProduct>
      <img src={image} />
    </BoxProduct>
  )
};

export default ProductoHome;