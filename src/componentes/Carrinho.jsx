import CardPreco from "./CardPreco";
import ListaCarrinho from "./ListaCarrinho";

export default function Carrinho() {
  return (
    <main className="detalhe">
      <div className="card_descricao">
        <div className="ajuste_carrinho">
          <ListaCarrinho />
        </div>
      </div>
      <CardPreco
        continuar={true}
        preco="1079,98"
        parcelas="4"
        parcela="269,99"
      />
    </main>
  );
}
