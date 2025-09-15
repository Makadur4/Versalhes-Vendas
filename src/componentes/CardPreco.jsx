import { useState } from "react";
import { Link } from "react-router-dom";

import { obterFretesPeloCep } from "../api/frete";

export default function CardPreco(props) {
  const [cep, setCep] = useState("");
  const [frete, setFrete] = useState("Consulte");

  async function calcularFrete() {
    const resultado = await obterFretesPeloCep(cep);

    if (resultado.mensagem != "") {
      alert(resultado.mensagem);

      return;
    }

    const menorValor = resultado.lista.reduce((menor, item) => {
      return item.valor < menor.valor ? item : menor;
    }).valor;

    setFrete(
      menorValor == 0
        ? "Grátis"
        : `R$ ${menorValor.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`
    );
  }

  let botao1;
  let botao2;

  if (props.continuar == false) {
    botao1 = (
      <button
        className="botao_comprar"
        onClick={() => {
          props.adicionarProdutoCarrinho();
        }}
      >
        <img src="/svg/icone_carrinho_branco.svg"></img>Comprar
      </button>
    );
  }

  if (props.continuar == true) {
    botao1 = (
      <Link to="/frete">
        <button className="botao_comprar">Finalizar</button>
      </Link>
    );
    botao2 = (
      <Link to="/">
        <button className="botao_continuar_comprando">Continuar Comprando</button>
      </Link>
    );
  }

  return (
    <div className="card_preco">
      <div className="precos_produto">
        <div style={{ marginBottom: "10px" }}>
          <span className="valor">
            R${" "}
            {props.preco &&
              props.preco.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
          </span>
          <span className="a_vista">Á vista</span>
        </div>
        <div style={{ marginBottom: "35px" }}>ou em até {props.parcelas}x (consulte condições)</div>
      </div>
      <div className="calcular">
        <span>Calcular o frete</span>
      </div>
      <div className="frete">
        <input
          className="caixa_frete"
          type="text"
          value={cep}
          onChange={(e) => {
            setCep(e.target.value);
          }}
        ></input>
        <button onClick={calcularFrete}>OK</button>
      </div>
      <div className="valor_frete">
        <span>Valor do frete: {frete}</span>
      </div>
      {botao1}
      {botao2}
    </div>
  );
}
