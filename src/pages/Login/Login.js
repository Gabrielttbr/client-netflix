import React from 'react';

// css
import './Login.css'

// Image
import netlfix from '../../assets/netflix.png';
function Login(){
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
                        <h1> Entrar</h1>
                    </header>
                    <main>
                        <form>
                            <input type="text" placeholder="Email ou número de telefone"></input>
                            <input type="text" placeholder="Senha"></input>
                            <button type="submit" className="buton-enviar">Enviar </button>
                            <a href="#" className="Precisa">Precisa de ajuda?</a>
                        </form>
                    </main>
                    <footer>
                        <p>Novo por aqui? <a className="link" href="#">Assine agora.</a></p>
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