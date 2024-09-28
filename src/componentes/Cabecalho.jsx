import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header>
      <div className="header">
        <Link to="/">
          <div id="logo">
            <img id="imagem" src="/img/logo.png" />
            <img id="versalhes" src="/svg/texto_versalhes.svg" />
          </div>
        </Link>
        <div id="pesquisa">
          <input
            id="barra_de_pesquisa"
            type="text"
            placeholder="Pesquisar..."
          />
          <img id="lupa" src="/svg/icone_lupa_preto.svg" />
        </div>
        <div id="icones">
          <Link to="/login">
            <img class="icone" src="/svg/icone_perfil_branco.svg" />
          </Link>
          <Link to="/favoritos">
            <img class="icone" src="/svg/icone_coracao_branco.svg" />
          </Link>
          <Link to="/carrinho">
            <img class="icone" src="/svg/icone_carrinho_branco.svg" />
          </Link>
        </div>
      </div>
    </header>
  );
}
