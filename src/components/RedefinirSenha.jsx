import { useState } from "react";

import { gravarNovaSenha } from "../api/cliente";
import { useNavigate } from "react-router-dom";

export default function () {
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");

  const navigate = useNavigate();

  async function confirmarOperacao(e) {
    e.preventDefault();

    if (senha !== confirmacao) {
      alert("A confirmação não correponde à nova senha digitada!");

      return;
    }

    const resultado = await gravarNovaSenha(senha);

    if (resultado.mensagem != "") {
      alert(resultado.mensagem);

      return;
    }

    navigate(`/confirmacaodefinicao`);
  }

  return (
    <main className="redefinir_senha">
      <form className="redefinir_senha" onSubmit={confirmarOperacao}>
        <div>
          <div className="texto_redefinir_senha">
            <img className="cadiado" src="/svg/icone_cadiado.svg" />
            <img className="redefini_senha_svg" src="/svg/texto_redefinir_senha.svg" />
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
