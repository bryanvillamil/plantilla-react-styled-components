import { combineReducers, createStore } from "redux";
import UI from "./reducers/UI";
import Account from "./reducers/Account";

const rootReducer = combineReducers({ Account, UI });
const store = createStore(rootReducer);

export default store;
