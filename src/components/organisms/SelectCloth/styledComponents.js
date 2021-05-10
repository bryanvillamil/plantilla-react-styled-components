import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import { Link } from 'react-router-dom'

export const ContentIngredients = styled.section`
  display: flex;
  width: 100%;
  position: relative;
`;

export const WrapperBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin: 0 auto 50px;
  position: relative;
  ${breakpoint('md')`
    margin: 0 auto 110px;
  `}
  ${breakpoint('xxl')`
    width: 72%;
    margin: 0 auto 70px;
  `}
`;

export const Box = styled(Link)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  text-decoration: none;
  margin-bottom: 35px;
  img {
    width: 40%;
    max-width: 150px;
    object-fit: contain;
    object-position: center;
  }
  p {
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: 'bariol regular';
    font-size: 20px;
    width: 58%;
    flex-wrap: wrap;
    align-content: center;
    margin-left: 5px;
    strong {
      font-family: 'bariol bold';
      margin-left: 5px;
    }
  }
  ${breakpoint('md')`
    width: 33%;
    margin-bottom: 0;
    img {
      width: 90%;
      max-width: 220px;
    }
    p {
      width: 85%;
      padding: 15px 12px;
      font-size: 23px;
      align-content: flex-start;
      text-align: center;
      margin-left: 0;
    }
  `}
  ${breakpoint('lg')`
    img {
      max-width: 250px;
      &.imgBig {
        max-width: 320px;
      }
    }
    p {
      font-size: 25px;
      padding: 10px 10px;
    }
  `}
  ${breakpoint('xxl')`
    img {
      max-width: 250px;
      &.imgBig {
        max-width: 320px;
      }
    }
    p {
      font-size: 25px;
      padding: 10px 10px;
    }
  `}
`;
