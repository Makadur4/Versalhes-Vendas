export async function efetuarCadastro(email, senha, dataNascimento, cpf, telefone, sexo) {
  try {
    return { mensagem: "" };
  } catch (erro) {
    return {
      mensagem: "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}

export async function efetuarLogin(email, senha) {
  try {
    if (email != "lucas") {
      return { token: "", mensagem: "Usuário não localizado" };
    }

    return { token: "1234567890", mensagem: "" };
  } catch (erro) {
    return {
      token: "",
      mensagem: "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}

export async function solicitarRecuperacaoSenha(email) {
  try {
    return { mensagem: "" };
  } catch (erro) {
    return {
      mensagem: "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}

export async function gravarNovaSenha(senha) {
  try {
    return { mensagem: "" };
  } catch (erro) {
    return {
      mensagem: "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}

export async function obterEnderecoEntrega(token) {
  try {
    const endereco = { cep: "06414-025", endereco: "RUA WENER GOLDBER", numero: "77", complemento: "151 C", bairro: "Jardim Tupanci", municipio: "Barueri", uf: "SP", responsavel: "Lucas Macadura" };

    return { endereco: endereco, mensagem: "" };
  } catch (erro) {
    return {
      endereco: null,
      mensagem: "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}

export async function gravarEnderecoEntrega(token) {
  try {
    const endereco = { cep: "06414-025", endereco: "RUA WENER GOLDBER", numero: "77", complemento: "151 C", bairro: "Jardim Tupanci", municipio: "Barueri", uf: "SP", responsavel: "Lucas Macadura" };

    return { endereco: endereco, mensagem: "" };
  } catch (erro) {
    return {
      endereco: null,
      mensagem: "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}
