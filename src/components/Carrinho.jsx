import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CardPreco from "./CardPreco";
import CardCarrinho from "./CardCarrinho";

export default function Carrinho(props) {
  const navigate = useNavigate();

  let valorTotal = 0;

  function mudarQuantidadeItem(id, quantidade) {
    const colecao = props.carrinho.map((item) => (item.id === id ? { ...item, quantidade } : item));

    props.guardarCarrinho(colecao);
  }

  function removerItem(id) {
    const colecao = props.carrinho.filter((item) => item.id !== id);

    props.guardarCarrinho(colecao);
  }

  useEffect(() => {
    if (props.carrinho.length == 0) {
      alert("Seu carrinho está vazio!");

      navigate("/");
    }
  }, [props.carrinho]);

  const listaCarrinho = props.carrinho.map(function (item) {
    valorTotal += item.precoVenda * item.quantidade;
    return <CardCarrinho key={item.id} id={item.id} nome={item.nome} precoVenda={item.precoVenda} quantidade={item.quantidade} mudarQuantidadeItem={mudarQuantidadeItem} removerItem={removerItem} />;
  });

  return (
    <main className="detalhe">
      <div className="card_descricao">
        <div className="conteudo_card">{listaCarrinho}</div>
      </div>
      <CardPreco continuar={true} preco={valorTotal} parcelas="4" />
    </main>
  );
}
