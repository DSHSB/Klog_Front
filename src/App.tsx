import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>home</div>}></Route>
        <Route path="/profile" element={<div>profile</div>}></Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
