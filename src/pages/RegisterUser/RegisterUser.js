import React from "react";
import { useState } from "react";


// Componentes 
import { Form, Button, Alert } from "react-bootstrap";
import { RegisterUserForm } from '../../components/registerUserForm/RegisterUserForm'


// Maks
import { cpfMask } from "../../components/maks/cpfMaks";
import { cepMask } from "../../components/maks/cepMaks";
//Import css
import "./RegisterUser.css";
import "../Login/Login.css"
// Import img
import netlfix from "../../assets/netflix.png";


function RegisterUser() {
  const [validated, setValidated] = useState(false);

  //Valeus of inputs

  const [erroEmailCpfRegister, setErroEmailCpfRegister]  = useState(false);

  

  return (
    <div className="BodyContainer containerMax">
      <div className="backgroundrgba containerMax">
        <header className="header">
          <a className="navbar-brand marginlogotipo" href="#">
            <img
              src={netlfix}
              className="logotipo"
              alt="Logo netflix"
              height="45px"
            ></img>
          </a>
        </header>
        <main className="MainRegister">
          <RegisterUserForm></RegisterUserForm>
       
        </main>
        <footer className="footer">
          <p className="TitleFooter">Dúvidas? ligue 0800 591 8942</p>
          <div className="ListFooter">
            <ul>
              <li>Perguntas frequentes</li>
              <li>Privacidade</li>
              <li>Centro de ajuda</li>
              <li>Preferências de cookies</li>
              <li>Termos de uso</li>
              <li>informações comporativas</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default RegisterUser;
