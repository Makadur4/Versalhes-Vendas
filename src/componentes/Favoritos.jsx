import ListaFavoritos from "./ListaFavoritos";

export default function Main(props) {
  return (
    <main>
      <h1>
        <img src={`/img/favoritos.svg`}></img>
      </h1>
      <ListaFavoritos />
    </main>
  );
}
