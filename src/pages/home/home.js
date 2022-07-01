
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
        <section className="pag-home">
            <nav className="navigation-home">   
                <div className="container-navigation">
                    <Headerlogotipo></Headerlogotipo>
                    <ul className="list-containers">
                        <li className="rows-list">HOME</li>
                        <li className="rows-list">FILME</li>
                        <li className="rows-list">SÉRIE</li>
                        <li className="rows-list">SAIR</li>
                    </ul>
                </div>
            </nav>
            <div className="img-background-jubotron" style={backgroundImgemBanner}></div>
            <section className="banner">
                <div className="container-banner">
                    <h1 className="title-banner">STANGHER THINGS</h1>
                    <p>Venha conhecer os misteriosa cidade de Hawkins, em indíana. Um lugar cheio de aparições bizarras, segredos de estado, e uma força sombria que vai deixar o mundo invertido.</p>
                    <div className="container-buttons">
                        <button className="button-play">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="30" ><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" /></svg>
                            Assistir
                        </button>
                        <button className="button-information">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="30"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z" /></svg>
                            Mais informações
                        </button>
                    </div>
                </div>
            </section>
            <main className="container-carousel">
                <div className="carousel">
                    <h1 className="title-carousel">Filmes</h1>
                    <div className="carousel-flex"></div>
                </div>
            </main>
            <main className="container-carousel">
                <div className="carousel">
                    <h1 className="title-carousel">Séries</h1>
                    <div className="carousel-flex"></div>
                </div>
            </main>
        </section>
    );
}
export default Home;