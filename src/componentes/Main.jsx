import Banner from "./Banner";
import ListaProduto from "./ListaProduto";
import Filtro from "./Filtro";

export default function Main(props) {
  let banner;
  let titulo;
  let filtro;

  if (props.filtro == "") {
    banner = <Banner />;
  } else {
    titulo = (
      <h1>
        <img src={`/img/${props.filtro}.svg`}></img>
      </h1>
    );
    filtro = <Filtro />;
  }

  return (
    <main>
      {banner}
      {titulo}
      <div className="main">
        <div className="div_main">
          {filtro}
          <ListaProduto />
        </div>
      </div>
    </main>
  );
}
