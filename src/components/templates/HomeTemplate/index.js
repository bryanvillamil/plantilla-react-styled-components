import React from 'react'
import withViewportHandler from '../../atoms/WithViewportHandler';
import { Home } from './styledComponents';

const HomeTemplate = (props) => {
  return (
    <Home>home</Home>
  )
}

export default withViewportHandler(HomeTemplate);