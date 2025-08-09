import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { obterPerfumesPeloId } from "../api/perfume";
import { consultarPerfumeFavoritos } from "../api/favorito";
import {
  adicionarPerfumeFavoritos,
  removerPerfumeFavoritos,
} from "../api/favorito";

import CardPreco from "./CardPreco";
import Estrelas from "./Estrelas";
import IconeFavorito from "./IconeFavorito";

export default function DetalheProduto(props) {
  const { idPerfume } = useParams();
  const [detalhes, setDetalhes] = useState(null);
  const [favorito, setFavorito] = useState(false);

  const navegate = useNavigate();

  async function mudarStatusFavorito() {
    const funcao = favorito
      ? removerPerfumeFavoritos
      : adicionarPerfumeFavoritos;

    const resultado = await funcao(idPerfume);

    if (resultado.mensagem != "") {
      alert(resultado.mensagem);

      return;
    }

    await atualizarFavorito();
  }

  async function atualizarDetalhes() {
    const resultado = await obterPerfumesPeloId(idPerfume);

    if (resultado.mensagem != "") {
      alert(resultado.mensagem);

      navegate("/");

      return;
    }

    if (atualizarFavorito() == false) {
      navegate("/");

      return;
    }

    setDetalhes(resultado.item);
  }

  async function atualizarFavorito() {
    const resultado = await consultarPerfumeFavoritos(idPerfume);

    if (resultado.mensagem != "") {
      alert(resultado.mensagem);

      return false;
    }

    setFavorito(resultado.valor);

    return true;
  }

  useEffect(() => {
    atualizarDetalhes();
  }, []);

  return (
    <main className="detalhe">
      <div className="card_descricao">
        <div className="moldura">
          <h1>
            <img
              className="foto_dior"
              src={`http://localhost:8080/imagem/${idPerfume}`}
            ></img>
          </h1>
        </div>
        <div className="descricao">
          <div className="nome_produto">
            <p>{detalhes && detalhes.nome}</p>
          </div>
          <div className="icones_produto">
            <Estrelas nivel={detalhes && detalhes.mediaAvaliacao} />
            <IconeFavorito
              favorito={favorito}
              mudarStatusFavorito={mudarStatusFavorito}
            />
          </div>
          <div className="descricao_produto">
            {detalhes && detalhes.descricao}
          </div>
        </div>
      </div>
      <CardPreco
        continuar={false}
        preco={detalhes && detalhes.precoVenda}
        parcelas={props.quantidadeParcelas}
      />
    </main>
  );
}
