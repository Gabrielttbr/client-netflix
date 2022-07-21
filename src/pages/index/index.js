import React from "react";
import { Button } from "react-bootstrap";
// Import Components
import Headerlogotipo from "../../components/headerlogotipo/headerlogotipo";

// Import css
import "./index.css";

function index() {
  return (
    <>
      <div className="bg-index-apresentacao"></div>
      <section className="container-index-image">
        <div className="container-father">
          <div className="menu-horizontal">
            <Headerlogotipo></Headerlogotipo>
            <Button variant="danger" className="button-entrar-apresentacao">
              entrar
            </Button>
          </div>
          <div className="jubotron-apresentacao">
            <h1 className="title-apresentacao">
              Filmes, séries e muito mais. Sem limites.
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
      </section>
    </>
  );
}
export default index;
