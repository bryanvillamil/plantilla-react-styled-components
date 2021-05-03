import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Home = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
  justify-content: flex-end;
  background-color: #333;
  ${breakpoint('xl')`

  `}
`;
