
import React from 'react';

//Components
import Headerlogotipo from '../../components/headerlogotipo/headerlogotipo';

//Components
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

// Auth
import { AuthContext } from '../../providers/auth';

// css
import './home.css';




function Home() {
    const backgroundImgemBanner = {
        background: "url('https://occ-0-1306-2430.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYz0BsIbkTitfbZ2lfSNdsbTtobA0tSeZ71KtMUfA8nQmPE3OzVn_YXT2cpukunsgXi9H66aY0c017hJRNZIIvTi_Ou7A5acIBIG.jpg?r=233')"
    }
    return (
        <section className="backgroundHome">
            <nav className='Navigate'>
                <div className="containerNavigate">
                    <Headerlogotipo className="logotipo" />
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
            <div className="banner" style={backgroundImgemBanner}>
                <div className="Context-img">
                    <div className="containerCentext">  
                        <h1 className="titleBanner"> TITLE</h1>
                        <p className="descriptionBanner">losdaljsdlasdasnas,mnda,mnda,smndsam,asmndas,nda fadb aksd sdbjasd as dhdk</p>
                    </div>
                </div>
            </div>
            <main className="main-home">
                <div className="row-main-home">
                    <h2 className="row-title-carrossel">Filmes</h2>
                    <div className="container-carrousel">
                        
                    </div>
                </div>
                <div className="row-main-home">
                <h2 className="row-title-carrossel">Séries</h2>
                    <div className="container-carrousel">
                        
                    </div>
                </div>
                
            </main>
        </section>
    );
}
export default Home;