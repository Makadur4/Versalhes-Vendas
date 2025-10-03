import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PedidoService from "../services/pedido-service";

import Config from "../config";

export default function (props) {
  const [bandeiraCartao, setBandeiraCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [nomeCartao, setNomeCartao] = useState("");
  const [dataValidade, setDataValidade] = useState("");
  const [codigoSeguranca, setCodigoSeguranca] = useState("");

  const [condicaoPagamento, setCondicaoPagamento] = useState(0);
  const [percentualAcrescimo, setPercentualAcrescimo] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (!props.token || props.token == "") {
      navigate("/login?o=frete");

      return;
    }

    if (props.carrinho.length == 0) {
      alert("Seu carrinho está vazio!");

      navigate("/");

      return;
    }

    if (!props.frete || props.frete.id == "") {
      navigate("/frete");

      return;
    }

    setBandeiraCartao("VISA");
    setCondicaoPagamento(props.condicoesPagamento[0].id);
  }, []);

  function selecionarCondicaoPagamento(e) {
    setCondicaoPagamento(e.target.value);

    const condicaoSelecionada = props.condicoesPagamento.find((item) => item.id.toString() == e.target.value);

    setPercentualAcrescimo(condicaoSelecionada.percentualAcrescimo);
  }

  async function confirmarOperacao() {
    try {
      const dadosPagamento = {
        bandeiraCartao: bandeiraCartao,
        numeroCartao: numeroCartao,
        nomeCartao: nomeCartao,
        dataValidade: dataValidade,
        codigoSeguranca: codigoSeguranca,
      };

      const itensPedido = props.carrinho.map((item) => {
        return {
          perfume: {
            id: item.id,
          },
          quantidade: item.quantidade,
        };
      });

      const pedido = await PedidoService.incluirPedido(props.token, props.frete.id, condicaoPagamento, dadosPagamento, itensPedido);

      navigate(`/conclusao-pedido/${pedido.id}`);
    } catch (erro) {
      alert(erro.obterMensagem());
    }
  }

  const listaParcelas = props.condicoesPagamento.map((item) => {
    return (
      <option key={item.id} value={item.id}>
        {item.quantidadeParcelas}x {item.percentualAcrescimo == 0 ? "" : "(c/ juros)"}{" "}
      </option>
    );
  });

  const valorFrete = props.frete != null ? props.frete.valor : 0;
  let valorTotal = valorFrete;

  const listaProdutos = props.carrinho.map(function (item, indice) {
    const precoVenda = `R$ ${item.precoVenda.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

    const precoTotal = `R$ ${(item.precoVenda * item.quantidade).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

    valorTotal += item.precoVenda * item.quantidade;

    const moldura = indice == 0 ? "primeira_moldura" : "segunda_moldura";

    return (
      <div key={item.id} className={moldura}>
        <div className="produto_pedido">
          <div className="moldura_perfume_pedido">
            <img src={`${Config.urlApi}perfume/obter-imagem/${item.id}`}></img>
          </div>
          <span>{item.nome}</span>
          <span>
            {precoVenda}
            <br />x{item.quantidade}
            <br /> {precoTotal}
          </span>
        </div>
      </div>
    );
  });

  const valorAcrescimo = (valorTotal * percentualAcrescimo) / 100.0;
  const valorFinal = valorTotal + valorAcrescimo;

  return (
    <main className="detalhe">
      <div className="card_pagamento ">
        <div className="dados_cartao">
          <div className="coluna_input">
            <div className="input_pagamento">
              <span>Bandeira:</span>
              <select
                type="text"
                className="input_100"
                value={bandeiraCartao}
                onChange={(e) => {
                  setBandeiraCartao(e.target.value);
                }}
              >
                <option value="VISA">VISA</option>
                <option value="MasterCard">MasterCard</option>
                <option value="American Express">American Express</option>
              </select>
            </div>
            <div className="input_pagamento">
              <span>Número do cartão:</span>
              <input
                type="text"
                className="input_200"
                value={numeroCartao}
                onChange={(e) => {
                  setNumeroCartao(e.target.value);
                }}
              ></input>
            </div>
            <div className="input_pagamento">
              <span>Nome no cartão:</span>
              <input
                type="text"
                className="input_200"
                value={nomeCartao}
                onChange={(e) => {
                  setNomeCartao(e.target.value);
                }}
              ></input>
            </div>
            <div className="input_pagamento">
              <span>Validade:</span>
              <input
                type="text"
                className="input_150"
                value={dataValidade}
                onChange={(e) => {
                  setDataValidade(e.target.value);
                }}
              ></input>
            </div>
            <div className="input_pagamento">
              <span>Códigos de segurança:</span>
              <input
                type="text"
                className="input_150"
                value={codigoSeguranca}
                onChange={(e) => {
                  setCodigoSeguranca(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="coluna_input">
            <div className="input_pagamento">
              <span>Número de parcelas:</span>
              <select type="text" className="input_100" value={condicaoPagamento} onChange={selecionarCondicaoPagamento}>
                {listaParcelas}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="card_dados_pedido">
        {listaProdutos}
        <div className="terceira_moldura">
          <span>{props.carrinho.length} unidades</span>
          <div className="custos">
            <div className="coluna_dados">
              <span>Produtos</span>
              <span>Frete</span>
              <span>Acréscimo</span>
              <span>Total</span>
            </div>
            <div className="coluna_dados">
              <span>
                {valorTotal.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
              <span>
                {valorFrete.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
              <span>
                {valorAcrescimo.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
              <span>
                {valorFinal.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>

          <button className="botao_cadastro" onClick={confirmarOperacao}>
            Concluir Pedido
          </button>
        </div>
      </div>
    </main>
  );
}
