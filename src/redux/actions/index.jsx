import {
  LOG_IN,
  SET_DID_ASK,
  SET_DID_RATE,
  SET_STAGE,
  SHOW_ASK_SAMPLE,
  SHOW_ERROR,
  SHOW_LOGIN,
  SHOW_RATE,
  SHOW_SIGNUP,
  SHOW_STAGE,
  TOGGLE_LOADER,
  DATA_PRODUCT,
} from "./actionTypes";

//-------ACCOUNT

export function logIn(payload) {
  return { type: LOG_IN, payload };
}

export function setStage(payload) {
  return { type: SET_STAGE, payload };
}

export function setDidAsk() {
  return { type: SET_DID_ASK };
}

export function setDidRate() {
  return { type: SET_DID_RATE };
}

//-----------UI

export function toggleLoader() {
  return { type: TOGGLE_LOADER };
}

export function showLogin() {
  return { type: SHOW_LOGIN };
}

export function showSignUp() {
  return { type: SHOW_SIGNUP };
}

export function showAskSample() {
  return { type: SHOW_ASK_SAMPLE };
}

export function showStage() {
  return { type: SHOW_STAGE };
}

export function showRate() {
  return { type: SHOW_RATE };
}

export function showError(payload) {
  return { type: SHOW_ERROR, payload };
}

export function dataProduct(data) {
  return { type: DATA_PRODUCT, data };
}
