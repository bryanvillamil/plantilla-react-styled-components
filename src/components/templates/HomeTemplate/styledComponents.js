import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import imgBanner from '../../../assets/HOME/IMG-BG.png';
import fondoAquaCyan from '../../../assets/HOME/acqua-cyan-01@2x.png';
import fondoAquaCyan2 from '../../../assets/HOME/acqua-cyan-02@2x.png';

export const Home = styled.div`
  display: flex;
  /* min-height: 100vh; */
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
  justify-content: flex-end;
  background-color: #fff;
  align-items: flex-start;
  align-content: flex-start;
  ${breakpoint('xl')`

  `}
`;

export const BannerHome = styled.section`
  display: flex;
  width: 100%;
  background: #633E99;
  height: 70vh;
  position: relative;
  ${breakpoint('md')`
    background: none;
    height: 95vh;
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
      background-size: cover;
    }
  `}
`;

export const BannerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  position: absolute;
  left: 30px;
  top: 80px;
  z-index: 5;
  align-content: center;
  align-items: center;
  img.llegamosAPeru {
    width: 85%;
    margin: auto;
  }
  ${breakpoint('md')`
    width: 35%;
    top: 70px;
    left: 85px;
    img.llegamosAPeru {
      width: 74%;
      margin: auto;
    }
  `}
  ${breakpoint('xxl')`
    width: 37%;
    top: 120px;
    left: 120px;
    img.llegamosAPeru {
      width: 82%;
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
  height: 120px;
  p {
    font-size: 28px;
    font-family: 'bariol bold';
    color: #6A469E;
    text-align: center;
    width: 80%;
    margin: 0 auto;
  }
  ${breakpoint('md')`
    height: 160px;
    p {
      font-size: 30px;
    }
  `}
  ${breakpoint('xxl')`
    margin-top: 50px;
    height: 180px;
    p {
      font-size: 45px;
      width: 90%;
    }
  `}
`;

export const WrapperProductsHome = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 120px;
  margin: 0 auto;
  position: relative;
  background: url(${fondoAquaCyan2});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  top: -70px;
  align-content: flex-start;
  align-items: flex-start;
  .containerProducts {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    a {
      display: flex;
      width: 30%;
      height: 100%;
    }
  }
  ${breakpoint('md')`
    height: auto;
    top: -180px;
  `}
`;


export const ContentDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 0px;
  min-height: 70vh;
  height: 100%;
  align-content: flex-start;
  align-items: flex-start;
  ${breakpoint('md')`
    margin-top: -140px;
  `}
`;
