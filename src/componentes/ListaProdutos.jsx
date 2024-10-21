import { useEffect, useState } from "react";
import CardProduto from "./CardProduto";
import axios from "axios";

export default function ListaProdutos() {
  const [lista, setLista] = useState([]);

  function CarrergarListaProdutos() {
    axios
      .get(`http://localhost:8080/perfume`)
      .then(function (response) {
        setLista(response.data);
      })
      .catch(function (erro) {
        alert("Não foi possível executar operação!");
        console.log(erro);
      });
  }

  useEffect(CarrergarListaProdutos, []);

  const listaComponentes = lista.map(function (item) {
    return (
      <CardProduto
        key={item.idPerfume}
        IdPerfume={item.idPerfume}
        Nome={item.nome}
        PrecoNormal={item.precoNormal}
        Parcelas={4}
      />
    );
  });

  return (
    <div id="principal">
      <div id="produtos">{listaComponentes}</div>
    </div>
  );
}
