import React from 'react'

import Icon from '../../atoms/Icons'

import logoPeque from '../../../assets/logo-peque.png'
import facebook from '../../../assets/facebook.svg'
import instagram from '../../../assets/instagram.svg'
import youtube from '../../../assets/youtube.svg'

import { 
  ContentFooter, 
  FooterContainer,
  FooterLogo,
  FooterNetworks, 
  NetworksList, 
  NetworksItem, 
  NetworksLink, 
  FooterLinks 
} from './styledComponents'

const Footer = () => {
  return (
    <ContentFooter>
      <FooterContainer>
        <FooterLogo>
          <img src={logoPeque} alt="logo peque" />
        </FooterLogo>

        <FooterNetworks>
          <span>Síguenos en</span>
          <NetworksList>
            <NetworksItem>
              <NetworksLink href="https://www.instagram.com/pequeninperu/" target="_blank">
                <img src={facebook} alt="facebook" />
              </NetworksLink>
            </NetworksItem>

            <NetworksItem>
              <NetworksLink href="https://www.facebook.com/PequeninPeru" target="_blank">
                <img src={instagram} alt="instagram" />
              </NetworksLink>
            </NetworksItem>

            <NetworksItem>
              <NetworksLink href="https://www.youtube.com/user/videosPequenin/videos" target="_blank">
                <img src={youtube} alt="youtube" />
              </NetworksLink>
            </NetworksItem>
          </NetworksList>
        </FooterNetworks>

        <FooterLinks>
          <a href="https://www.pequenin.com/colombia/configuraciones-y-referencias/generales/terminos-y-condiciones/" target="_blank">Términos legales</a>
          <a href="https://www.pequenin.com/colombia/configuraciones-y-referencias/generales/politicas-de-proteccion/" target="_blank">Políticas de seguridad</a>
        </FooterLinks>
      </FooterContainer>
    </ContentFooter>
  )
}

export default Footer;