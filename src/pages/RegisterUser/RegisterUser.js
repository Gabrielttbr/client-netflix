import React from "react";
import { useState } from "react";


// Componentes 
import { Form, Button } from "react-bootstrap";

//Import css
import "./RegisterUser.css";
import "../Login/Login.css"
// Import img
import netlfix from "../../assets/netflix.png";


function RegisterUser() {
  const [validated, setValidated] = useState(false);

  //Valeus of inputs
  const [name, setName] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword ] = useState();
  const [confirmPassword, setConfirmPassword ] = useState();
  const [cpf, setCpf ] = useState();
  const [cep, setCep ] = useState();
  const [andress, setAndress ] = useState();    


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      alert('Enviar')
    }

    setValidated(true);
  };

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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h1 className="titleNetflix"> Register User</h1>
            {
              //==================================================================================
              //                                    CAMPO EMAIL
              //==================================================================================
            }
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control type="email" placeholder="Enter email"
               minLength={9} maxLength={100} required
               onChange={(e) => setEmail(e.target.value)} />
              <Form.Control.Feedback type="invalid">
                Email inválido.
              </Form.Control.Feedback>
              <Form.Control.Feedback >
                Parece bom.
              </Form.Control.Feedback>
            </Form.Group>
            {
              //==================================================================================
              //                                    CAMPO NOME
              //==================================================================================
            }
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>NOME</Form.Label>
              <Form.Control type="text" placeholder="Name complete please"
               required minLength={10} maxLength={255} 
               onChange={ (e) => setName(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
                Nome inválido.
              </Form.Control.Feedback>
              <Form.Control.Feedback >
                Parece bom.
              </Form.Control.Feedback>
            </Form.Group>
            {
              //==================================================================================
              //                                    CAMPO CPF
              //==================================================================================
            }
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="text"
               maxLength={14} minLength={14} placeholder="CPF" required
               onChange={ (e) => setCpf(e.target.value)} />
              <Form.Control.Feedback type="invalid">
                CPF inválido.
              </Form.Control.Feedback>
            
            </Form.Group>
            {
              //==================================================================================
              //                                    CAMPO CEP
              //==================================================================================
            }
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>CEP</Form.Label>
              <Form.Control type="text" 
              maxLength={9} minLength={9} placeholder="CEP" required 
              onChange={(e) => setCep(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
              CEP inválido.
              </Form.Control.Feedback>
             
            </Form.Group>
            {
              //==================================================================================
              //                                    CAMPO ENDERECO
              //==================================================================================
            }
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>ENDEREÇO</Form.Label>
              <Form.Control type="text"
               maxLength={255} placeholder="endereço" required
               onChange={(e) => { setAndress(e.target.value)}} />
              <Form.Control.Feedback type="invalid">
                Endereço inválido
              </Form.Control.Feedback>
          
            </Form.Group>
            {
              //==================================================================================
              //                                    CAMPO SENHA
              //==================================================================================
            }
            <Form.Group className="mb-3" controlId="formBasicPassword" >
              <Form.Label>SENHA</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" 
              required minLength={3} maxLength={50}
              onChange={(e) => { setPassword(e.target.value)}} />
              <Form.Control.Feedback type="invalid">
                Senha inválida
              </Form.Control.Feedback>
            </Form.Group>
            {
              //==================================================================================  
              //                                    CAMPO CONFIRMAR SENHA
              //==================================================================================
            }
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>CONFIRMA SENHA</Form.Label>
              <Form.Control type="password" placeholder="Confirma senha" 
              required minLength={3} maxLength={50}
              onChange={(e) => setConfirmPassword(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
                Senha inválida
              </Form.Control.Feedback>
          
            </Form.Group>
            <Button type="submit" className="button-enviar">
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
