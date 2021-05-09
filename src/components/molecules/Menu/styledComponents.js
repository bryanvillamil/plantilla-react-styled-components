import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import lineActive from '../../../assets/HOME/bar-active-01.svg'
import { Animated } from "react-animated-css";

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  background: #fff;
  transform: translateX(-100%);
  height: 100vh;
  max-width: 300px;
  width: 80%;
  text-align: left;
  padding: 0 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9;
  /* border-right: 2px solid #777; */
  box-shadow: 1px 2px 3px #666;
  clip-path: polygon(0 0%, 22% 0,10% 2%,15% 0, 80% 0, 96% 2%, 96% 2%,97% 15%,100% 50%,97% 93%,95% 100%, 50% 100%, 30% 100%, 25% 98%, 4% 98%, 1% 80%);
  overflow: hidden;
  &.opened {
    transform: translateX(0);
  }
`

export const MenuNavDesktop = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  a, span {
    font-family: 'bariol regular';
    text-decoration: none;
    color: #616161;
    transition: all 0.5s ease;
    position: relative;
    font-size: 24px;
    line-height: 32px;
    margin: 24px 10px;
    cursor: pointer;
    &:hover {
      &:after {
        transform: scale3d(1, 1, 1);
        transition-delay: 0s;
      }
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0px;
      width: 75%;
      height: 5px;
      right: 0;
      margin: 0 auto;
      transform: scale3d(0, 1, 1);
      transform-origin: left center;
      transition: transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) 0.4s;
      background: url(${lineActive});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    &.selected {
      color: #562E91;
      font-family: 'bariol bold';
      &:after {
        transform: scale3d(1, 1, 1);
      }
    }
  }
  span {
    &:after {
      content: none;
    }
  }

  ${breakpoint('lg')`
    a, span {
      font-size: 18px;
    }
  `}
  ${breakpoint('xls')`
    a, span {
      font-size: 22px;
    }
  `}
  ${breakpoint('xxl')`
    a, span {
      font-size: 24px;
      margin: 30px 10px;
    }
  `}
`

export const MobileTop = styled.div`
  display: flex;
  padding: 10px;
`;

export const MobileLogo = styled.div`
  display: flex;
  padding: 8px;
  img {
    object-fit: contain;
    width: 95px;
  }
`;

export const Close = styled.div`
  position: absolute;
  right: 6%;
  top: 2%;
  cursor: pointer;
`;

export const MobileBottom = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 10px 0px;
  /* flex-grow: 1; */
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  h2 {
    font-size: 22px;
    color: #789C4A;
    font-family: 'bariol bold';
  }
  & > div {
    display: flex;
    flex-direction: column;
    padding: 5px 20px;
    flex-wrap: wrap;
    a, span {
      margin-top: 35px;
      font-size: 24px;
      text-decoration: none;
      font-family: 'bariol regular';
      line-height: 28px;
      color: #747474;
      position: relative;
      transition: all 0.5s ease;
      display: flex;
      align-items: center;
      width: 100%;
      &:hover {
        &:after {
          transform: scale3d(1, 1, 1);
          transition-delay: 0s;
        }
      }
      &:after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0px;
        width: 75%;
        height: 5px;
        /* right: 0; */
        margin: 0 auto;
        transform: scale3d(0, 1, 1);
        transform-origin: left center;
        transition: transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) 0.4s;
        background: url(${lineActive});
        background-size: contain;
        background-position: left;
        background-repeat: no-repeat;
      }
      &.selected {
        color: #562E91;
        font-family: 'bariol bold';
        &:after {
          transform: scale3d(1, 1, 1);
        }
      } 
      svg { 
        margin-left: 3px;
        margin-top: 4px;
        transform: rotate(-90deg);
      }
    }
  }

  /* ${breakpoint('md')`
    & > div {
      padding: 0;
      flex-wrap: nowrap;
    }
  `} */
`;

export const ContentDropdown = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  z-index: 99;
  span {
    display: flex;
    align-items: center;
    svg { 
      margin-left: 3px;
      margin-top: 4px;
    }
  }
  ${breakpoint('md')`
    width: initial;
  `}
`;

export const DropdownProduct = styled(Animated)`
  position: relative;
  top: 10%;
  left: 0;
  width: 100%;
  z-index: -2;
  background: #fff;
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 2px 5px 8px #bbb;
  padding: 0;
  min-width: 150px;
  overflow: hidden;
  li {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    a {
      padding: 10px 12px;
      border-bottom: 1px solid #ccc;
      font-size: 18px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      &:after {
        content: none;
      }
      &:hover {
        background: #562E91;
        color: #fff;
      }
    }
    &:last-child {
      a {
        border: none;
      }
    }
  }

  ${breakpoint('md')`
    position: absolute;
    top: 100%;
    height: auto;
  `}
`;
