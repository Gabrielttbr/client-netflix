import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//Pages
import Login from "./pages/Login/Login";
import RegisterUser from "./pages/RegisterUser/RegisterUser"
//Import css 
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/Register" element={<RegisterUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
