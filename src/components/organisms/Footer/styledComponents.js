import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import lineHeader from '../../../assets/HOME/acuarela-header.svg'

export const ContentFooter = styled.footer`
  display: flex;
  width: 100%;
  background: #EDEDED;
  backdrop-filter: blur(12px);
  position: relative;
  bottom: 0;
  left: 0;
  padding: 8px 0;
  z-index: 99999;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: -20px;
    width: 100%;
    height: 30px;
    background: url(${lineHeader});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
  }
  ${breakpoint('md')`
    display: flex;
    // padding: 8px 25px;
  `}
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  padding: 10px 0;
  ${breakpoint('md')`
    padding: 0;
  `}
`;

export const FooterLogo = styled.div`
  display: none;
  width: 25%;
  position: relative;
  top: -50px;
  z-index: 5;
  img {
    width: 90%;
    max-width: 130px;
  }
  ${breakpoint('md')`
    display: flex;
  `}
  ${breakpoint('xxl')`
    top: -60px;
    img {
      max-width: 170px;
    }
  `}
`;

export const FooterNetworks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 10px;
  span {
    color: rgba(86, 46, 145, 1);
    font-family: 'bariol bold';
    font-size: 22px;
    margin-right: 10px;
  }
  ${breakpoint('sm')`
    width: 40%;
    justify-content: center;
    margin-bottom: 0;
    margin-top: 0;
  `}
  ${breakpoint('xxl')`
    span {
      font-size: 25px;
      margin-right: 10px;
    }
  `}
`;

export const NetworksList = styled.ul`
  display: flex;
  margin: 0;
  align-items: center;
  padding: 0;
  ${breakpoint('sm')`
    padding-inline-start: 40px;
  `}
`;

export const NetworksItem = styled.li`
  display: flex;
  margin-right: 25px;
  align-items: center;
`;

export const NetworksLink = styled.a`
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;
  padding-bottom: 15px;
  a {
    color: #7E7E7D;
    font-family: 'bariol bold';
    font-size: 15px;
    transition: all 0.5s ease;
    &:last-child {
      margin-left: 40px;
    }
    &:hover {
      color: #4D5A31;
    }
  }
  span {
    cursor: pointer;
    color: rgba(86, 46, 145, 1);
    font-family: 'bariol bold';
    font-size: 20px;
    transition: all 0.5s ease;
    width: initial;
    &:last-child {
      margin-top: 8px;
      margin-left: 12px;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
  ${breakpoint('sm')`
    flex-direction: column;
    justify-content: center;
    width: 35%;
    padding-bottom: 0;
    span {
      text-align: right;
      width: max-content;
      &:last-child {
        margin-left: 0;
      }
    }
  `}
  ${breakpoint('xxl')`
    span {
      font-size: 23px;
      &:last-child {
        margin-top: 10px;
      }
    }
  `}
`;
