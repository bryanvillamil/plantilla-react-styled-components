import {
  SHOW_ASK_SAMPLE,
  SHOW_ERROR,
  SHOW_LOGIN,
  SHOW_RATE,
  SHOW_SIGNUP,
  SHOW_STAGE,
  TOGGLE_LOADER,
  DATA_PRODUCT
} from "../actions/actionTypes";

const initialState = {
  showLoader: false,
  showLogin: false,
  showSignUp: false,
  showAskSample: false,
  showStage: false,
  showRate: false,
  showError: "",
  dataProduct: {}
};

const UI = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADER:
      return { ...state, showLoader: !state.showLoader };
    case SHOW_LOGIN:
      return { ...state, showLogin: !state.showLogin };
    case SHOW_SIGNUP:
      return { ...state, showSignUp: !state.showSignUp };
    case SHOW_ASK_SAMPLE:
      return { ...state, showAskSample: !state.showAskSample };
    case SHOW_STAGE:
      return { ...state, showStage: !state.showStage };
    case SHOW_RATE:
      return { ...state, showRate: !state.showRate };
    case SHOW_ERROR:
      return { ...state, showError: action.payload };
    case DATA_PRODUCT:
      return { ...state, dataProduct: action.data };
    default:
      return state;
  }
};

export default UI;
