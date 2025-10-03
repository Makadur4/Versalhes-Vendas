import { useEffect, useState } from "react";

import FavoritoService from "../services/favorito-service";

import CardFavorito from "./card-favorito";

export default function ListaFavoritos(props) {
  const [lista, setLista] = useState([]);

  async function excluirFavorito(id) {
    try {
      await FavoritoService.excluirFavorito(props.token, id);

      atualizarLista();
    } catch (erro) {
      alert(erro.obterMensagem());
    }
  }

  async function atualizarLista() {
    try {
      const resultado = await FavoritoService.obterFavoritos(props.token);

      setLista(resultado);
    } catch (erro) {
      alert(erro.obterMensagem());
    }
  }

  useEffect(() => {
    atualizarLista();
  }, []);

  const componente = lista.map(function (item) {
    return <CardFavorito key={item.id} id={item.id} perfumeId={item.perfume.id} nome={item.perfume.nome} excluirFavorito={excluirFavorito} />;
  });

  return (
    <div id="principal">
      <div id="produtos">{componente}</div>
    </div>
  );
}
