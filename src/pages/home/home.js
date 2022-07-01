import React from "react";

//Components
import Headerlogotipo from "../../components/headerlogotipo/headerlogotipo";

//Components
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

// Auth
import { AuthContext } from "../../providers/auth";

// css
import "./home.css";

function Home() {
  const backgroundImgemBanner = {
    background:"url('https://occ-0-1306-2430.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYz0BsIbkTitfbZ2lfSNdsbTtobA0tSeZ71KtMUfA8nQmPE3OzVn_YXT2cpukunsgXi9H66aY0c017hJRNZIIvTi_Ou7A5acIBIG.jpg?r=233')",

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
            <li className="rows-list" id="sair">
              SAIR
            </li>
          </ul>
        </div>
      </nav>
      <div className="img-background-jubotron"style={backgroundImgemBanner}></div>
      <div className="background-preto"></div>
      <section className="banner">
        <div className="container-banner">
          <h1 className="title-banner">STANGHER THINGS</h1>
          <p className="description-banner">
            Venha conhecer os misteriosa cidade de Hawkins, em indíana. Um lugar
            cheio de aparições bizarras, segredos de estado, e uma força sombria
            que vai deixar o mundo invertido.
          </p>
          <div className="container-buttons">
            <button className="button-play">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height="30"
              >
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
              </svg>
              Assistir
            </button>
            <button className="button-information">
              <svg
                xmlns="http://www.w3.org/2000/svg"
         
                height="30"
                fill="currentColor"
                class="bi bi-info-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
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
