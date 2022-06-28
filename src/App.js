import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { isAutheticed } from "./providers/auth";


//Pages
import Login from "./pages/Login/Login";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import Home from "./pages/home/home";
//Import css 
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const Routeprivate = (routa) => {
    return(
      isAutheticed() ?
         routa : (
          <Navigate to="/"></Navigate>
        ) 
    )
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/Register" element={<RegisterUser />}></Route>

        {
          // ROTAS PROTEGIDAS 
        }
        <Route exact path="/home" element={Routeprivate(<Home/>)}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
