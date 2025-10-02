import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MenuSemLogin(props) {
  const navigate = useNavigate();

  function abrirLogin() {
    props.fecharModal();

    navigate("/login?o=");
  }

  function abrirCadastro() {
    props.fecharModal();

    navigate("/cadastro");
  }

  return (
    <div className="overlay" onClick={props.fecharModal}>
      <div className="overlay_modal">
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="botoes_modal">
            <ul>
              <li>
                <button className="botao_modal" onClick={abrirLogin}>
                  Entrar
                </button>
              </li>
              <li>
                <button className="botao_modal" onClick={abrirCadastro}>
                  Cadastro
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuComLogin(props) {
  const navigate = useNavigate();

  function abrirCadastro() {
    props.fecharModal();

    navigate("/cadastro");
  }

  function abrirPedidos() {
    props.fecharModal();

    navigate("/pedidos");
  }

  function fazerLogout() {
    props.fecharModal();
    props.guardarToken("");
    navigate("/");
  }

  return (
    <div className="overlay" onClick={props.fecharModal}>
      <div className="overlay_modal">
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="botoes_modal">
            <ul>
              <li>
                <button className="botao_modal" onClick={abrirCadastro}>
                  Cadastro
                </button>
              </li>
              <li>
                <button className="botao_modal" onClick={abrirPedidos}>
                  Pedidos
                </button>
              </li>
              <li>
                <button className="botao_modal" onClick={fazerLogout}>
                  Sair
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function (props) {
  const [modal, setModal] = useState(0);

  const navigate = useNavigate();

  function fecharModal() {
    setModal(0);
  }

  function abrirPerfil() {
    if ((props.token ?? "") == "") {
      setModal(1);
    } else {
      setModal(2);
    }
  }

  const componente = modal == 1 ? <MenuSemLogin fecharModal={fecharModal} /> : modal == 2 ? <MenuComLogin guardarToken={props.guardarToken} fecharModal={fecharModal} /> : null;
  const iconePerfil = (props.token ?? "") == "" ? "/svg/icone_perfil_branco.svg" : "/svg/icone_perfil_roxo.svg";

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
            value={props.pesquisa}
            onChange={(e) => {
              props.setPesquisa(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/pesquisa?p=${encodeURIComponent(props.pesquisa)}`);
              }
            }}
          />
          <img id="lupa" src="/svg/icone_lupa_preto.svg" />
        </div>
        <div id="icones">
          <a onClick={abrirPerfil}>
            <img className="icone" src={iconePerfil} />
          </a>
          <Link to="/favoritos">
            <img className="icone" src="/svg/icone_coracao_branco.svg" />
          </Link>
          <Link to="/carrinho">
            <img className="icone" src="/svg/icone_carrinho_branco.svg" />
          </Link>
        </div>
      </div>
      {componente}
    </header>
  );
}
