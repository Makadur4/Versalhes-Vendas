import CardCarrinho from "./CardCarrinho";
import CardPreco from "./CardPreco";

export default function Detalhe() {
  return (
    <div className="detalhe">
      <div className="card_descricao">
        <div className="ajuste_carrinho">
          <CardCarrinho />
          <CardCarrinho />
        </div>
      </div>
      <CardPreco continuar={true} />
    </div>
  );
}
