import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import user from "./reducer/user";
import React from "react";

const rootReducer = combineReducers({
  user,
});

const store = createStore(rootReducer);

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default rootReducer;
