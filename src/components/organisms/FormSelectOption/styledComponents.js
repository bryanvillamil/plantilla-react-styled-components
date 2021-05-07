import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

export const ContentFormSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 100vh;
  align-content: space-around;
  align-items: flex-start;
  ${breakpoint('xxl')`
    min-height: 80vh;
  `}
`;

export const BgFormSelect = styled.img`
  display: flex;
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: bottom;
  z-index: -1;
`;

export const FormSelectTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 20px 0;
  img {
    max-width: 420px;
    width: 90%;
  }
  ${breakpoint('xxl')`
    img {
      max-width: 500px;
    }
  `}
`;

export const FormSelectContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
