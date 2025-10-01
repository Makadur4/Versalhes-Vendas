import favoritos from "../dados/favoritos";

export async function consultarPerfumeFavoritos(idPefume) {
  try {
    const favorito = favoritos.some((item) => {
      return item.id == idPefume;
    });

    return { valor: favorito, mensagem: "" };
  } catch (erro) {
    return {
      valor: null,
      mensagem:
        "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}

export async function adicionarPerfumeFavoritos(idPefume) {
  try {
    return { mensagem: "" };
  } catch (erro) {
    return {
      mensagem:
        "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}

export async function removerPerfumeFavoritos(idPefume) {
  try {
    return { mensagem: "" };
  } catch (erro) {
    return {
      mensagem:
        "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}
