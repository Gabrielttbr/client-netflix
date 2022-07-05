import React, { useState } from "react";
import { Link } from "react-router-dom";
// COMPONENTES
import { Form, Button, Alert } from "react-bootstrap";
// MAKS
import { cpfMask } from "../maks/cpfMaks";
import { cepMask } from "../maks/cepMaks";

export function RegisterUserForm() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [cpf, setCpf] = useState();
  const [cep, setCep] = useState();
  const [andress, setAndress] = useState();
  const [equalPassword, setEqualPassword] = useState(true);
  const [EmailCpfRegister, setEmailCpfRegister] = useState();
  const [UserRegisterSucess, setUserRegisterSucess] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (confirmPassword != password) {
      return setEqualPassword(false);
    }
    if (form.checkValidity() === true) {
      const bodyForm = {
        nome: name,
        email: email,
        senha: password,
        cpf: cpf,
        cep: cep,
        endereco: andress,
      };
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(bodyForm),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };
      fetch("http://localhost:4000/user/register", requestOptions)
        .then((response) => {
          if (response.status === 200) {
            console.log("Usuário registrado com sucesso");
            return setUserRegisterSucess(true);
          } else if (response.status === 409) {
            console.log("Email ou cpf já cadastrado");
            return setEmailCpfRegister(true);
          } else {
            console.log("Erro no servidor interno");
            return setEmailCpfRegister(true);
          }
        })
        .catch((e) => console.log(e));
    }
    setValidated(true);
  };
  return (
    <div className="containerRegister">
      {!UserRegisterSucess && (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h1 className="titleNetflix"> Register User</h1>
          {
            //==================================================================================
            //                                    CAMPO EMAIL
            //==================================================================================
          }
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>EMAIL</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              minLength={9}
              maxLength={100}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Email inválido.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Parece bom.</Form.Control.Feedback>
          </Form.Group>
          {
            //==================================================================================
            //                                    CAMPO NOME
            //==================================================================================
          }
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NOME</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name complete please"
              required
              minLength={10}
              maxLength={255}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Nome inválido.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Parece bom.</Form.Control.Feedback>
          </Form.Group>
          {
            //==================================================================================
            //                                    CAMPO CPF
            //==================================================================================
          }
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              type="text"
              maxLength={14}
              minLength={14}
              placeholder="CPF"
              required
              onChange={(e) => setCpf(cpfMask(e.target.value))}
              value={cpf}
            />
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
            <Form.Control
              type="text"
              maxLength={9}
              minLength={9}
              placeholder="CEP"
              required
              onChange={(e) => setCep(cepMask(e.target.value))}
              value={cep}
            />
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
            <Form.Control
              type="text"
              maxLength={255}
              placeholder="endereço"
              required
              onChange={(e) => {
                setAndress(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Endereço inválido
            </Form.Control.Feedback>
          </Form.Group>
          {
            //==================================================================================
            //                                    CAMPO SENHA
            //==================================================================================
          }
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>SENHA</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              required
              minLength={3}
              maxLength={50}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
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
            <Form.Control
              type="password"
              placeholder="Confirma senha"
              required
              minLength={3}
              maxLength={50}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Senha inválida
            </Form.Control.Feedback>
          </Form.Group>

          {// Verifica se a senhas digitadas são iguais
          !equalPassword && (
            <Alert variant="danger">password no are equal</Alert>
          )}
          {// Verifica se o email ou cpf já foram cadastrado
            EmailCpfRegister && (

            <Alert variant="danger">Email o cpf já cadastrado</Alert>
          )}
          <Button type="submit" className="button-enviar">
            CADASTRAR
          </Button>
        </Form>
      )}
      {UserRegisterSucess && (
        <Alert variant='success'>
          Usuário cadastrado com sucesso vá para dela de ..
          <Link to="/login">login</Link>
        </Alert>
      )}
    </div>
  );
}
