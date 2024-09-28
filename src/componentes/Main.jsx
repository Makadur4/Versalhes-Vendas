import Banner from "./Banner";
import ListaProdutos from "./ListaProdutos";
import ListaFavoritos from "./ListaFavoritos";
import Filtro from "./Filtro";

export default function Main(props) {
  let banner;
  let titulo;
  let filtro;
  let lista;

  if (props.filtro == "") {
    banner = <Banner />;
    lista = <ListaProdutos />;
  } else {
    titulo = (
      <h1>
        <img src={`/svg/texto_${props.filtro}.svg`}></img>
      </h1>
    );

    if (props.filtro == "favoritos") {
      lista = <ListaFavoritos />;
    } else {
      filtro = <Filtro />;
      lista = <ListaProdutos />;
    }
  }

  return (
    <main>
      {banner}
      {titulo}
      <div className="main">
        <div className="div_main">
          {filtro}
          {lista}
        </div>
      </div>
    </main>
  );
}
