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
        preco="1300,00"
        parcelas="4"
        parcela="325,00"
      />
    </main>
  );
}
