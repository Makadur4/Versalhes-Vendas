import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import ListaProdutos from "./lista-produtos";
import ListaFavoritos from "./lista-favoritos";
import Filtros from "./filtros";

export default function (props) {
  const location = useLocation();
  const parametros = new URLSearchParams(location.search);
  const pesquisa = parametros.get("p");

  const [filtros, setFiltros] = useState({});

  useEffect(() => {
    props.setPesquisa("");
  }, [props.secao, pesquisa]);

  let banner;
  let titulo;
  let filtro;
  let lista;

  if (props.secao == "") {
    banner =
      props.pesquisa ?? "" == "" ? (
        <div id="banner">
          <img id="imagem_banner" src="/img/banner.png" />
        </div>
      ) : null;

    titulo = pesquisa ?? "" != "" ? (titulo = <h1>{`Resultados para '${pesquisa}'`}</h1>) : null;

    lista = <ListaProdutos pesquisa={pesquisa} secao="" filtros={filtros} quantidadeParcelas={props.quantidadeParcelas} />;
  } else {
    titulo = (
      <h1>
        <img src={`/svg/texto_${props.secao.toLowerCase()}.svg`}></img>
      </h1>
    );

    if (props.secao == "Favoritos") {
      lista = <ListaFavoritos token={props.token} />;
    } else {
      filtro = <Filtros setFiltros={setFiltros} />;
      lista = <ListaProdutos pesquisa="" secao={props.secao} filtros={filtros} quantidadeParcelas={props.quantidadeParcelas} />;
    }
  }

  return (
    <main>
      {banner}
      {titulo}
      <div className="main">
        <div className="div_main">
          {filtro}
          {lista}
        </div>
      </div>
    </main>
  );
}
