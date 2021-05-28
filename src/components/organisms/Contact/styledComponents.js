import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

export const ContenContact = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  position: relative;
  min-height: 70vh;
  margin-top: 40px;
  margin-bottom: 100px;
  ${breakpoint('xxl')`
    min-height: 80vh;
  `}
`;

export const ContactLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 80%;
    object-fit: contain;
  }
  ${breakpoint('md')`
    width: 50%;
    img {
      width: 70%;
    }
  `}
`;

export const ContactRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  padding-top: 20px;
  position: relative;
  ${breakpoint('md')`
    width: 50%;
  `}
  ${breakpoint('xxl')`
    padding-top: 40px;
  `}
`;

export const ContactDescription = styled.p`
  display: flex;
  width: 85%;
  color: rgba(97, 97, 97, .7);
  font-size: 24px;
  line-height: 35px;
  font-family: 'bariol regular';
  margin: 10px auto 0;
  ${breakpoint('md')`
    font-size: 25px;
    line-height: 35px;
    margin: 10px 0 0;
  `}
  ${breakpoint('xxl')`
    width: 75%;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 35px;
    line-height: 45px;
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  margin: 0 auto;
  position: relative;
  min-height: 260px;
  .row {
    width: 100%;
    margin-top: 40px;
    position: relative;
    input {
      padding: 10px 25px; 
      width: 85%;
      border: 2px solid rgba(224, 224, 224, 1);
      height: 38px;
      background: #F5F5F5;
      color: rgba(97, 97, 97, 0.5);
      font-size: 25px;
      font-family: 'bariol regular';
      clip-path: polygon(0 15%,2% 0,10% 2%,15% 0,70% 0,73% 2%,90% 2%,98% 4%,100% 50%,98% 95%,94% 100%,50% 100%,30% 100%,25% 98%,4% 98%,1% 90%);
      clip-path: polygon(81% 55%10% 38%, 8% 42%, 71% 57%, 8% 51%, 8% 51%, 6% 56%, 6% 56%, 9% 58%, 9% 58%, 85% 36%, 86% 53%, 80% 33%, 81% 55%, 62% 33%, 62% 33%, 58% 34%, 58% 34%, 53% 33%, 53% 33%);
      ::placeholder {
        color: rgba(97, 97, 97, 0.5);
      }
      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #562E91;
      color: #fff;
      font-family: 'bariol bold';
      font-size: 28px;
      padding: 12px 15px;
      width: 85%;
      max-width: 180px;
      border: none;
      clip-path: polygon(0 15%,2% 0,10% 2%,15% 0,70% 0,73% 2%,90% 2%,98% 4%,100% 50%,98% 95%,94% 100%,50% 100%,30% 100%,25% 98%,4% 98%,1% 90%);
      cursor: pointer;
      transition: all 0.5s ease;
      text-decoration: none;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  ${breakpoint('md')`
    width: 65%;
    margin: 0;
    .row {
      input {
        width: calc(100% - 30px);
      }
      button {
        max-width: 120px;
      }
    }
  `}
  ${breakpoint('xxl')`
    .row {
      margin-top: 50px;
      input {
        width: calc(100% - 70px);
        height: 50px;
        font-size: 32px;
        padding: 10px 35px; 
      }
      button {
        font-size: 32px;
        padding: 14px 15px;
        max-width: 130px;
      }
    }
  `}
`;

export const SpanError = styled.span`
  color: red;
  position: absolute;
  bottom: -20px;
  left: 0px;
  /* text-transform: uppercase; */
  font-size: 14px;
  letter-spacing: 0.5px;
`;

export const BoxTermsCheck = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  .check {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    position: relative;
    width: 100%;
    input {
      width: 16px;
      height: 16px;
      clip-path: none;
    }
    label {
      margin-left: 5px;
      font-family: 'bariol bold';
      color: #562E91;
    }
    .error--term {
      margin-left: 8px;
      position: absolute;
      top: -20px;
      left: -5px;
      font-size: 14px;
      color: red;
      width: 100%;
    }
  }
  .text {
    min-height: 130px;
    max-height: 160px;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    span {
      color: rgba(82, 81, 81, 1);
    }
    p {
      font-family: 'bariol regular';
      color: rgba(97,97,97,.7);
      display: flex;
      flex-wrap: wrap;
      word-break: break-word;
      margin-bottom: 0;
      line-height: 20px;
      a {
        margin-left: 5px;
        color: #562E91;
      }
    }
  }
`;
