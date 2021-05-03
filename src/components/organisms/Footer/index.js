import React from 'react'

import Icon from '../../atoms/Icons'
import { 
  ContentFooter, 
  FooterContainer,
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
        <FooterNetworks>
          <NetworksList>
            <NetworksItem>
              <NetworksLink href="https://www.instagram.com/pequeninecuador/" target="_blank">
                <Icon iconName="instagram" height={20} width={20} backgroundColor="#4D5A31" />
              </NetworksLink>
            </NetworksItem>

            <NetworksItem>
              <NetworksLink href="https://www.facebook.com/PequeninEcuador" target="_blank">
                <Icon iconName="facebook" height={20} width={20} backgroundColor="#4D5A31" />
              </NetworksLink>
            </NetworksItem>

            <NetworksItem>
              <NetworksLink href="https://www.youtube.com/user/videosPequenin" target="_blank">
                <Icon iconName="youtube" height={24} width={24} backgroundColor="#4D5A31" />
              </NetworksLink>
            </NetworksItem>
          </NetworksList>
        </FooterNetworks>

        <FooterLinks>
          <div>Términos y condiciones</div>
        </FooterLinks>
      </FooterContainer>
    </ContentFooter>
  )
}

export default Footer;