import backend from "./backend";
import { ApiException } from "./api-exception";

const PedidoService = {
  async incluirPedido(token, freteId, condicaoPagamentoId, dadosPagamento, itensPedido) {
    try {
      const configuracoes = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const body = {
        freteId: freteId,
        condicaoPagamentoId: condicaoPagamentoId,
        dadosPagamento: dadosPagamento,
        itensPedido: itensPedido,
      };

      const response = await backend.post("pedido/incluir-pedido", body, configuracoes);

      return response.data;
    } catch (error) {
      throw new ApiException(error.response?.status);
    }
  },

  async obterPedidos(token) {
    try {
      const configuracoes = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const response = await backend.post("pedido/obter-pedidos", configuracoes);

      return response.data;
    } catch (error) {
      throw new ApiException(error.response?.status);
    }
  },

  async obterPedido(token, id) {
    try {
      const configuracoes = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const response = await backend.get(`pedido/obter-pedido/${id}`, configuracoes);

      return response.data;
    } catch (error) {
      throw new ApiException(error.response?.status);
    }
  },

  async cancelarPedido(token, id) {
    try {
      const configuracoes = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      await backend.patch(`pedido/cancelar-pedido/${id}`, {}, configuracoes);
    } catch (error) {
      throw new ApiException(error.response?.status);
    }
  },
};

export default PedidoService;
