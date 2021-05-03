import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

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
  border-right: 2px solid #FFEA9E;
  border-radius: 0 10px 10px 0;
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
  padding: 30px 10px;
  a, span {
    font-family: 'bariol bold';
    text-decoration: none;
    color: #4D5A31;
    transition: all 0.5s ease;
    position: relative;
    font-size: 17px;
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
      width: 100%;
      height: 2px;
      transform: scale3d(0, 1, 1);
      transform-origin: left center;
      transition: transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) 0.4s;
      background: #4D5A31;
    }

    &.selected {
      color: #789C4A;
      &:after {
        transform: scale3d(1, 1, 1);
        background: #789C4A;
      }
    }
  }

  ${breakpoint('lg')`
    a, span {
      font-size: 15px;
    }
  `}

  ${breakpoint('xls')`
    a, span {
      font-size: 18px;
    }
  `}
  ${breakpoint('xxl')`
    a, span {
      font-size: 20px;
    }
  `}
`

export const MobileTop = styled.div`
  display: flex;
  padding: 10px;
`;

export const MobileLogo = styled.div`
  display: flex;
  padding: 5px;
  img {
    object-fit: contain;
    width: 80px;
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
  margin-top: 30px;
  padding: 10px 20px;
  /* flex-grow: 1; */
  flex-wrap: wrap;
  align-content: flex-start;
  h2 {
    font-size: 22px;
    color: #789C4A;
    font-family: 'bariol bold';
  }
  div {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    a {
      margin-top: 30px;
      font-size: 20px;
      text-decoration: none;
      font-family: 'bariol bold';
      line-height: 26px;
      color: #4D5A31;
      position: relative;
      transition: all 0.5s ease;
      &:hover {
        &:after {
          transform: scale3d(1, 1, 1);
          transition-delay: 0s;
        }
      }
      &:after {
        position: absolute;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 2px;
        transform: scale3d(0, 1, 1);
        transform-origin: left center;
        transition: transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) 0.4s;
        background: #4D5A31;
      }

      &.selected {
        color: #789C4A;
        &:after {
          transform: scale3d(1, 1, 1);
          background: #789C4A;
        }
      }
    }
  }
`;
