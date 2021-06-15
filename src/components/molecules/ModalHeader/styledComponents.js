import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const ContentModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  background: rgba(86, 46, 145, .9);
  height: 100%;
  z-index: 99;
  top: 0;
`;

export const ModalClose = styled.div`
  position: absolute;
  z-index: 99;
  top: 5%;
  right: 4%;
  cursor: pointer;
`;

export const ModalBox = styled.div`
  position: relative;
  width: 90%;
  min-height: 400px;
  max-width: 700px;
  background: ${props => props.bg ? `url(${props.bg})` : '#fff'} ;
  border-radius: 30px;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  ${breakpoint('md')`
    width: 50%;
    background-size: contain;
  `}
`;

export const ModalType1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  height: 100%;
  align-content: center;
  h2 {
    color: rgba(86, 46, 145, .9);
    font-size: 30px;
    width: 100%;
    text-align: center;
    margin-bottom: 0;
  }
  img {
    width: 250px;
    object-fit: contain;
  }
`;

export const ModalType2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  position: relative;
  padding: 12px;
  height: 100%;
  width: 85%;
  margin: 0 auto;
  h2 {
    font-family: 'baby';
    color: rgba(86, 46, 145, .9);
    font-size: 30px;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    width: 100%;
    margin-top: 15px;
    h3 {
      width: 100%;
      color: rgba(86, 46, 145, .9);
      font-size: 22px;
      margin-bottom: 0;
      margin-top: 0;
      text-align: center;
    }
    p {
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      color: #777;
      font-size: 18px;
      text-align: center;
      margin-top: 5px;
      margin-bottom: 0;
    }
  }
  ${breakpoint('md')`
    margin-top: 50px;
    h2 {
      font-size: 32px;
    }
    .box {
      width: 42%;
      align-items: center;
      align-content: center;
      h3 {
        font-size: 24px;
      }
      p {
        font-size: 20px;
      }
    }
  `}
  ${breakpoint('xxl')`
    margin-top: 35px;
    h2 {
      font-size: 38px;
      margin-bottom: 10px;
    }
    .box {
      h3 {
        font-size: 27px;
      }
    }
  `}
`;

export const IconLocation = styled.div`
  position: absolute;
  top: -30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: max-content;
  img {
    width: 50px;
  }
  ${breakpoint('md')`
    top: 18px;
    right: 15px;
  `}
  ${breakpoint('xxl')`
    top: 8px;
  `}
`;