import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header>
      <div className="Header">
        <Link to="/">
          <div id="logo">
            <img id="imagem" src="/img/logo.png" />
            <img id="versalhes" src="/img/nome.svg" />
          </div>
        </Link>
        <div id="pesquisa">
          <input
            id="barra_de_pesquisa"
            type="text"
            placeholder="Pesquisar..."
          />
          <img id="lupa" src="/img/lupa.svg" />
        </div>
        <div id="icones">
          <Link to="/login">
            <img class="icone" src="/img/perfil.svg" />
          </Link>
          <Link to="/favoritos">
            <img class="icone" src="/img/heart-white.svg" />
          </Link>
          <Link to="/carrinho">
            <img class="icone" src="/img/carrinho.svg" />
          </Link>
        </div>
      </div>
    </header>
  );
}
