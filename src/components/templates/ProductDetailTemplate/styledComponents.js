import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import fondoAmarillo from '../../../assets/HOME/acuarela-sellos.png';
import boxWhite from '../../../assets/PRODUCTOS/shape-card-02.svg';

export const ProductDetail = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
  justify-content: flex-end;
  background-color: #fff;
  padding-top: 50px;
  ${breakpoint('xxl')`
    padding-top: 100px;
  `}
`;

export const ProductDetailTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  min-height: 60vh;
  margin: 0 auto;
  ${breakpoint('xxl')`
    padding-bottom: 60px;
  `}
`;

export const ProductDetailLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  padding: 10px 20px;
  img {
    width: 80%;
    margin: 0;
    max-width: 400px;
  }
  .description {
    width: 75%;
    margin: 0 auto;
    p {
      color: rgba(112, 112, 112, 1);
      font-size: 25px;
      line-height: 35px;
      strong {
        font-family: 'bariol bold';
      }
    }
  }
  ${breakpoint('xxl')`
    img {
      max-width: 600px;
    }
    .description {
      p {
        font-size: 35px;
        line-height: 45px;
      }
    }
  `}
`;

export const ProductDetailRight = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 130px;
  width: 45%;
  height: 100%;
  img {
    width: 80%;
    object-fit: contain;
  }
`;

export const ProductSlide = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 50px auto 80px;
  position: relative;
  padding-bottom: 80px;
  &:after {
    content: '';
    position: absolute;
    bottom: -35%;
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
  ${breakpoint('xxl')`
    margin: 50px auto 180px;
    padding-bottom: 0;
  `}
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


export const ContentMoreProducts = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  height: 100vh;
  .content--more {
    min-height: 320px;
    max-height: 340px;
    position: relative;
    background: url(${boxWhite});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex !important;
    flex-wrap: wrap;
    align-content: center;
    img {
      width: 65%;
      margin: 0 auto;
      object-fit: contain;
      position: relative;
      top: -40px;
    }
    .content--text {
      width: 60%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      top: -40px;
      p {
        color: rgba(86, 46, 145, 1);
        font-size: 32px;
        font-family: 'bariol bold';
        line-height: 38px;
        text-align: center;
        width: 90%;
        margin: 0;
      }
    }
  }
  ${breakpoint('xxl')`
    height: 70vh;
  `}
`;

export const TitleMoreProducts = styled.h2`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: 'baby';
  font-size: 55px;
  color: rgba(86, 46, 145, 1);
  text-transform: uppercase;
  margin: 0 0 50px;
  ${breakpoint('xxl')`
    font-size: 65px;
  `}
`;
