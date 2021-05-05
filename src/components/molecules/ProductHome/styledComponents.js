import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint'

export const BoxProduct = styled.div`
  display: flex;
  width: 30%;
  img {
    width: 90%;
    margin: 0 auto;
  }
  /* ${breakpoint('xxl')`
    width: 30%;
  `} */
`;