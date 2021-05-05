import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import imgBanner from '../../../assets/HOME/IMG-BG.png';
import fondoAquaCyan from '../../../assets/HOME/acqua-cyan-01@2x.png';
import fondoAquaCyan2 from '../../../assets/HOME/acqua-cyan-02@2x.png';

export const Home = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
  justify-content: flex-end;
  background-color: #fff;
  ${breakpoint('xl')`

  `}
`;

export const BannerHome = styled.section`
  display: flex;
  width: 100%;
  /* background: #633E99; */
  height: 95vh;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 98%;
    background: url(${imgBanner});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 32%;
  position: absolute;
  left: 30px;
  top: 70px;
  z-index: 5;
  img.llegamosAPeru {
    width: 68%;
    margin: auto;
  }
  ${breakpoint('xxl')`
    width: 35%;
    top: 120px;
    left: 70px;
    img.llegamosAPeru {
      width: 80%;
    }
  `}
`;


export const BannerContentDiscover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${fondoAquaCyan});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 180px;
  p {
    font-size: 30px;
    font-family: 'bariol bold';
    color: #6A469E;
    text-align: center;
    width: 80%;
    margin: 0 auto;
  }
  ${breakpoint('xxl')`
    margin-top: 50px;
    height: 180px;
    p {
      font-size: 50px;
    }
  `}
`;

export const WrapperProductsHome = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  position: relative;
  background: url(${fondoAquaCyan2});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  top: -180px;
  .containerProducts {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
  }
  ${breakpoint('xxl')`
    
  `}
`;


export const ContentDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: -140px;
`;

export const BtnSeeMore = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #562E91;
  color: #fff;
  font-family: 'bariol bold';
  font-size: 40px;
  padding: 14px 15px;
  width: 85%;
  max-width: 250px;
  clip-path: polygon(0 15%,2% 0,10% 2%,15% 0,70% 0,73% 2%,90% 2%,98% 4%,100% 50%,98% 95%,94% 100%,50% 100%,30% 100%,25% 98%,4% 98%,1% 90%);
  cursor: pointer;
  transition: all 0.5s ease;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
  }
  ${breakpoint('xxl')`
    padding: 16px 15px;
    max-width: 280px;
  `}
`;
