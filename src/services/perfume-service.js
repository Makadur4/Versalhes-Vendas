import backend from "./backend";
import { ApiException } from "./api-exception";

const PerfumeSevice = {
  async obterPerfumes(nome, secao, filtros) {
    try {
      const configuracoes = {
        params: {
          nome: nome,
          secao: secao,
          preco: filtros.preco ?? "0",
          marcas: filtros.marcas && filtros.marcas.length != 0 ? filtros.marcas.join("|") : "",
          tipos: filtros.tipos && filtros.tipos.length != 0 ? filtros.tipos.join("|") : "",
        },
      };
      const response = await backend.get("perfume/obter-perfumes-venda", configuracoes);

      return response.data;
    } catch (error) {
      throw new ApiException(error.response?.status);
    }
  },

  async obterPerfume(id) {
    try {
      const response = await backend.get(`perfume/obter-perfume/${id}`);

      return response.data;
    } catch (error) {
      throw new ApiException(error.response?.status);
    }
  },
};

export default PerfumeSevice;
