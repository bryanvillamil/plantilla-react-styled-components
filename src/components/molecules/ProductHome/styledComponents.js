import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint'

export const BoxProduct = styled.div`
  display: flex;
  width: 100%;
  img {
    width: 90%;
    margin: 0 auto;
    object-fit: contain;
  }
  /* ${breakpoint('xxl')`
    width: 30%;
  `} */
`;