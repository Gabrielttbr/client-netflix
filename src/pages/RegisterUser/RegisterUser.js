import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

//Import css
import "./RegisterUser.css";
import "../Login/Login.css"
// Import img
import netlfix from "../../assets/netflix.png";
function RegisterUser() {
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
          <Form>
            <h1 className="titleNetflix"> Register User</h1>
            {
              //==================================================================================
              //                                    CAMPO EMAIL
              //==================================================================================
            }
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            {
              //==================================================================================
              //                                    CAMPO NOME
              //==================================================================================
            }
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>NOME</Form.Label>
              <Form.Control type="text" placeholder="Name complete please" required minLength={10} />
            </Form.Group>
            {
              //==================================================================================
              //                                    CAMPO CPF
              //==================================================================================
            }
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="text" maxLength={14} placeholder="cpf" required/>
            </Form.Group>
            {
              //==================================================================================
              //                                    CAMPO CEP
              //==================================================================================
            }
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>CEP</Form.Label>
              <Form.Control type="text" maxLength={9} placeholder="cpf" required />
            </Form.Group>
            {
              //==================================================================================
              //                                    CAMPO ENDERECO
              //==================================================================================
            }
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>ENDEREÇO</Form.Label>
              <Form.Control type="text" maxLength={255} placeholder="cpf" required />
            </Form.Group>
            {
              //==================================================================================
              //                                    CAMPO SENHA
              //==================================================================================
            }
            <Form.Group className="mb-3" controlId="formBasicPassword" >
              <Form.Label>SENHA</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" required />
            </Form.Group>
            {
              //==================================================================================
              //                                    CAMPO CONFIRMAR SENHA
              //==================================================================================
            }
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>CONFIRMA SENHA</Form.Label>
              <Form.Control type="password" placeholder="Confirma senha" required/>
            </Form.Group>
            <Button  type="submit"  className="button-enviar">
              CADASTRAR
            </Button>
          </Form>
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
