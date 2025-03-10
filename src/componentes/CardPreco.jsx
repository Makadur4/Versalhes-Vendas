import { Link } from "react-router-dom";

export default function CardPreco(props) {
  let botao1;
  let botao2;
  let botao3;

  if (props.continuar == false) {
    botao1 = (
      <Link to="/carrinho">
        <button className="botao_comprar">
          <img src="/svg/icone_carrinho_branco.svg"></img>Comprar
        </button>
      </Link>
    );
  }

  if (props.continuar == true) {
    botao2 = (
      <Link to="/frete">
        <button className="botao_comprar">Finalizar</button>
      </Link>
      );
    botao3 = (
      <Link to="/">
        <button className="botao_continuar_comprando">
          Continuar Comprando
        </button>
      </Link>
    );
  }

  return (
    <div className="card_preco">
      <div className="precos_produto">
        <div style={{ marginBottom: "10px" }}>
          <span className="valor">R$ {props.preco}</span>
          <span className="a_vista">Á vista</span>
        </div>
        <div style={{ marginBottom: "35px" }}>
          ou em {props.parcelas}x de {props.parcela} sem juros
        </div>
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
      {botao1}
      {botao2}
      {botao3}
    </div>
  );
}
