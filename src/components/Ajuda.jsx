import { useState } from "react";

import AjudaService from "../services/ajuda-service";

function TopicoAjuda(props) {
  const [status, setstatus] = useState(false);

  return (
    <>
      <li>
        <img
          src={
            status ? "/svg/icone_seta_baixo.svg" : "/svg/icone_seta_direita.svg"
          }
          onClick={() => {
            setstatus((prev) => !prev);
          }}
        ></img>
        {props.titulo}
      </li>
      {status && <span className="duvida">{props.descricao}</span>}
    </>
  );
}

export default function () {
  const lista = AjudaService.obterTopicosAjuda().map((item) => (
    <TopicoAjuda titulo={item.titulo} descricao={item.descricao} />
  ));

  return (
    <main className="main_links">
      <div className="card_links_duvida">
        <div className="titulo">
          <h2>Ajuda / Suporte</h2>
        </div>
        <div className="conteudo">
          <ul>{lista}</ul>
          <div className="contato">
            <span>
              Não conseguiu resolver seu problema? Fale com um de nossos
              consultores:
            </span>
            <a href="https://wa.me/5511999999999" target="_blank">
              <button className="botao_whats">WhatsApp</button>
            </a>
          </div>
        </div>
      </div>
      <div className="logo_links">
        <img src="/img/logo.png" className="castelo"></img>
        <img src="/svg/texto_versalhes_black.svg" className="versalhes"></img>
      </div>
    </main>
  );
}
