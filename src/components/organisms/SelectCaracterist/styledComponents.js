import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

export const ContentCaraterist = styled.section`
  display: flex;
  width: 100%;
  position: relative;
`;

export const WrapperBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto 50px;
  position: relative;
  ${breakpoint('md')`
    width: 80%;
    margin: 0 auto 70px;
  `}
  ${breakpoint('xxl')`
    width: 72%;
    margin: 0 auto 70px;
  `}
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  position: relative;
  margin-top: 40px;
  img {
    width: 50%;
    object-fit: contain;
    object-position: center;
  }
  span {
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #562E91;
    font-family: 'bariol bold';
    font-size: 30px;
    padding: 10px 12px;
    width: max-content;
    clip-path: polygon(0 15%,2% 0,10% 2%,15% 0,70% 0,73% 2%,90% 2%,98% 4%,100% 50%,98% 95%,94% 100%,50% 100%,30% 100%,25% 98%,4% 98%,1% 90%);
    cursor: pointer;
    transition: all 0.5s ease;
    text-decoration: none;
    white-space: nowrap;
    height: max-content;
    &:hover {
      transform: scale(1.1);
    }
    ${breakpoint('md')`
      position: absolute;
      bottom: -50px;
      left: 0;
      right: 0;
      margin: 0 auto;
      padding: 15px 25px;
      width: max-content;
      height: auto;
    `}
    ${breakpoint('xxl')`
      font-size: 40px;
      padding: 18px 30px;
      img {
        max-width: 280px;
        &.imgBig {
          max-width: 320px;
        }
      }
      span {
        font-size: 35px;
        padding: 15px 25px;
      }
    `}
  }

  ${breakpoint('md')`
    width: 32%;
    margin-top: 0;
    img {
      width: 90%;
      max-width: 230px;
      object-fit: contain;
      object-position: center;
      &.imgBig {
        max-width: 290px;
      }    
    }
  `}
`;
