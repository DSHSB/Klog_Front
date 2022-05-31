import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import "./index.css";

import { StoreProvider } from "store/store";

const App = () => {
  const { login } = useSelector((state: any) => state.user);
  return (
    <div className="container">
      <div>Name: host {login ? "sdf" : "sf"}</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
