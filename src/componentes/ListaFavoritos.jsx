import CardFavorito from "./CardFavorito";
import Dados from "../dados/favoritos";

export default function ListaFavoritos() {
  const listaComponentes = Dados.map(function (item) {
    return <CardFavorito id={item.id} nome={item.nome} />;
  });

  return (
    <div id="principal">
      <div id="produtos">{listaComponentes}</div>
    </div>
  );
}
