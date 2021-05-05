import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

export const ContentDiscover = styled.section`
  display: flex;
  width: 100%;
  position: relative;
  min-height: 100vh;
  margin-top: -200px;
  ${breakpoint('xxl')`
    min-height: 90vh;
  `}
`;

export const BgDiscover = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-size: cover;
  background-position: right;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 32%;
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 5;
  align-content: center;
  justify-content: center;
  img.imgDiscover {
    width: 68%;
    margin: 0 auto;
    object-fit: contain;
  }
  ${breakpoint('lg')`
    left: 120px;
    img.llegamosAPeru {
      width: 80%;
    }
  `}
  ${breakpoint('xxl')`
    left: 220px;
  `}
`;


export const LinkDiscover = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #562E91;
  font-family: 'bariol bold';
  font-size: 40px;
  padding: 14px 15px;
  width: 85%;
  max-width: 250px;
  margin-top: 50px;
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