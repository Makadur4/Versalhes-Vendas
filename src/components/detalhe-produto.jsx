import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import PerfumeService from "../services/perfume-service";
import FavoritoService from "../services/favorito-service";

import Config from "../config";

import CardPreco from "./card-preco";
import Estrelas from "./estrelas";
import Favorito from "./favorito";

export default function (props) {
  const [perfume, setPerfume] = useState(null);
  const [favorito, setFavorito] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  async function alterarFavorito() {
    try {
      if (favorito != null && favorito.id != 0) {
        await FavoritoService.excluirFavorito(props.token, favorito.id);
      } else {
        await FavoritoService.incluirFavorito(props.token, id);
      }

      await atualizarFavorito();
    } catch (erro) {
      alert(erro.obterMensagem());
    }
  }

  function adicionarProdutoCarrinho() {
    const colecao = props.carrinho;

    let produto = colecao.find((item) => item.id === perfume.id);

    if (!produto) {
      produto = {
        id: perfume.id,
        nome: perfume.nome,
        precoVenda: perfume.precoVenda,
        quantidade: 0,
      };

      colecao.push(produto);
    }

    produto.quantidade++;

    props.guardarCarrinho(colecao);

    navigate("/carrinho");
  }

  async function atualizarFavorito() {
    try {
      if ((props.token ?? "") == "") {
        setFavorito(null);
      } else {
        const resultado = await FavoritoService.obterFavorito(props.token, id);

        setFavorito(resultado);
      }

      return true;
    } catch (erro) {
      alert(erro.obterMensagem());

      return false;
    }
  }

  async function atualizarDetalhes() {
    try {
      const resultado = await PerfumeService.obterPerfume(id);

      if (atualizarFavorito() == false) {
        navigate("/");

        return;
      }

      setPerfume(resultado);
    } catch (erro) {
      alert(erro.obterMensagem());

      navigate("/");
    }
  }

  useEffect(() => {
    atualizarDetalhes();
  }, []);

  const componente =
    (props.token ?? "") != "" ? (
      <Favorito favorito={favorito} alterarFavorito={alterarFavorito} />
    ) : null;

  return (
    <main className="detalhe">
      <div className="card_descricao">
        <div className="moldura">
          <h1>
            <img
              className="foto_dior"
              src={`${Config.urlApi}perfume/obter-imagem/${id}`}
            ></img>
          </h1>
        </div>
        <div className="descricao">
          <div className="nome_produto_descricao">
            <p>{perfume && perfume.nome}</p>
          </div>
          <div className="icones_produto">
            <Estrelas nivel={perfume && perfume.mediaAvaliacao} />
            {componente}
          </div>
          <div className="descricao_produto">
            {perfume && perfume.descricao}
          </div>
        </div>
      </div>
      <CardPreco
        continuar={false}
        preco={perfume && perfume.precoVenda}
        parcelas={props.quantidadeParcelas}
        estoque={perfume && perfume.estoque}
        adicionarProdutoCarrinho={adicionarProdutoCarrinho}
      />
    </main>
  );
}
