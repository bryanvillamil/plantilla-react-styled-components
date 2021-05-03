import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const Burger = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 5%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  
  div {
    width: 25px;
    height: 3px;
    background: #789C4A;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  &.opened {
    div {
      opacity: 0;
      &:first-child {
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
        transform: translateX(20px);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
    }
  }

  ${breakpoint('lg')`
    display: none;
  `}
`;