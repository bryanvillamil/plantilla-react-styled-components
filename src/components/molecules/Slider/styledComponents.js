import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const SliderContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  .slick-dots {
    li {
      button {  
        &:before {
          font-size: 11px;
          color: #fff;
          opacity: 1;
        }
      }
      &.slick-active {
        button {  
          &:before {
            opacity: .4;
            color: black;
          }
        }
      }
    }
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  z-index: 99;
  &.prev__arrow {
    transform: rotate(180deg);
    left: -8%;
    &:hover {
      transform: rotate(180deg) scale(1.1);
    }
  }
  &.next__arrow {
    right: -8%;
    &:hover {
      transform: scale(1.1);
    }
  }

  ${breakpoint('xxl')`
    &.prev__arrow {
      left: -5%;
    }
    &.next__arrow {
      right: -5%;
    }
  `}
`;
