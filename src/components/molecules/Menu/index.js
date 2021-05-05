import React from 'react'
import { NavLink } from "react-router-dom";

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
} from './styledComponents';

const Menu = ({ isDesktopView, isDesktopLargeView, open, setOpenMenu }) => {

  return (
    <>
      {
        isDesktopView || isDesktopLargeView ? (
          <MenuNavDesktop>
            <NavLink
              exact
              activeClassName="selected"
              className="gtmToallitasClicMenuInicio"
              to="/home"
            >
              Inicio
            </NavLink>

            <NavLink
              exact
              activeClassName="selected"
              className=""
              to="/productos"
            >
              Productos
            </NavLink>


            {/* <ContentDropdown>
              <span>Productos</span>
              <ul>
                <li>
                  <a href="">1</a>
                </li>
                <li>
                  <a href="">2</a>
                </li>
                <li>
                  <a href="">3</a>
                </li>
              </ul>
            </ContentDropdown> */}


            <NavLink
              activeClassName="selected"
              className=""
              to="/tu-toallita"
            >
              Tu toallita ideal
            </NavLink>
            
          </MenuNavDesktop>
        ) : (
          <MenuNav className={`menu ${open ? 'opened' : ''}`}>
            <MobileTop>
              <MobileLogo><img src={logoPeque} alt="logo pequeñin" /></MobileLogo>

              <Close onClick={() => setOpenMenu(false)}><Icon iconName="close" width={30} height={30} backgroundColor="#4D5A31" /></Close>
            </MobileTop>

            <MobileBottom>
              <div>
                <NavLink
                  exact
                  activeClassName="selected"
                  className="gtmToallitasClicMenuInicio"
                  to="/home"
                >
                  Inicio
                </NavLink>

                <NavLink
                  activeClassName="selected"
                  className="gtmToallitasClicMenuAprendeSostenibilidad"
                  to="/sostenibilidad"
                >
                  Aprende sobre sostenibilidad
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