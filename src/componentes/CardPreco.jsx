export default function CardPreco(props) {
  let botao;

  if (props.continuar == true) {
    botao = (
      <button className="botao_continuar_comprando">Continuar Comprando</button>
    );
  }

  return (
    <div className="card_preco">
      <div className="precos_produto">
        <div style={{ marginBottom: "10px" }}>
          <span className="valor">R$ 389,99</span>
          <span className="a_vista">Á vista</span>
        </div>
        <div style={{ marginBottom: "35px" }}>ou em 4x de 99,99 sem juros</div>
      </div>
      <div className="calcular">
        <span>Calcular o frete</span>
      </div>
      <div className="frete">
        <input className="caixa_frete" type="text"></input>
        <button>OK</button>
      </div>
      <div className="valor_frete">
        <span>Valor do frete: R$ 0,00</span>
      </div>
      <button className="botao_comprar">
        <img src="/img/carrinho.svg"></img>Comprar
      </button>
      {botao}
    </div>
  );
}
