import React from 'react'

import Icon from '../../atoms/Icons'

import logoPeque from '../../../assets/logo-peque.png'
import facebook from '../../../assets/facebook.svg'
import instagram from '../../../assets/instagram.svg'

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
              <NetworksLink href="https://www.instagram.com/pequeninecuador/" target="_blank">
                <img src={facebook} alt="facebook" />
              </NetworksLink>
            </NetworksItem>

            <NetworksItem>
              <NetworksLink href="https://www.facebook.com/PequeninEcuador" target="_blank">
                <img src={instagram} alt="instagram" />
              </NetworksLink>
            </NetworksItem>
          </NetworksList>
        </FooterNetworks>

        <FooterLinks>
          <span>Términos legales</span>
          <span>Políticas de seguridad</span>
        </FooterLinks>
      </FooterContainer>
    </ContentFooter>
  )
}

export default Footer;