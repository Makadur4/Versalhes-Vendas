import { useEffect, useState } from "react";

import CardProduto from "./CardProduto";

import { obterPerfumesTodos, obterPerfumesPorSecao } from "../api/perfume";

export default function ListaProdutos(props) {
  const [lista, setLista] = useState([]);

  async function atualizarLista() {
    let resultado;

    if (props.secao == "") {
      resultado = await obterPerfumesTodos(props.pesquisa ?? "");
    } else {
      resultado = await obterPerfumesPorSecao(props.secao, props.filtros);
    }

    if (resultado.mensagem != "") {
      alert(resultado.mensagem);

      return;
    }

    setLista(resultado.lista);
  }

  useEffect(() => {
    atualizarLista();
  }, [props.secao, props.pesquisa, props.filtros]);

  console.log(props.quantidadeParcelas);

  const componente = lista.map(function (item) {
    return (
      <CardProduto
        key={item.id}
        idPerfume={item.id}
        nome={item.nome}
        preco={item.precoVenda}
        parcelas={props.quantidadeParcelas}
      />
    );
  });

  return (
    <div id="principal">
      <div id="produtos">{componente}</div>
    </div>
  );
}
