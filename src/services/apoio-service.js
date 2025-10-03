import backend from "./backend";
import { ApiException } from "./api-exception";

const ApoioService = {
  async obterMarcas() {
    try {
      const response = await backend.get("apoio/obter-marcas");

      return response.data;
    } catch (error) {
      throw new ApiException(error.response?.status);
    }
  },

  async obterTipos() {
    try {
      const response = await backend.get("apoio/obter-tipos");

      return response.data;
    } catch (error) {
      throw new ApiException(error.response?.status);
    }
  },

  async obterCondicoesPagamento() {
    try {
      const response = await backend.get("apoio/obter-condicoes-pagamento");

      return response.data;
    } catch (error) {
      throw new ApiException(error.response?.status);
    }
  },

  async obterFretesCep(cep) {
    try {
      const response = await backend.get(`apoio/obter-fretes-cep/${cep}`);

      return response.data;
    } catch (error) {
      throw new ApiException(error.response?.status);
    }
  },
};

export default ApoioService;
