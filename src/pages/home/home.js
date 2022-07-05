import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { Navigate } from "react-router-dom";

//COMPONENTES
import Headerlogotipo from "../../components/headerlogotipo/headerlogotipo";
import Footer from "../../components/footer/footer";
// AUTHETICATION
import { AuthContext } from "../../providers/auth";
// CSS
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./home.css";

function Home() {
  const { user, setUser } = React.useContext(AuthContext);
  const [banner, setBanner] = useState();
  const [filme, setFilme] = useState([]);
  const [serie, setSerie] = useState([]);
  const [UrlBackground, setUrlBackground] = useState();
  const [backActive, setBackActive] = useState();


  //================================================================
  //                    REQUEST FILME
  //================================================================

  useEffect(() => {
    let myHeadersFilme = new Headers();
    myHeadersFilme.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );

    let requestOptionsFIlme = {
      method: "GET",
      headers: myHeadersFilme,
      redirect: "follow",
    };
    fetch("http://localhost:4000/filme", requestOptionsFIlme)
      .then((response) => response.json())
      .then((result) => {
        setFilme(result.response);
      })
      .catch((error) => console.log("error", error));
  }, []);
  //=================================================================
  //                      REQUEST BANNER
  //=================================================================
  useEffect(() => {
    // REQUEST DO BANNER
    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("http://localhost:4000/banner", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setBanner(result);
        setUrlBackground(result.response[0].imagem);
      })
      .catch((error) => console.log("error", error));
  }, []);
  //====================================================================================
  //                           REQUEST SERIES
  //=====================================================================================
  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer "+localStorage.getItem('token')
    );

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:4000/serie", requestOptions)
      .then((response) => response.json())
      .then((result) => setSerie(result.response))
      .catch((error) => console.log("error", error));
  }, []);

  //==============================================================
  //      FUNÇÃO RESPONSÁVEL POR DESLOGAR O USUÁRIO.
  //      NELA E RESETADO TODO O LOCALSTORE DO TOKEN.
  //      ELA SETA O CONTEXTO DO USUÁRIO COMO OBIJETO VÁZIO.
  //==========================================================
  const sairUser = async () => {
    await localStorage.setItem('token', '');
    await setUser({});
    return(
      <Navigate to="/login"></Navigate>
    )
  }

  
  // ==================================================================
  //      FUNÇÃO RESPONSÁVEL POR OBSERVAR O EVENTO SCRUM.
  //      TODAVIA QUE O EVENTO E DISPARADO ELE SETA O BACKGROUND DO MENU
  // ===================================================================     
  document.addEventListener("scroll", (e) => {
    setBackActive(true);
  });
  // ===============================================================
  //             ESSA VARIÁVEL SETA O BACKGROUND DO banner
  // ===============================================================
  const backgroundImgemBanner = {
    background: `url(${UrlBackground})`,
  };

  // ===============================================================================
  //      CONDIÇÃO RESPONSÁVEL POR VERIFICAR SE OCORREU TODAS AS REQUISIÇÕES
  // ================================================================================= 
  if (filme != undefined && banner != undefined && serie != undefined) {
    return (
      <section className="pag-home">
        <nav
          className={`navigation-home ${
            backActive === true ? "background-black" : ""
          }`}
        >
          <div className="container-navigation">
            <Headerlogotipo></Headerlogotipo>
            <ul className="list-containers">
              <li className="rows-list" id="home">
                HOME
              </li>
              <li className="rows-list"><a className="link-carrousel" href="#Filme">FILME</a></li>
              <li className="rows-list"><a className="link-carrousel" href="#Serie">SÉRIE</a></li>
              <li className="rows-list" id="sair" onClick={sairUser}>
                SAIR
              </li>
            </ul>
          </div>
        </nav>
        <div
          className="img-background-jubotron"
          style={backgroundImgemBanner}
        ></div>
        <div className="background-preto"></div>
        <section className="banner">
          <div className="container-banner">
            <h1 className="title-banner">{banner.response[0].titulo}</h1>
            <p className="description-banner">{banner.response[0].descricao}</p>
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
                  className="bi bi-info-circle"
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
        <section className="AllCarousel">
          <main className="container-carousel" id="Filme">
            <h1 className="title-carousel">Filmes</h1>
            <div className="carousel">
              <OwlCarousel className="owl-theme" loop margin={2} nav>
                {filme.map((item) => (
                  <div className="item" key={item.id}>
                    <img src={item.imagem} alt={item.titulo} />
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </main>
          <main className="container-carousel" id="Serie">
            <h1 className="title-carousel">Séries</h1>
            <div className="carousel">
              <OwlCarousel className="owl-theme" loop margin={2} nav>
              {serie.map((item) => (
                  <div className="item" key={item.id}>
                    <img src={item.imagem} alt={item.titulo} />
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </main>
        </section>
        <div className="footer-home">
          <Footer />
        </div>
      </section>
    );
  } else {
    return <p>loading...</p>;
  }
}
export default Home;
