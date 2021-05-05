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
