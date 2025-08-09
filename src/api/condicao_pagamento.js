import condicoesPagamento from "../dados/condicoes_pagamento";

export async function obterCondicoesPagamentoTodas() {
  try {
    return { lista: condicoesPagamento, mensagem: "" };
  } catch (erro) {
    return {
      lista: null,
      mensagem:
        "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}
