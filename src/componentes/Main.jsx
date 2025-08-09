import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Banner from "./Banner";
import ListaProdutos from "./ListaProdutos";
import ListaFavoritos from "./ListaFavoritos";
import Filtros from "./Filtros";

export default function Main(props) {
  const location = useLocation();
  const parametros = new URLSearchParams(location.search);
  const pesquisa = parametros.get("p");

  const [filtros, setFiltros] = useState({});

  let banner;
  let titulo;
  let filtro;
  let lista;

  if (props.secao == "") {
    if (props.pesquisa ?? "" == "") {
      banner = <Banner />;
    }

    if (pesquisa ?? "" != "") {
      titulo = <h1>{`Resultados para '${pesquisa}'`}</h1>;
    }

    lista = (
      <ListaProdutos
        secao=""
        pesquisa={pesquisa}
        quantidadeParcelas={props.quantidadeParcelas}
      />
    );
  } else {
    titulo = (
      <h1>
        <img src={`/svg/texto_${props.secao}.svg`}></img>
      </h1>
    );

    if (props.secao == "favoritos") {
      lista = <ListaFavoritos />;
    } else {
      filtro = <Filtros setFiltros={setFiltros} />;
      lista = (
        <ListaProdutos
          secao={props.secao}
          filtros={filtros}
          quantidadeParcelas={props.quantidadeParcelas}
        />
      );
    }
  }

  useEffect(() => {
    props.setPesquisa("");
  }, [props.secao, pesquisa]);

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
