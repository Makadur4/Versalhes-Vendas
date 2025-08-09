import marcas from "../dados/marcas";

export async function obterMarcaTodas() {
  try {
    return { lista: marcas, mensagem: "" };
  } catch (erro) {
    return {
      lista: null,
      mensagem:
        "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}
