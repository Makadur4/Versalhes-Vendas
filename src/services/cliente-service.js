import backend from "./backend";
import { ApiException } from "./api-exception";

import { converterDataPtEn, converterDataEnPt } from "../utils/formatacao-util";

const ClienteService = {
  async incluirCliente(cpf, nome, dataNascimento, sexo, telefone, email, senha) {
    try {
      const body = {
        cpf: cpf,
        nome: nome,
        dataNascimento: converterDataPtEn(dataNascimento),
        sexo: sexo,
        telefone: telefone,
        email: email,
        senha: senha,
      };

      const response = await backend.post("cliente/incluir-cliente", body);

      return response.data;
    } catch (erro) {
      throw new ApiException(erro.response?.status);
    }
  },

  async obterCliente(token) {
    try {
      const configuracoes = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const response = await backend.get("cliente/obter-cliente", configuracoes);

      response.data.dataNascimento = converterDataEnPt(response.data.dataNascimento);

      return response.data;
    } catch (erro) {
      throw new ApiException(erro.response?.status);
    }
  },

  async alterarCliente(token, cpf, nome, dataNascimento, sexo, telefone, email, senha) {
    try {
      const configuracoes = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const body = {
        cpf: cpf,
        nome: nome,
        dataNascimento: converterDataPtEn(dataNascimento),
        sexo: sexo,
        telefone: telefone,
        email: email,
        senha: senha,
      };

      const response = await backend.put("cliente/alterar-cliente", body, configuracoes);

      return response.data;
    } catch (erro) {
      throw new ApiException(erro.response?.status);
    }
  },

  async validarCliente(email, senha) {
    try {
      const configuracoes = {
        headers: {
          email: email,
          senha: senha,
        },
      };

      const response = await backend.get("cliente/validar-cliente", configuracoes);

      return response.data;
    } catch (erro) {
      throw new ApiException(erro.response?.status);
    }
  },

  async solicitarRecuperacaoSenha(email) {
    try {
      const body = {
        email: email,
      };

      await backend.patch("/cliente/solicitar-recuperacao-senha", body);
    } catch (erro) {
      throw new ApiException(erro.response?.status);
    }
  },

  async alterarSenha(chave, senha) {
    try {
      const body = {
        chave: chave,
        senha: senha,
      };

      await backend.patch("cliente/alterar-senha", body);
    } catch (erro) {
      throw new ApiException(erro.response?.status);
    }
  },

  async obterEnderecoCliente(token) {
    try {
      const configuracoes = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const response = await backend.get("cliente/obter-endereco-cliente", configuracoes);

      return response.data;
    } catch (erro) {
      throw new ApiException(erro.response?.status);
    }
  },

  async alterarEnderecoCliente(token, cep, endereco, numero, complemento, bairro, municipio, uf, responsavel) {
    try {
      const configuracoes = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const body = {
        cep: cep,
        endereco: endereco,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        municipio: municipio,
        uf: uf,
      };

      const response = await backend.put("cliente/alterar-endereco-cliente", body, configuracoes);

      return response.data;
    } catch (erro) {
      throw new ApiException(erro.response?.status);
    }
  },
};

export default ClienteService;
