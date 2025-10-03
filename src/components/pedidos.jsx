import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import PedidoService from "../services/pedido-service";

import { converterDataEnPt } from "../utils/formatacao-util";

export default function (props) {
  const [pedidos, setPedidos] = useState([]);
  const [pedido, setPedido] = useState(null);

  async function atualizarLista() {
    try {
      const retorno = await PedidoService.obterPedidos(props.token);

      setPedidos(retorno);
    } catch (erro) {
      alert(erro.obterMensagem());
    }
  }

  useEffect(() => {
    atualizarLista();
  }, []);

  function alterarPedido(e) {
    const pedidoSelecionado = pedidos.find((item) => {
      return item.id == e.target.value;
    });

    setPedido(pedidoSelecionado);

    console.log(pedidoSelecionado);
  }

  const listaPedidos = pedidos.map((item) => {
    return (
      <div key={item.id} className="primeira_moldura">
        <div className="pedido">
          <div className="dados_pedido">
            <div className="marcador_pedido">
              <input type="radio" name="pedido" value={item.id} checked={pedido && pedido.id == item.id} onChange={alterarPedido} />
              <span>Nr: {item.id}</span>
            </div>
            <span>Total de Produtos: {item.itensPedido.length}</span>
          </div>
          <div className="dados_pedido">
            <span>Data: {converterDataEnPt(item.dataPedido)}</span>
            <span>
              Valor Total: R${" "}
              {item.valorTotal.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
      </div>
    );
  });

  const detalhePedido = pedido ? (
    <>
      <div className="primeira_moldura">
        <div className="coluna_geral">
          <div className="coluna_dados">
            <span>Valor dos Produtos:</span>
            <span>Valor do Frete:</span>
            <span>Valor dos Acréscimos:</span>
            <span>Valor Total:</span>
            <span>Cartão:</span>
            <span>Qtd. Parcelas:</span>
          </div>
          <div className="coluna_dados">
            <span>
              {pedido &&
                pedido.valorProdutos.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
            </span>
            <span>
              {pedido &&
                pedido.valorFrete.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
            </span>
            <span>
              {pedido &&
                pedido.valorAcrescimo.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
            </span>
            <span>
              {pedido &&
                pedido.valorTotal.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
            </span>
            <span>{pedido && `${pedido.dadosPagamento.bandeiraCartao}...${pedido.dadosPagamento.numeroCartao}`}</span>
            <span>{pedido && pedido.dadosPagamento.quantidadeParcelas}</span>
          </div>
        </div>
      </div>
      <div className="segunda_moldura">
        <div className="coluna_dados">
          <div className="endereço">
            <span>
              {pedido && pedido.enderecoEntrega.endereco}, {pedido && pedido.enderecoEntrega.numero}
              {pedido && pedido.enderecoEntrega.complemento != "" && ` - ${pedido.enderecoEntrega.complemento}`}
            </span>
            <span>
              {pedido && pedido.enderecoEntrega.bairro} | {pedido && pedido.enderecoEntrega.municipio} – {pedido && pedido.enderecoEntrega.uf}
            </span>
            <span>{pedido && pedido.enderecoEntrega.cep}</span>
            <span>{pedido && pedido.enderecoEntrega.responsavel}</span>
          </div>
        </div>
      </div>
      <div className="terceira_moldura">
        {pedido.status != 5 ? (
          <>
            <div className="coluna_geral">
              <div className="coluna_dados">
                <span>Previsão de Entrega</span>
              </div>
              <div className="coluna_dados">
                <span>{converterDataEnPt(pedido.dataEntrega)}</span>
              </div>
            </div>
            <Link to={`/detalhe-pedido/${pedido && pedido.id}`}>
              <button className="botao_concluir">Acompanhar o pedido</button>
            </Link>
          </>
        ) : (
          <div className="coluna_geral">
            <div className="coluna_dados">
              <span>Pedido Cancelado</span>
            </div>
          </div>
        )}
      </div>
    </>
  ) : null;

  return (
    <main className="detalhe">
      <div className="card_seus_pedidos">
        <span>Meus Pedidos:</span>
        {listaPedidos}
      </div>
      <div className="card_pedido">{detalhePedido}</div>
    </main>
  );
}
