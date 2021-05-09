import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import lineHeader from '../../../assets/HOME/acuarela-header.svg'

export const ContentHeader = styled.header`
  display: flex;
  width: 100%;
  background: rgba(255, 255, 255, .6);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 99;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 30px;
    background: url(${lineHeader});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
  }
`;

export const HeaderContain = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  ${breakpoint('lg')`
    width: 95%;
  `}
  ${breakpoint('xl')`
    width: 90%;
  `}
`;

export const HeaderLogo = styled.div`
  display: flex;
  width: 130px;
  padding: 12px 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  h1 {
    margin: 0;
    width: 100%;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  ${breakpoint('md')`
    width: 150px;
    top: 12px;
  `}
  ${breakpoint('lg')`
    padding: 10px 0;
  `}
  ${breakpoint('xxl')`
    width: 190px;
    top: 6px;
  `}
`

export const HeaderMenu = styled.div`
  display: flex;
  padding-left: 40px;
  width: 40%;
  position: relative;
  min-height: 65px;
  ${breakpoint('lg')`
    width: 30%;
  `}
  ${breakpoint('xxl')`
    width: 25%;
  `}
`