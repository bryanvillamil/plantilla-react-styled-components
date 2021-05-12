import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom";

import Icon from "../../atoms/Icons";
import logoPeque from '../../../assets/logo-peque.png';

import { 
  MenuNav, 
  MenuNavDesktop, 
  MobileTop, 
  Close, 
  MobileLogo, 
  MobileBottom, 
  ContentDropdown,
  DropdownProduct
} from './styledComponents';

const Menu = ({ isDesktopView, isDesktopLargeView, open, setOpenMenu }) => {

  const [ openDrop, setOpenDrop ] = useState(false) 

  const onClickSendData = (nameProduct) => {
    localStorage.setItem('nameProduct', nameProduct)
    setOpenDrop(false);
  }

  console.log('openDrop', openDrop)

  return (
    <>
      {
        isDesktopView || isDesktopLargeView ? (
          <MenuNavDesktop>
            <NavLink
              exact
              activeClassName="selected"
              className="gtmToallitasClicMenuInicio"
              to="/inicio"
            >
              Inicio
            </NavLink>

            {/* <NavLink
              exact
              activeClassName="selected"
              className=""
              to="/producto/pure-skin"
            >
              Productos
            </NavLink> */}


            <ContentDropdown>
              <span onClick={() => setOpenDrop(!openDrop)}>
                Productos
                <Icon iconName="arrow-down" height={30} width={30} backgroundColor="#8669B1" />
              </span>
              <DropdownProduct
                animationIn="fadeInDown"
                animationOut="fadeOutUp"
                animationInDuration={750} 
                animationOutDuration={750}
                isVisible={openDrop}
                animateOnMount={false}
              >
                <li>
                  <Link
                    exact
                    className=""
                    to="/producto/pure-skin"
                    onClick={() => onClickSendData('dataProductSkin')}
                  >
                    Pure Skin
                  </Link>
                </li>
                <li>
                  <Link
                    exact
                    className=""
                    to="/producto/aloe-natural"
                    onClick={() => onClickSendData('dataProductAleo')}
                  >
                    Aloe Vera
                  </Link>
                </li>
                <li>
                  <Link
                    exact
                    className=""
                    to="/producto/acolchamax"
                    onClick={() => onClickSendData('dataProductAcolchamax')}
                  >
                    Acolchamax
                  </Link>
                </li>
              </DropdownProduct>
            </ContentDropdown>


            <NavLink
              activeClassName="selected"
              className=""
              to="/tu-toallita-ideal"
            >
              Tu toallita ideal
            </NavLink>
            
          </MenuNavDesktop>
        ) : (
          <MenuNav className={`menu ${open ? 'opened' : ''}`}>
            <MobileTop>
              <MobileLogo><img src={logoPeque} alt="logo pequeñin" /></MobileLogo>

              <Close onClick={() => setOpenMenu(false)}><Icon iconName="close" width={30} height={30} backgroundColor="#4FC8F4" /></Close>
            </MobileTop>

            <MobileBottom>
              <div>
              <NavLink
                exact
                activeClassName="selected"
                className="gtmToallitasClicMenuInicio"
                to="/inicio"
              >
                Inicio
              </NavLink>

            <ContentDropdown>
              <span onClick={() => setOpenDrop(!openDrop)}>
                Productos
                <Icon iconName="arrow-down" height={30} width={30} backgroundColor="#B7A4D2" />
              </span>
              <DropdownProduct
                animationIn="fadeInDown"
                animationOut="fadeOutUp"
                animationInDuration={750} 
                animationOutDuration={750}
                isVisible={openDrop}
                animateOnMount={false}
                style={openDrop ? { height: 'auto' } : { height: '0' }}
              >
                <li>
                  <Link
                    exact
                    className=""
                    to="/producto/pure-skin"
                    onClick={() => onClickSendData('dataProductSkin')}
                  >
                    Pure Skin
                  </Link>
                </li>
                <li>
                  <Link
                    exact
                    className=""
                    to="/producto/aloe-natural"
                    onClick={() => onClickSendData('dataProductAleo')}
                  >
                    Aloe Vera
                  </Link>
                </li>
                <li>
                  <Link
                    exact
                    className=""
                    to="/producto/acolchamax"
                    onClick={() => onClickSendData('dataProductAcolchamax')}
                  >
                    Acolchamax
                  </Link>
                </li>
              </DropdownProduct>
            </ContentDropdown>


            <NavLink
              activeClassName="selected"
              className=""
              to="/tu-toallita-ideal"
            >
              Tu toallita ideal
              <Icon iconName="arrow-down" height={30} width={30} backgroundColor="#B7A4D2" />
            </NavLink>

              </div>
            </MobileBottom>

          </MenuNav>
        )
      }
    </>
  )
}

export default Menu;