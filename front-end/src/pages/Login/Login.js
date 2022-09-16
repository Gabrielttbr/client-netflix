import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
// COMPONENTES
import Headerlogotipo from '../../components/headerlogotipo/headerlogotipo';
import Footer from '../../components/footer/footer';
// CSS
import './Login.css'
// AUTHENTICATION
import { AuthContext } from '../../providers/auth';
function Login(){
    const { user, setUser } = React.useContext(AuthContext);
    const [Email, setEmail] = useState();
    const [Senha, setSenha] = useState();
    const [unauthorized, setUnauthorized] = useState();
    const [userOk, setUserOk ] = useState();
    const [erro500, setErro500] = useState(); 
    //=================================================================
    //        FUNÇÃO RESPONSÁVEL POR ENVIAR O POST DO FORM 
    //=================================================================
     const handleInputChange = (event) => {
        event.preventDefault();
        event.stopPropagation();
        // OBJETO COM OS VALORES DO CAMPO DO INPUTS DO FORM 
        const bodyFront = {
            email: Email,
            senha: Senha
        }
        const requestOptions = {
            method: "POST",
            body: JSON.stringify(bodyFront),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }
        fetch('http://localhost:4000/user/login',requestOptions)
        .then((response) => { 
            if(response.status === 401){
                setUnauthorized(true);
                return console.log("Email ou senha incorreto");
            }else if(response.status === 200){
                setUserOk(true);
                response.json().then( (data) => { 
                    localStorage.setItem('token', data.token) 
                    setUser(data)
                }) 
            }else{
                setErro500(true)
            }
        })
        .catch((e) => { 
            console.log(e)
        })
    }
    //==========================================================================================
    //     REDIRECIONA PARA PÁGINA HOME SE O USUÁRIO FOR LOGADO COM SUCESSO
    //==========================================================================================
    if(userOk){
        return (
            <Navigate to='/home'></Navigate>
        )
    }
    return(
    <div className="BodyContainer">
        
        <div className="backgroundrgba">
            <Headerlogotipo navigate="/login" />
            <main className="main">
                <section>
                    <header>
                        <h1 className='titleNetflix'> Entrar</h1>
                    </header>
                    <main>
                        <form  onSubmit={handleInputChange} >
                            <input type="text" placeholder="Email ou número de telefone" onChange={(e) => setEmail(e.target.value)} className="input-login"></input>
                            <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}></input>
                            <button type="submit" className="button-enviar">Enviar </button>
                            <a href="#" className="Precisa">Precisa de ajuda?</a>
                            {unauthorized && (
                                <Alert  variant="danger">Email ou senha incorreto</Alert>
                            ) }
                            {erro500 && (
                                <Alert  variant="danger">Erro no servidor interno</Alert>
                            )

                            }
                        </form>
                    </main>
                    <footer>
                        <p>Novo por aqui? <Link to="/register">Assine agora.</Link></p>
                        <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.</p>
                    </footer>
                </section>
            </main>
        <Footer/>
        </div>
    </div>    
    )
}
export default Login;