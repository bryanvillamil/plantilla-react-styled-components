import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import bannerToallitas from '../../../assets/TOALLITAS/IMG-BG.png';
// import fondoAquaCyan from '../../../assets/HOME/acqua-cyan-01@2x.png';
import fondoAquaCyan2 from '../../../assets/HOME/acqua-cyan-02@2x.png';

export const TuToallitaContent = styled.section`
  display: flex;
  min-height: 80vh;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
  background-color: #fff;
  ${breakpoint('xxl')`
    min-height: 65vh;
  `}
`;

export const BannerToallitas = styled.section`
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
    height: 110%;
    background: url(${bannerToallitas});
    background-repeat: no-repeat;
    background-size: cover;
  }
  ${breakpoint('md')`
    &:after {
      height: 100%;
    }
  `}
`;

export const BannerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  position: absolute;
  left: 5%;
  top: 120px;
  z-index: 5;
  img.llegamosAPeru {
    width: 90%;
    margin: auto;
  }
  ${breakpoint('md')`
    width: 36%;
    top: 50px;
    max-width: 500px;
    left: 100px;
    img.llegamosAPeru {
      width: 85%;
    }
  `}
  ${breakpoint('xxl')`
    width: 36%;
    top: 90px;
    left: 170px;
    max-width: 700px;
    img.llegamosAPeru {
      width: 88%;
    }
  `}
`;


export const BannerContentToallitas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  p {
    font-size: 24px;
    line-height: 36px;
    font-family: 'bariol regular';
    color: #fff;
    text-align: center;
    width: 98%;
    margin: 0 auto;
  }
  ${breakpoint('md')`
    p {
      font-size: 26px;
      line-height: 32px;
    }
  `}
  ${breakpoint('xxl')`
    p {
      font-size: 36px;
      line-height: 40px;
      width: 90%;
    }
  `}
`;

export const LinkToallitas = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #562E91;
  font-family: 'bariol bold';
  font-size: 28px;
  padding: 15px 13px;
  width: 85%;
  max-width: 180px;
  margin: 35px auto 0;
  clip-path: polygon(0 15%,2% 0,10% 2%,15% 0,70% 0,73% 2%,90% 2%,98% 4%,100% 50%,98% 95%,94% 100%,50% 100%,30% 100%,25% 98%,4% 98%,1% 90%);
  cursor: pointer;
  transition: all 0.5s ease;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
  }
  ${breakpoint('md')`
    margin: 20px auto 0;
    font-size: 28px;
    max-width: 130px;
    padding: 12px 12px;
  `}
  ${breakpoint('xxl')`
    padding: 17px 15px;
    font-size: 40px;
    max-width: 200px;
    margin: 45px auto 0;
  `}
`;

export const WrapperProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 5;
  background: url(${fondoAquaCyan2});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  justify-content: center;
  .containerProducts {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
  }
  ${breakpoint('md')`
    width: 55%;
  `}
`;

export const BoxProduct = styled.div`
  display: flex;
  width: 30%;
  img {
    width: 90%;
    margin: 0 auto;
  }
`;