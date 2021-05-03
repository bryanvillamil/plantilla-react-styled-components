import {
  LOG_IN,
  SET_DID_ASK,
  SET_DID_RATE,
  SET_STAGE,
} from "../actions/actionTypes";

const initialState = {
  isLogged: false,
  userData: {},
  didAsk: false,
  stage: 4,
  didRate: false,
};

const Account = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isLogged: true, userData: action.payload };
    case SET_STAGE:
      return { ...state, stage: action.payload };
    case SET_DID_ASK:
      return { ...state, didAsk: true };
    case SET_DID_RATE:
      return { ...state, didRate: true };
    default:
      return state;
  }
};

export default Account;
