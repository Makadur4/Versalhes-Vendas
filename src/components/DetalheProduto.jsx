import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { obterPerfumePeloId } from "../api/perfume";
import { consultarPerfumeFavoritos, adicionarPerfumeFavoritos, removerPerfumeFavoritos } from "../api/favorito";

import CardPreco from "./CardPreco";
import IconesEstrelas from "./IconesEstrelas";
import IconeFavorito from "./IconeFavorito";

export default function DetalheProduto(props) {
  const { idPerfume } = useParams();
  const [detalhes, setDetalhes] = useState(null);
  const [favorito, setFavorito] = useState(false);

  const navigate = useNavigate();

  async function mudarStatusFavorito() {
    const funcao = favorito ? removerPerfumeFavoritos : adicionarPerfumeFavoritos;

    const resultado = await funcao(idPerfume);

    if (resultado.mensagem != "") {
      alert(resultado.mensagem);

      return;
    }

    await atualizarFavorito();
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

  function adicionarProdutoCarrinho() {
    const colecao = props.carrinho;

    let produto = colecao.find((item) => item.id === detalhes.id);

    if (!produto) {
      produto = { id: detalhes.id, nome: detalhes.nome, precoVenda: detalhes.precoVenda, quantidade: 0 };

      colecao.push(produto);
    }

    produto.quantidade++;

    props.guardarCarrinho(colecao);

    navigate("/carrinho");
  }

  async function atualizarDetalhes() {
    const resultado = await obterPerfumePeloId(idPerfume);

    if (resultado.mensagem != "") {
      alert(resultado.mensagem);

      navigate("/");

      return;
    }

    if (atualizarFavorito() == false) {
      navigate("/");

      return;
    }

    setDetalhes(resultado.item);
  }

  useEffect(() => {
    atualizarDetalhes();
  }, []);

  return (
    <main className="detalhe">
      <div className="card_descricao">
        <div className="moldura">
          <h1>
            <img className="foto_dior" src={`http://localhost:8080/imagem/${idPerfume}`}></img>
          </h1>
        </div>
        <div className="descricao">
          <div className="nome_produto">
            <p>{detalhes && detalhes.nome}</p>
          </div>
          <div className="icones_produto">
            <IconesEstrelas nivel={detalhes && detalhes.mediaAvaliacao} />
            <IconeFavorito favorito={favorito} mudarStatusFavorito={mudarStatusFavorito} />
          </div>
          <div className="descricao_produto">{detalhes && detalhes.descricao}</div>
        </div>
      </div>
      <CardPreco continuar={false} preco={detalhes && detalhes.precoVenda} parcelas={props.quantidadeParcelas} adicionarProdutoCarrinho={adicionarProdutoCarrinho} />
    </main>
  );
}
