import backend from "./backend";
import { ApiException } from "./api-exception";

const FavoritoService = {
  async incluirFavorito(token, perfumeId) {
    try {
      const configuracoes = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const body = {
        perfumeId: perfumeId,
      };

      await backend.post("favorito/incluir-favorito", body, configuracoes);
    } catch (error) {
      throw new ApiException(error.response?.status);
    }
  },

  async obterFavoritos(token) {
    try {
      const configuracoes = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const response = await backend.get(`favorito/obter-favoritos`, configuracoes);

      return response.data;
    } catch (error) {
      throw new ApiException(error.response?.status);
    }
  },

  async obterFavorito(token, perfumeId) {
    try {
      const configuracoes = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const response = await backend.get(`favorito/obter-favorito/${perfumeId}`, configuracoes);

      return response.data;
    } catch (error) {
      throw new ApiException(error.response?.status);
    }
  },

  async excluirFavorito(token, id) {
    try {
      const configuracoes = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const response = await backend.delete(`favorito/excluir-favorito/${id}`, configuracoes);

      return response.data;
    } catch (error) {
      throw new ApiException(error.response?.status);
    }
  },
};

export default FavoritoService;
