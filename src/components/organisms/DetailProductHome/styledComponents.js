import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint'
import fondoAmarillo from '../../../assets/HOME/acuarela-sellos.png'

export const ContentProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  /* ${breakpoint('xxl')`
    width: 30%;
  `} */
`;

export const ProductTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    background: url(${props => props.sombraBg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    width: 80%;
    height: 60%;
    z-index: 1;
  }
`;

export const ProductLeft = styled.div`
  display: flex;
  width: 50%;
  position: relative;
  z-index: 2;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const ProductRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 50%;
  position: relative;
  z-index: 3;
  h2 {
    font-size: 0;
    width: 100%;
    img {
      object-fit: contain;
      width: 95%;
    }
  }
  .content--product {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    position: relative;
    left: -16%;
    margin-top: 40px;
    img {
      width: 56%;
      object-fit: contain;
    }
  }

  .content--desc {
    p {
      width: 70%;
      color: #707070;
      font-size: 35px;
      line-height: 45px;
      font-family: 'bariol regular';
      strong {
        font-family: 'bariol bold';
      }
    }
  }
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
  margin: 50px auto 300px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -60%;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: url(${fondoAmarillo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 180%;
    z-index: 1;
  }
`;

export const ItemProduct = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  max-width: 270px;
  margin: 0 auto;
  width: 90%;
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
      font-size: 16px;
    }
    ${breakpoint('xxl')`
      width: 77%;
      height: 73%;
      h2 {
        font-size: 21px;
        margin-bottom: 8px;
      }
      p {
        font-size: 18px;
      }
    `}
  }

  &:hover {
    .content--text {
      bottom: 10px;
    }
  }
`;


export const ContentSeeMore = styled.div`
  display: flex;
  width: 100%;
  margin: 80px auto 0;
  position: relative;
  z-index: 3;
  justify-content: center;
  align-items: center;
`;