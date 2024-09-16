import CardProduto from "./CardProduto";
import Dados from "../dados/produtos";

export default function ListaProduto() {
  const listaComponentes = Dados.map(function (item) {
    return (
      <CardProduto
        id={item.id}
        nome={item.nome}
        preco={item.preco}
        parcelas_produto={item.parcelas}
      />
    );
  });

  return (
    <div id="principal">
      <div id="produtos">{listaComponentes}</div>
    </div>
  );
}
