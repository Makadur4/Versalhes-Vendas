import tipos from "../dados/tipos";

export async function obterTiposTodos() {
  try {
    return { lista: tipos, mensagem: "" };
  } catch (erro) {
    return {
      lista: null,
      mensagem:
        "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}
