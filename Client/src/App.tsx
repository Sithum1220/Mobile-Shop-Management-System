import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./view/pages/Login/Login";
import {Register} from "./view/pages/Register/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" Component={Login}></Route>
              <Route path="/register" Component={Register}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
