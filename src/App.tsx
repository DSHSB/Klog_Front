import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/common/Login";
import Register from "./components/common/Register";
import Header from "./components/common/Header";
import Main from "./components/common/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Main />}></Route>
        <Route path="/profile" element={<div>profile</div>}></Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
