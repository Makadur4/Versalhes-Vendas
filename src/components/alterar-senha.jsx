import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ClienteService from "../services/cliente-service";

export default function () {
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");

  const location = useLocation();
  const parametros = new URLSearchParams(location.search);
  const chave = parametros.get("k");

  const navigate = useNavigate();

  async function confirmarOperacao(e) {
    e.preventDefault();

    try {
      if (senha !== confirmacao) {
        alert("A confirmação não correponde à nova senha digitada!");

        return;
      }

      await ClienteService.alterarSenha(chave, senha);

      navigate("/confirmacao-senha");
    } catch (erro) {
      if (erro.codigo == 404) {
        alert("Usuário não encontrado. Por favor, verifique o link de acesso!");
      } else {
        alert(erro.obterMensagem());
      }
    }
  }

  return (
    <main className="main_centralizada">
      <form className="redefinir_senha" onSubmit={confirmarOperacao}>
        <div>
          <div className="texto_redefinir_senha">
            <img className="cadiado" src="/svg/icone_cadiado.svg" />
            <img
              className="redefini_senha_svg"
              src="/svg/texto_redefinir_senha.svg"
            />
          </div>
          <label className="label" htmlFor="senha">
            Digite a nova senha:
          </label>
          <input
            type="password"
            className="input3"
            id="senha"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
            required
          ></input>
          <label className="label" htmlFor="confirmacao">
            Confirme a nova senha:
          </label>
          <input
            type="password"
            className="input4"
            id="confirmacao"
            value={confirmacao}
            onChange={(e) => {
              setConfirmacao(e.target.value);
            }}
            required
          ></input>
        </div>
        <div className="botao_continuar">
          <button>Continuar</button>
        </div>
      </form>
    </main>
  );
}
