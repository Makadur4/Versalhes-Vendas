export function formatarData(valor) {
  let data = valor.replace(/\D/g, "");

  if (data.length > 8) data = data.slice(0, 8);

  if (data.length > 4) {
    data = data.replace(/(\d{2})(\d{2})(\d{1,4})/, "$1/$2/$3");
  } else if (data.length > 2) {
    data = data.replace(/(\d{2})(\d{1,2})/, "$1/$2");
  }

  return data;
}

export function formatarCpf(valor) {
  let cpf = valor.replace(/\D/g, "");

  if (cpf.length > 11) cpf = cpf.slice(0, 11);

  if (cpf.length > 9) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
  } else if (cpf.length > 6) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
  } else if (cpf.length > 3) {
    cpf = cpf.replace(/(\d{3})(\d{1,3})/, "$1.$2");
  }

  return cpf;
}

export function formatarTelefone(valor) {
  let telefone = valor.replace(/\D/g, "");

  if (telefone.length > 11) telefone = telefone.slice(0, 11);

  if (telefone.length == 11) {
    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (telefone.length > 6) {
    telefone = telefone.replace(/(\d{2})(\d{4})(\d{1,4})/, "($1) $2-$3");
  } else if (telefone.length > 2) {
    telefone = telefone.replace(/(\d{2})(\d{1,4})/, "($1) $2");
  }

  return telefone;
}

export function formatarCep(valor) {
  let cep = valor.replace(/\D/g, "");

  if (cep.length > 11) cpf = cpf.slice(0, 11);

  if (cep.length > 5) {
    cep = cep.replace(/(\d{5})(\d{1,3})/, "$1-$2");
  }

  return cep;
}
