import React from 'react'

import WithViewportHandler from '../../atoms/WithViewportHandler'

import bannerDiscover from '../../../assets/HOME/Bg-toallita-ideal@2x.png'
import bannerDiscoverMobile from '../../../assets/MOBILE/bg-descubre-toallita@2x.png'
import llegamosImg from '../../../assets/HOME/frase-toallita-ideal.svg'
import { ContentDiscover, BgDiscover, BannerContent, LinkDiscover } from './styledComponents'

const Discover = (props) => {

  const { 
    viewport: {
      isMobileView,
      isTabletView,
      isDesktopView
    }
  } = props;


  return (
    <ContentDiscover>
      <BannerContent>
          <img className="imgDiscover" src={llegamosImg} alt="llegamos a peru" />
          <LinkDiscover to="/tu-toallita-ideal">Descubrir</LinkDiscover>
      </BannerContent>
      {isMobileView ? (
            <BgDiscover src={bannerDiscoverMobile} alt="banner descubre" />
          ) : (
            <BgDiscover src={bannerDiscover} alt="banner descubre" />
          )}
    </ContentDiscover>
  )
}

export default WithViewportHandler(Discover);