import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./view/pages/Login/Login";
import {Register} from "./view/pages/Register/Register";
import {Dashboard} from "./view/pages/Dashboard/Dashboard";
import {DefaultLayout} from "./view/common/DefaultContent/DefaultLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" Component={Login}></Route>
              <Route path="/register" Component={Register}></Route>
              <Route path="/home" Component={DefaultLayout}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
