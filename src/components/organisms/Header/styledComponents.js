import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const ContentHeader = styled.header`
  display: flex;
  width: 100%;
  background: rgba(255, 255, 255, .6);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const HeaderContain = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  ${breakpoint('lg')`
    width: 95%;
  `}
  ${breakpoint('xl')`
    width: 90%;
  `}
`;

export const HeaderLogo = styled.div`
  display: flex;
  width: 110px;
  padding: 12px 0;
  h1 {
    margin: 0;
  }
  img {
    /* width: 80px; */
    object-fit: contain;
  }
  ${breakpoint('lg')`
    padding: 10px 0;
    img {
      /* width: 100px; */
    }
  `}
`

export const HeaderMenu = styled.div`
  display: flex;
  padding-left: 40px;
  width: 50%;
  position: relative;
  ${breakpoint('xxl')`
    width: 45%;
  `}
`