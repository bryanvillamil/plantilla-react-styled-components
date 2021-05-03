import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const ContentFooter = styled.footer`
  display: flex;
  width: 100%;
  background: rgba(255, 255, 255, .4);
  backdrop-filter: blur(12px);
  position: relative;
  bottom: 0;
  left: 0;
  padding: 8px 0;
  z-index: 99999;
  ${breakpoint('md')`
    display: flex;
    position: fixed;
    z-index: 9;
    padding: 8px 25px;
  `}
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;
`;

export const FooterNetworks = styled.div`
  display: flex;
  width: 35%;
`;

export const NetworksList = styled.ul`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
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
  width: 60%;
  justify-content: flex-end;
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
  div {
    cursor: pointer;
    text-decoration: underline;
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
`;
