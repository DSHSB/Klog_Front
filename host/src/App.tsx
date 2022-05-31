import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import { StoreProvider } from "store/store";

const App = () => {
  const { login } = useSelector((state: any) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>s</div>} />
        <Route path="/profile" element={<div>a</div>} />
        <Route path="/mypost" element={<div>b</div>} />
        <Route path="/post/*" element={<div>sdf</div>}>
          <Route path=":id" element={<div>sef</div>} />
        </Route>
        <Route path="/*" element={<div>not</div>} />
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
