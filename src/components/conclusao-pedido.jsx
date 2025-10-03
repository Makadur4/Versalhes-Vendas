import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import PedidoService from "../services/pedido-service";

import { converterDataEnPt } from "../utils/formatacao-util";

import Config from "../config";

export default function (props) {
  const [pedido, setPedido] = useState(null);

  const { id } = useParams();

  async function carregarPedido() {
    try {
      const retorno = await PedidoService.obterPedido(props.token, id);

      setPedido(retorno);
    } catch (erro) {
      alert(erro.obterMensagem());
    }
  }

  useEffect(() => {
    props.guardarCarrinho([]);

    carregarPedido();
  }, []);

  const listaProdutos = pedido?.itensPedido.map((item) => {
    return (
      <div key={item.id} className="primeira_moldura">
        <div className="produto_pedido">
          <div className="moldura_perfume_pedido">
            <img src={`${Config.urlApi}perfume/obter-imagem/${item.perfume.id}`}></img>
          </div>
          <span>{item.perfume.nome}</span>
          <span>Qtd.:{item.quantidade}</span>
        </div>
      </div>
    );
  });

  return (
    <main className="detalhe">
      <div className="card_confirmacao_pedido">
        <span>Sucesso! O número do seu pedido é: {pedido && pedido.id}</span>
        {listaProdutos}
      </div>
      <div className="card_pedido">
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
          <div className="coluna_geral">
            <div className="coluna_dados">
              <span>Previsão de Entrega</span>
            </div>
            <div className="coluna_dados">
              <span>{pedido && converterDataEnPt(pedido.dataEntrega)}</span>
            </div>
          </div>
          <Link to="/pedido">
            <button className="botao_concluir">Acompanhar o pedido</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
