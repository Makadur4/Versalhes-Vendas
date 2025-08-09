import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import ModalSemLogin from "./ModalSemLogin";

export default function Cabecalho(props) {
  const [modal, setModal] = useState(0);

  const navigate = useNavigate();

  const componente =
    modal == 1 ? (
      <ModalSemLogin abrirModal={abrirModal} fecharModal={fecharModal} />
    ) : null;

  function abrirModal() {
    setModal(1);
  }
  function fecharModal() {
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
            value={props.pesquisa}
            onChange={(e) => {
              props.setPesquisa(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/pesquisa?p=${encodeURIComponent(props.pesquisa)}`);
              }
            }}
          />
          <img id="lupa" src="/svg/icone_lupa_preto.svg" />
        </div>
        <div id="icones">
          <a onClick={abrirModal}>
            <img className="icone" src="/svg/icone_perfil_branco.svg" />
          </a>
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
