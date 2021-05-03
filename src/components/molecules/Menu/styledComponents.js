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

  a.saving {
    background: #4D5A31;
    border-radius: 0;
    clip-path: polygon(0 25%, 4% 0,20% 2%,15% 0,70% 0,73% 2%,90% 2%,98% 4%,100% 60%,98% 95%,94% 100%,50% 100%,40% 100%,25% 98%,4% 98%,1% 90%);
    font-family: 'bariol bold';
    padding: 8px 12px;
    text-align: center;
    color: #fff;
    transition: all 0.5s ease;
    font-size: 18px;
    max-width: 140px;
    &:hover {
      transform: scale(1.1);
    }
  }
`

export const MenuNavDesktop = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

  button {
    white-space: nowrap;
    font-size: 17px;
    &.login {
      background: #E6D363;
      border-radius: 0;
      clip-path: polygon(0 15%,2% 0,10% 2%,15% 0,70% 0,73% 2%,90% 2%,98% 4%,100% 50%,98% 95%,94% 100%,50% 100%,30% 100%,25% 98%,4% 98%,1% 90%);
      font-family: 'bariol bold';
      padding: 10px 35px;
    }

  }
  a.saving {
    background: #4D5A31;
    border-radius: 0;
    clip-path: polygon(0 25%, 4% 0,20% 2%,15% 0,70% 0,73% 2%,90% 2%,98% 4%,100% 60%,98% 95%,94% 100%,50% 100%,40% 100%,25% 98%,4% 98%,1% 90%);
    font-family: 'bariol bold';
    padding: 10px 28px;
    color: #fff;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  .contentUser {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    .userName {
      font-size: 16px;
      color: #789C4A;
      font-family: 'bariol bold';
      line-height: 20px;
      margin: 0;
    }
  
    .closeSesion {
      text-decoration: underline;
      font-size: 16px;
      color: #789C4A;
      font-family: 'bariol bold';
      line-height: 20px;
      margin: 0;
      cursor: pointer;
    }
  }
  ${breakpoint('lg')`
    a, span {
      font-size: 15px;
    }
    button {
      font-size: 15px;
      &.login {
        padding: 10px 26px;
      }

      &.saving {
        padding: 10px 20px;
      }
    }
  `}

  ${breakpoint('xls')`
    a, span {
      font-size: 18px;
    }
    button {
      font-size: 18px;
      &.login {
        padding: 10px 35px;
      }

      &.saving {
        padding: 10px 28px;
      }
    }
    .contentUser {
      .userName {
        font-size: 20px;
        margin-bottom: 3px;
      }
      .closeSesion {
        font-size: 20px;
      }
    }
  `}
  ${breakpoint('xxl')`
    a, span {
      font-size: 20px;
    }
    button {
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
