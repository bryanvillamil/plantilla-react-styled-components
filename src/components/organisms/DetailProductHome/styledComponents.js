import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint'
import fondoAmarillo from '../../../assets/HOME/acuarela-sellos.png'

export const ContentProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

export const ProductTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -22%;
    right: 0;
    background: url(${props => props.sombraBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    width: 100%;
    height: 90%;
    z-index: 1;
  }
  ${breakpoint('md')`
    &:after {
      bottom: 0;
      width: 80%;
      height: 60%;
      background-size: contain;
    }
  `}
`;

export const ProductLeft = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 2;
  img {
    width: 85%;
    margin: 0 auto;
    object-fit: contain;
  }
  ${breakpoint('md')`
    width: 50%;
    img {
      width: 100%;
      object-fit: contain;
    }
  `}
`;

export const ProductRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  position: relative;
  z-index: 3;
  h2 {
    font-size: 0;
    width: 100%;
    position: relative;
    width: 82%;
    margin: 0 auto;
    img {
      object-fit: contain;
      width: 45%;
    }
  }
  .content--product {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: relative;
    left: -5%;
    top: -160px;
    img {
      width: 56%;
      object-fit: contain;
    }
  }

  .content--desc {
    width: 90%;
    margin: 0 auto;
    p {
      width: 90%;
      margin: 0 auto;
      color: #707070;
      font-size: 24px;
      line-height: 35px;
      font-family: 'bariol regular';
      margin-top: -80px;
      strong {
        font-family: 'bariol bold';
      }
    }
  }
  ${breakpoint('md')`
    width: 50%;
    h2 {
      left: 0;
      img {
        width: 95%;
      }
    }
    .content--product {
      left: -16%;
      top: 0;
      margin-top: 40px;
      justify-content: flex-start;
    }
    .content--desc {
      margin-top: 0;
      width: initial;
      p {
        margin: 0;
        width: 70%;
        font-size: 35px;
        line-height: 45px;
      }
    }
  `}
  ${breakpoint('lg')`
    .content--desc {
      p {
        width: 85%;
        font-size: 28px;
        line-height: 34px;
      }
    }
  `}
  ${breakpoint('xxl')`
    .content--desc {
      p {
        width: 70%;
        font-size: 35px;
        line-height: 45px;
      }
    }
  `}
`;

export const ProductSlide = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 50px auto 60px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -15%;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: url(${fondoAmarillo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  ${breakpoint('md')`
    margin: 50px auto 300px;
    &:after {
      bottom: -60%;
      height: 180%;
      background-size: contain;
    }
  `}
`;

export const ItemProduct = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  max-width: 220px;
  margin: 0 auto;
  width: 90%;
  &.notAnimation {
    .content--text {
      display: none;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content--text {
    position: absolute;
    bottom: -200%;
    top: 0;
    left: 0;
    right: 0;
    width: 75%;
    height: 72%;
    background: rgba(98, 51, 147, .7);
    transition: all  0.5s ease-in-out;
    max-width: 240px;
    margin: auto;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    clip-path: polygon(0 15%,2% 0,10% 2%,15% 0,70% 0,73% 2%,90% 2%,98% 4%,100% 50%,98% 95%,94% 100%,50% 100%,30% 100%,25% 98%,4% 98%,1% 90%);
    padding: 20px;
    h2 {
      color: #fff;
      text-align: center;
      font-family: 'bariol bold';
      margin-bottom: 5px;
      text-transform: uppercase;
      font-size: 18px;
    }
    p {
      color: #fff;
      text-align: center;
      width: 90%;
      margin: 0 auto;
      font-family: 'bariol regular';
      line-height: 1.2;
      font-size: 15px;
    }
    ${breakpoint('xxl')`
      width: 77%;
      height: 73%;
      h2 {
        font-size: 21px;
        margin-bottom: 8px;
      }
      p {
        font-size: 17px;
      }
    `}
  }

  &:hover {
    .content--text {
      bottom: 10px;
    }
  }
  ${breakpoint('md')`
    max-width: 270px;
  `}
`;


export const ContentSeeMore = styled.div`
  display: flex;
  width: 100%;
  margin: 60px auto 0;
  position: relative;
  z-index: 3;
  justify-content: center;
  align-items: center;
  ${breakpoint('md')`
    margin: 80px auto 0;
  `}
`;