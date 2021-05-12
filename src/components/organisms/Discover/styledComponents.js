import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import { Link } from "react-router-dom";

export const ContentDiscover = styled.section`
  display: flex;
  width: 100%;
  position: relative;
  min-height: 115vh;
  margin-top: -50px;
  ${breakpoint('md')`
    margin-top: -200px;
  `}
  ${breakpoint('xls')`
    min-height: 100vh;
  `}
`;

export const BgDiscover = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-size: contain;
  background-position: right;
  ${breakpoint('md')`
    background-size: cover;
    background-position: right;
  `}
`;

export const BannerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 5;
  align-content: flex-end;
  align-items: flex-end;
  justify-content: center;
  img.imgDiscover {
    width: 55%;
    margin: 0 auto;
    object-fit: contain;
    padding-bottom: 30px;
  }
  ${breakpoint('md')`
    width: 32%;
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    margin: auto;
    align-content: center;
    img.imgDiscover {
      width: 68%;
      padding-bottom: 0;
    }
  `}
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


export const LinkDiscover = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #562E91;
  font-family: 'bariol bold';
  font-size: 35px;
  padding: 14px 15px;
  width: 85%;
  max-width: 220px;
  margin-bottom: 30px;
  clip-path: polygon(0 15%,2% 0,10% 2%,15% 0,70% 0,73% 2%,90% 2%,98% 4%,100% 50%,98% 95%,94% 100%,50% 100%,30% 100%,25% 98%,4% 98%,1% 90%);
  cursor: pointer;
  transition: all 0.5s ease;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
  }
  ${breakpoint('md')`
    margin-top: 50px;
    margin-bottom: 0;
    font-size: 40px;
    max-width: 250px;
  `}
  ${breakpoint('xxl')`
    padding: 16px 15px;
    max-width: 280px;
  `}
`;