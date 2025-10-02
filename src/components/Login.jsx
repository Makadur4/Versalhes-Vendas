import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ClienteService from "../services/cliente-service";

export default function (props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const location = useLocation();
  const parametros = new URLSearchParams(location.search);
  const origem = parametros.get("o");

  const navigate = useNavigate();

  async function concluirOperacao(e) {
    e.preventDefault();
    console.log("ok");
    try {
      const token = await ClienteService.validarCliente(email, senha);

      props.guardarToken(token);

      navigate(`/${origem}`);
    } catch (erro) {
      if (erro.codigo == 404) {
        alert("Usuário não encontrado. Por favor, verifique os dados e tente novamente!");
      } else {
        alert(erro.obterMensagem());
      }
    }
  }

  return (
    <main>
      <form className="login" onSubmit={concluirOperacao}>
        <div>
          <div className="foto_perfil">
            <img src="/svg/icone_perfil_preto.svg" />
          </div>
          <label className="label" htmlFor="email">
            E-mail:
          </label>
          <input
            type="text"
            className="input"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          ></input>
          <label className="label" htmlFor="senha">
            Senha:
          </label>
          <input
            type="password"
            className="input2"
            id="senha"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
            required
          ></input>
        </div>
        <div className="esqueceu_senha">
          <Link to="/recuperarsenha">
            <span>Esqueceu a senha?</span>
          </Link>
        </div>
        <div className="botao_continuar">
          <button type="submit">Continuar</button>
        </div>
        <div className="texto_cadastrar">
          <span>Não se cadastrou ainda?</span>
          <Link to={`/cadastro?o=${origem}`}>cadastre-se</Link>
        </div>
      </form>
    </main>
  );
}
