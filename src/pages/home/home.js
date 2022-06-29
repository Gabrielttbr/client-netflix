
import React from 'react';

//Components
import Headerlogotipo from '../../components/headerlogotipo/headerlogotipo';

//Components
import { Link } from 'react-router-dom';


// Auth
import { AuthContext } from '../../providers/auth';

// css
import './home.css';



function Home(){
    return (
    <section className="backgroundHome">
        <nav className='Navigate'>
            <div className="containerNavigate">
                <Headerlogotipo className="logotipo"/>
                <ul className='navigate-list'>
                    <li className='navigate-link'>
                        Home
                    </li>
                    <li className='navigate-link'>
                        Séries
                    </li>
                    <li className='navigate-link'>
                        Filmes
                    </li> 
                    <li className='navigate-link' id="sair">
                        Sair
                    </li>
                </ul>
            </div>
        </nav>
    </section>    
    );
}
export default Home;