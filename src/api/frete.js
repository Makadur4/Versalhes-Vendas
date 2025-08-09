import fretes from "../dados/fretes";

export async function obterFretesPeloCep(cep) {
  try {
    const uf = cep == "11111" ? "SP" : cep == "22222" ? "RJ" : "MG";

    const lista = fretes.filter((item) => {
      return item.uf == uf;
    });

    return { lista: lista, mensagem: "" };
  } catch (erro) {
    return {
      lista: null,
      mensagem:
        "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}
