import React from 'react'

import bannerDiscover from '../../../assets/HOME/Bg-toallita-ideal@2x.png'
import llegamosImg from '../../../assets/HOME/frase-toallita-ideal.svg'
import { ContentDiscover, BgDiscover, BannerContent, LinkDiscover } from './styledComponents'

const Discover = (props) => {

  return (
    <ContentDiscover>
      <BannerContent>
          <img className="imgDiscover" src={llegamosImg} alt="llegamos a peru" />
          <LinkDiscover href="#">Descubrir</LinkDiscover>
      </BannerContent>
      <BgDiscover src={bannerDiscover} alt="banner descubre" />
    </ContentDiscover>
  )
}

export default Discover;