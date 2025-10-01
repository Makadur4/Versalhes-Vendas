import perfumes from "../dados/perfumes";

export async function obterPerfumes(pesquisa) {
  try {
    if (pesquisa != "") {
      const resultado = perfumes.filter((item) => {
        return item.nome.toLowerCase().includes(pesquisa.toLowerCase());
      });

      return { lista: resultado, mensagem: "" };
    }

    return { lista: perfumes, mensagem: "" };
  } catch (erro) {
    return {
      lista: null,
      mensagem: "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}

export async function obterPerfumesPorSecao(secao, filtros) {
  try {
    let resultado;

    if (secao == "masculino") {
      resultado = perfumes.filter((item) => {
        return item.genero == "M" || item.genero == "U";
      });
    }

    if (secao == "feminino") {
      resultado = perfumes.filter((item) => {
        return item.genero == "F" || item.genero == "U";
      });
    }

    if (secao == "especiais") {
      resultado = perfumes.filter((item) => {
        return item.especial == true;
      });
    }

    if (secao == "ofertas") {
      resultado = perfumes.filter((item) => {
        return item.oferta == true;
      });
    }

    if (filtros != null) {
      if (filtros.preco != null && filtros.preco != 0) {
        resultado = resultado.filter((item) => {
          return item.precoVenda <= filtros.preco;
        });
      }

      if (filtros.marcas != null) {
        const marcas = Object.keys(filtros.marcas)
          .filter((id) => {
            return filtros.marcas[id];
          })
          .map((id) => {
            return Number(id);
          });

        if (marcas.length != 0) {
          resultado = resultado.filter((item) => {
            return marcas.includes(item.marca.id);
          });
        }
      }

      if (filtros.tipos != null) {
        const tipos = Object.keys(filtros.tipos)
          .filter((id) => {
            return filtros.tipos[id];
          })
          .map((id) => {
            return Number(id);
          });

        if (tipos.length != 0) {
          resultado = resultado.filter((item) => {
            return tipos.includes(item.tipo.id);
          });
        }
      }
    }

    return { lista: resultado, mensagem: "" };
  } catch (erro) {
    return {
      lista: null,
      mensagem: "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}

export async function obterPerfumePeloId(id) {
  try {
    const resultado = perfumes.find((item) => {
      return item.id == id;
    });

    return { item: resultado, mensagem: "" };
  } catch (erro) {
    return {
      item: null,
      mensagem: "Não foi possível executar operação. Por favor, tente novamente mais tarde!",
    };
  }
}
