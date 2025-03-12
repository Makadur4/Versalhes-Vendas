import { Link } from "react-router-dom";
import { useState } from "react";
import ModalSemLogin from "./ModalSemLogin";

export default function Cabecalho() {
  
  const [modal, setModal] = useState(0);

  var componente;

  switch (modal) {
    case 1:
        componente = <ModalSemLogin FuncaoAbrirModal={AbrirModal} FuncaoFechar={FecharModal} />;
        break;
}

function AbrirModal() {
  setModal(1);
}
function FecharModal(){
  setModal(0);
}

  return (
    <header>
      <div className="header">
        <Link to="/">
          <div id="logo">
            <img id="imagem" src="/img/logo.png" />
            <img id="versalhes" src="/svg/texto_versalhes.svg" />
          </div>
        </Link>
        <div id="pesquisa">
          <input
            id="barra_de_pesquisa"
            type="text"
            placeholder="Pesquisar..."
          />
          <img id="lupa" src="/svg/icone_lupa_preto.svg" />
        </div>
        <div id="icones">
            <a onClick={AbrirModal}><img className="icone" src="/svg/icone_perfil_branco.svg" /></a>
          <Link to="/favoritos">
            <img className="icone" src="/svg/icone_coracao_branco.svg" />
          </Link>
          <Link to="/carrinho">
            <img className="icone" src="/svg/icone_carrinho_branco.svg" />
          </Link>
        </div>
      </div>
      {componente}
    </header>
  );
}
