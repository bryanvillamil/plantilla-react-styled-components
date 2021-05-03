import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const ButtonCustom = styled.button`

background: #E6D363;
    border-radius: 0;
    clip-path: polygon(0 15%,2% 0,10% 2%,15% 0,70% 0,73% 2%,90% 2%,98% 4%,100% 50%,98% 95%,94% 100%,50% 100%,30% 100%,25% 98%,4% 98%,1% 90%);
    font-family: 'bariol bold';
    padding: 10px 25px;
    font-size: 17px;
    background-size: 200% 100%;
    background-position: left bottom;
    color: #000;
    font:  'bariol-bold';
    border: none;
    cursor: pointer;
    outline: none;
    transition: all 500ms ease;

  &.disabled{
    filter: grayscale(100%);
    transition: none;
    pointer-events: none;
  }

  &.white-btn {
    background: linear-gradient(to right, white 50%, purple 50%);
    background-size: 200% 100%;
    background-position: left bottom;
  }
  &.purple-btn {
    background: linear-gradient(to right, purple 50%, white 50%);
    background-size: 200% 100%;
    background-position: left bottom;
    color: white;
    a {
      color: white;
    }
  }

  a {
    text-decoration: none;
  }

  ${breakpoint('lg')`
    font-size: 0.9rem;
    &:hover {
      background-position: right bottom;
      transform: scale(1.05);
    }
  `}
`