import { useState } from "react";
import { Link } from "react-router-dom";

import ApoioService from "../services/apoio-service";
import { formatarCep } from "../utils/formatacao-util";

export default function (props) {
  const [cep, setCep] = useState("");
  const [frete, setFrete] = useState("Consulte");

  async function calcularFrete() {
    try {
      const resultado = await ApoioService.obterFretesCep(cep);

      const menorValor = resultado.reduce((menor, item) => {
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
    } catch (erro) {
      alert(erro.obterMensagem());

      navigate("/");
    }
  }

  let botao1;
  let botao2;

  if (props.continuar == false && props.estoque != 0) {
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

  const preco =
    props.estoque == 0 ? (
      <div style={{ marginBottom: "10px" }}>
        <span className="valor">Indisponível</span>
      </div>
    ) : (
      <>
        <div style={{ marginBottom: "10px" }}>
          <span className="valor">
            R${" "}
            {props.preco &&
              props.preco.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
          </span>
          <span className="a_vista">à vista</span>
        </div>
        <div style={{ marginBottom: "35px" }}>ou em até {props.parcelas}x (consulte condições)</div>
      </>
    );

  return (
    <div className="card_preco">
      <div className="precos_produto">{preco}</div>
      <div className="calcular">
        <span>Calcular o frete</span>
      </div>
      <div className="frete">
        <input
          className="caixa_frete"
          type="text"
          value={cep}
          maxLength={9}
          onChange={(e) => {
            setCep(formatarCep(e.target.value));
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
