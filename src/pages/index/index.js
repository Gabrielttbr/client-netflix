import React from "react";
import { Button } from "react-bootstrap";
// Import Components
import Footer from "../../components/footer/footer"
import Headerlogotipo from "../../components/headerlogotipo/headerlogotipo";
//Imgs
import tv from '../../assets/tv (1).png'
import infantil from '../../assets/infantil.png'
import mobile from '../../assets/mobile-0819.jpg'


// Import css
import "./index.css";

function index() {
  const style = {
    margin: 0
  }
  return (
    <>
      <div className="bg-index-apresentacao"></div>
      <section className="container-index-image">
        <div className="container-father">
          <div className="menu-horizontal-index">
            <Headerlogotipo className="logotipo-index"></Headerlogotipo>
            <Button variant="danger" className="button-entrar-apresentacao">
              entrar
            </Button>
          </div>
          <div className="border-index">
            <div className="jubotron-apresentacao">
              <h1 className="title-apresentacao">
                Filmes, séries e muito  <br></br>  mais. Sem limites.
              </h1>
              <h2 className="sub-title-apresentacao">
                Assista onde quiser. Cancele quando quiser.
              </h2>
              <p className="text-apresentacao">
                {" "}
                Pronto para assistir? Para criar ou reiniciar sua assinatura?.
              </p>
              <Button variant="danger" className="button-cadastrar-apresentacao">
                Vamos começar
              </Button>
            </div>
          </div>
        </div>
        <div className="hr-index"></div>
        <div className="container-apresetation-index">
          <div className="conteudo-index">
            <h1 className="title-conteudo-container-index">Crie perfis para crianças.</h1>
            <p className="text-conteudo-container-index">Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
          </div>
          <div className="imagem-conteudo-index">
            <img className="img-conteudo" src={infantil} alt="infantil"></img>
          </div>
        </div>
        <div className="hr-index"></div>

        <div className="container-apresetation-index">
          <div className="imagem-conteudo-index">
            <img className="img-conteudo" src={tv} alt="tv"></img>
          </div>
          <div className="conteudo-index">
            <h1 className="title-conteudo-container-index">Aproveite na TV.</h1>
            <p className="text-conteudo-container-index">Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
          </div>
        </div>
        <div className="hr-index"></div>

        <div className="container-apresetation-index">
        <div className="conteudo-index">
            <h1 className="title-conteudo-container-index">Baixe séries para assistir offline.</h1>
            <p className="text-conteudo-container-index">Salve seus títulos favoritos e sempre tenha algo para assistir.</p>
          </div>
          <div className="imagem-conteudo-index">
            <img className="img-conteudo" src={ mobile} alt="mobile"></img>
          </div>
        </div>
        <Footer  style={style}className="footer-index"></Footer>
      </section>
    </>
  );
}
export default index;
