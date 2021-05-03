import React, { useState } from 'react'
import { useDispatch } from "react-redux";

import Menu from '../../molecules/Menu'
import Burger from '../../atoms/Burger'
import withViewportHandler from '../../atoms/WithViewportHandler'

import logoPeque from '../../../assets/logo-peque.png'
import { ContentHeader, HeaderContain, HeaderLogo, HeaderMenu } from './styledComponents'

const Header = (props) => {
  const dispatch = useDispatch();
  const { viewport, setOpenComerciales } = props;
  const { isDesktopView, isDesktopLargeView } = viewport;
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <ContentHeader>
      <HeaderContain>
        <HeaderLogo>
          <h1>
            <img src={logoPeque} alt="logo-peque" />
          </h1>
        </HeaderLogo>
        <HeaderMenu>
          {(!isDesktopView || !isDesktopLargeView) && <Burger open={openMenu} setOpen={setOpenMenu} />}
          <Menu 
            dispatch={dispatch} 
            isDesktopLargeView={isDesktopLargeView} 
            isDesktopView={isDesktopView} 
            open={openMenu} 
            setOpenMenu={setOpenMenu} 
            setOpenComerciales={setOpenComerciales} 
          />
        </HeaderMenu>
      </HeaderContain>
    </ContentHeader>
  )
}

export default withViewportHandler(Header);