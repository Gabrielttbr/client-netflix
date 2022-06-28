import React from 'react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';



// Bootstrap
import { Alert } from 'react-bootstrap';
// css
import './Login.css'

// Image
import netlfix from '../../assets/netflix.png';
import { AuthContext } from '../../providers/auth';
function Login(){
    // eslint-disable-next-line no-unused-vars
    const { user, setUser } = React.useContext(AuthContext)
    const [Email, setEmail] = useState();
    const [Senha, setSenha] = useState();
    const [unauthorized, setUnauthorized] = useState();
    const [userOk, setUserOk ] = useState();
    
     const handleInputChange = (event) => {
        event.preventDefault();
        event.stopPropagation();
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
                console.log(response.json().then( (data) => { setUser(data)}) )
                return console.log("Entrou com sucesso");
            }
        })
        .catch((e) => { 
            console.log(e)
        })
     
        
    }
    if(userOk){
        return (
            <Navigate to='/home'></Navigate>
        )
    }
    console.log(user)
    return(
    <div className="BodyContainer">
        
        <div className="backgroundrgba">
            <header className="header">
                <a className="navbar-brand marginlogotipo" href='#'>
                    <img src={netlfix} className="logotipo" alt="Logo netflix"height="45px"></img>
                </a>
            </header>
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
                        </form>
                    </main>
                    <footer>
                        <p>Novo por aqui? <Link to="/register">Assine agora.</Link></p>
                        <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.</p>
                    </footer>
                </section>
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
    )
}
export default Login;