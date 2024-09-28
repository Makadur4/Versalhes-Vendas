import CardCarrinho from "./CardCarrinho";
import Dados from "../dados/carrinho";

export default function ListaCarrinho() {
  const listaComponentes = Dados.map(function (item) {
    return (
      <CardCarrinho
        id={item.id}
        nome={item.nome}
        preco={item.preco}
        quantidade={item.quantidade}
      />
    );
  });

  return <>{listaComponentes}</>;
}
