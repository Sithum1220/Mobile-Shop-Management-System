import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./view/pages/Login/Login";
import {Register} from "./view/pages/Register/Register";
import {DefaultLayout} from "./view/common/DefaultContent/DefaultLayout";
import {MainContent} from "./view/common/MainContent/MainContent";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/*" element={<DefaultLayout />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
