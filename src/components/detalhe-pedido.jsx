import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PedidoService from "../services/pedido-service";

import { converterDataEnPt } from "../utils/formatacao-util";

import Config from "../config";

function EtapaPedido(props) {
  const classe = props.concluida ? " etapa_concluida" : "";

  return (
    <div>
      <div className={`etapa_pedido${classe}`}>
        <img src={`/img/etapa_${props.etapa}.png`}></img>
      </div>
      <span>{props.EtapaPedido}</span>
    </div>
  );
}

function LinhaEtapa(props) {
  const classe = props.concluida ? " etapa_concluida" : "";

  return (
    <div>
      <div className={`linha_etapa${classe}`}></div>
    </div>
  );
}

export default function (props) {
  const [pedido, setPedido] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  async function carregarPedido() {
    try {
      const retorno = await PedidoService.obterPedido(props.token, id);

      if (retorno.status == 5) {
        alert("Este pedido foi cancelado!");

        navigate("/pedidos");

        return;
      }

      setPedido(retorno);
    } catch (erro) {
      alert(erro.obterMensagem());
    }
  }

  useEffect(() => {
    carregarPedido();
  }, []);

  async function cancelarPedido() {
    try {
      await PedidoService.cancelarPedido(props.token, id);

      navigate("/pedidos");
    } catch (erro) {
      alert(erro.obterMensagem());
    }
  }

  const listaProdutos = pedido?.itensPedido.map((item) => {
    return (
      <div key={item.id} className="primeira_moldura">
        <div className="produto_pedido_detalhe">
          <div className="moldura_perfume_detalhe_pedido">
            <img
              src={`${Config.urlApi}perfume/obter-imagem/${item.perfume.id}`}
            ></img>
          </div>
          <span>{item.perfume.nome}</span>
          <span className="quantidade_detalhe_pedido">
            Qtd.:{item.quantidade}
          </span>
        </div>
      </div>
    );
  });

  return (
    <main className="detalhe">
      <div className="card_entrega_pedido">
        <div className="cancelar_pedido">
          <span>Número do pedido: {pedido && pedido.id}</span>
          <div>
            <span>
              Previsão de Entrega:{" "}
              {pedido && converterDataEnPt(pedido.dataEntrega)}
            </span>
          </div>
          <div>
            {pedido && pedido.status < 3 ? (
              <button
                className="botao_cancelar_pedido"
                onClick={cancelarPedido}
              >
                Cancelar Pedido
              </button>
            ) : null}
          </div>
        </div>
        {listaProdutos}
        <div className="primeira_moldura">
          <div className="etapas_pedido">
            <EtapaPedido
              EtapaPedido="Pedido Realizado"
              etapa={1}
              concluida={pedido && pedido.status > 0}
            />
            <LinhaEtapa concluida={pedido && pedido.status > 0} />
            <EtapaPedido
              EtapaPedido="Pedido Aprovado"
              etapa={2}
              concluida={pedido && pedido.status > 1}
            />
            <LinhaEtapa concluida={pedido && pedido.status > 1} />
            <EtapaPedido
              EtapaPedido="Pedido Despachado"
              etapa={3}
              concluida={pedido && pedido.status > 2}
            />
            <LinhaEtapa concluida={pedido && pedido.status > 2} />
            <EtapaPedido
              EtapaPedido="Pedido Entregue"
              etapa={3}
              concluida={pedido && pedido.status > 3}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
