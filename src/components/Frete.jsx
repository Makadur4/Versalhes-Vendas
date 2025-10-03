import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ApoioService from "../services/apoio-service";
import ClienteService from "../services/cliente-service";

import Config from "../config";

export default function (props) {
  const [endereco, setEndereco] = useState();
  const [fretes, setFretes] = useState([]);

  const [freteId, setFreteId] = useState("");

  const navigate = useNavigate();

  async function obterEnderecoEntrega() {
    try {
      const resultado = await ClienteService.obterEnderecoCliente(props.token);

      setEndereco(resultado);
    } catch (erro) {
      alert(erro.obterMensagem());

      navigate("/");
    }
  }

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

    obterEnderecoEntrega();
  }, []);

  async function obterOpcoesFrete() {
    try {
      if (endereco == null || (endereco.cep ?? "") == "") {
        return;
      }

      const resultado = await ApoioService.obterFretesCep(endereco.cep);

      setFretes(resultado);
    } catch (erro) {
      alert(erro.obterMensagem());

      navigate("/");
    }
  }

  useEffect(() => {
    obterOpcoesFrete();
  }, [endereco]);

  function confirmarOperacao() {
    const frete = fretes.find((item) => item.id.toString() == freteId);

    props.setFrete(frete);

    navigate("/pagamento");
  }

  let componente;

  if (endereco != null && (endereco.cep ?? "") != "") {
    componente = (
      <>
        <div className="endereço">
          <span>
            {endereco && endereco.endereco}, {endereco && endereco.numero}
            {endereco && endereco.complemento != "" && ` - ${endereco.complemento}`}
          </span>
          <span>
            {endereco && endereco.bairro} | {endereco && endereco.municipio} – {endereco && endereco.uf}
          </span>
          <span>{endereco && endereco.cep}</span>
          <span>{endereco && endereco.responsavel}</span>
        </div>
        <div className="botao_alterar">
          <button
            type="button"
            className="botao_branco"
            onClick={(e) => {
              navigate("/endereco");
            }}
          >
            Alterar
          </button>
        </div>
      </>
    );
  } else {
    componente = (
      <div className="botao_alterar">
        <button
          className="botao_branco"
          onClick={(e) => {
            navigate("/endereco");
          }}
        >
          Informe o Endereço
        </button>
      </div>
    );
  }

  const listaFretes = fretes.map(function (item) {
    const precoFrete =
      item.valor == 0
        ? "Gratis"
        : `R$ ${item.valor.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`;
    return (
      <div key={item.id} className="formas_entrega">
        <input
          type="radio"
          name="entrega"
          value={item.id}
          checked={freteId === item.id.toString()}
          onChange={(e) => {
            setFreteId(e.target.value);
          }}
        />
        <label>{`Receba em até ${item.prazo} dias - ${precoFrete}`}</label>
      </div>
    );
  });

  let valorProdutos = 0;
  let valorFrete = 0;

  const listaProdutos = props.carrinho.map(function (item, indice) {
    const precoVenda = `R$ ${item.precoVenda.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

    const precoTotal = `R$ ${(item.precoVenda * item.quantidade).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

    valorProdutos += item.precoVenda * item.quantidade;

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

  if (freteId && (freteId ?? "") != "") {
    const freteSelecionado = fretes.find((item) => item.id == freteId) ?? 0;

    valorFrete = freteSelecionado ? freteSelecionado.valor : 0;
  }

  const valorTotal = valorProdutos + valorFrete;

  return (
    <main className="detalhe">
      <div className="card_frete">
        <div className="moldura_frete">{componente}</div>
        <div className="moldura_forma_entrega">
          <span>Escolha uma forma de receber o produto:</span>
          {listaFretes}
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
              <span>Total</span>
            </div>
            <div className="coluna_dados">
              <span>
                {valorProdutos.toLocaleString("pt-BR", {
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
                {valorTotal.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>
          <button className="botao_prosseguir" onClick={confirmarOperacao}>
            Prosseguir
          </button>
        </div>
      </div>
    </main>
  );
}
