import backend from "./backend";

export async function obterMarcas() {
  try {
    const response = await backend.get("apoio/obter-marcas");

    return response.data;
  } catch (e) {
    throw e.response?.status;
  }
}

export async function obterTipos() {
  try {
    const response = await backend.get("apoio/obter-tipos");

    return response.data;
  } catch (e) {
    throw e.response?.status;
  }
}

export async function obterCondicoesPagamento() {
  try {
    return { lista: condicoesPagamento, mensagem: "" };
  } catch (erro) {
    return {
      lista: null,
      mensagem: "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}

export async function obterFretesPeloCep(cep) {
  try {
    const uf = cep == "06414-025" ? "SP" : cep == "22222" ? "RJ" : "MG";

    const lista = fretes.filter((item) => {
      return item.uf == uf;
    });

    return { lista: lista, mensagem: "" };
  } catch (erro) {
    return {
      lista: null,
      mensagem: "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}
