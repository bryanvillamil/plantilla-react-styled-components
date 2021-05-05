import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Link } from 'react-router-dom'

export const BtnSeeMore = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #562E91;
  color: #fff;
  font-family: 'bariol bold';
  font-size: 40px;
  padding: 14px 15px;
  width: 85%;
  max-width: 250px;
  clip-path: polygon(0 15%,2% 0,10% 2%,15% 0,70% 0,73% 2%,90% 2%,98% 4%,100% 50%,98% 95%,94% 100%,50% 100%,30% 100%,25% 98%,4% 98%,1% 90%);
  cursor: pointer;
  transition: all 0.5s ease;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
  }
  ${breakpoint('xxl')`
    padding: 16px 15px;
    max-width: 280px;
  `}
`;
