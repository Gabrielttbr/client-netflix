import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { IsAutheticed } from "./components/authentication/auth";


//Pages
import Login from "./pages/Login/Login";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import Home from "./pages/home/home";
//Import css 
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const Routeprivate = (routa) => {

  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/Register" element={<RegisterUser />}></Route>

        {
          // ROTAS PROTEGIDAS 
        }
        <Route exact path="/home" element={ IsAutheticed() ?
         <Home/> : (
          <Navigate to="/login"></Navigate>
        )  }>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
