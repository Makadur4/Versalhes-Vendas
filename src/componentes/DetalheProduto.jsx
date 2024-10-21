import axios from "axios";
import CardPreco from "./CardPreco";
import Estrelas from "./Estrelas";
import IconeFavorito from "./IconeFavorito";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetalheProduto() {
  const { idPerfume } = useParams();
  const [dados, setDados] = useState();

  function CarregarDadosProduto() {
    axios
      .get(`http://localhost:8080/perfume/${idPerfume}`)
      .then(function (response) {
        let perfume = response.data;

        let valor = perfume.precoNormal;
        let valorNumerico = parseFloat(valor);
        let resultado = (valorNumerico / 4).toFixed(2);

        perfume.precoParcela = resultado;
        setDados(perfume);
      })
      .catch(function (erro) {
        alert("Não foi possível executar operação!");
        console.log(erro);
      });
  }

  useEffect(CarregarDadosProduto, []);

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
            <p>{dados && dados.nome}</p>
          </div>
          <div className="icones_produto">
            <Estrelas nivel={dados && dados.mediaAvaliacao} />
            <IconeFavorito />
          </div>
          <div className="descricao_produto">{dados && dados.descricao}</div>
        </div>
      </div>
      <CardPreco
        continuar={false}
        preco={dados && dados.precoNormal}
        parcelas="4"
        parcela={dados && dados.precoParcela}
      />
    </main>
  );
}
