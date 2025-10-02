import { useEffect, useState } from "react";

import PerfumeService from "../services/perfume-service";

import CardProduto from "./card-produto";

export default function (props) {
  const [lista, setLista] = useState([]);

  async function atualizarLista() {
    try {
      const resultado = await PerfumeService.obterPerfumes(props.pesquisa ?? "", props.secao, props.filtros);

      setLista(resultado);
    } catch (erro) {
      alert(erro.obterMensagem());
    }
  }

  useEffect(() => {
    atualizarLista();
  }, [props.secao, props.pesquisa, props.filtros]);

  const componente = lista.map(function (item) {
    return <CardProduto key={item.id} id={item.id} nome={item.nome} preco={item.precoVenda} parcelas={props.quantidadeParcelas} />;
  });

  return (
    <div id="principal">
      <div id="produtos">{componente}</div>
    </div>
  );
}
