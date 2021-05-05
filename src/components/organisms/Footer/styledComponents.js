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
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;
`;

export const FooterLogo = styled.div`
  display: flex;
  width: 25%;
  position: relative;
  top: -60px;
  z-index: 5;
  img {
    width: 90%;
    max-width: 180px;
  }
`;

export const FooterNetworks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

export const NetworksList = styled.ul`
  display: flex;
  margin: 0;
  align-items: center;
  span {
    color: rgba(86, 46, 145, 1);
    font-family: 'bariol bold';
    font-size: 25px;
    margin-right: 20px;
  }
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
  width: 35%;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-end;
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
    font-size: 23px;
    transition: all 0.5s ease;
    text-align: right;
    width: max-content;
    &:last-child {
      margin-top: 10px;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`;
