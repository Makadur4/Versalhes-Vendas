import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ClienteService from "../services/cliente-service";

export default function () {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  async function confirmarOperacao(e) {
    e.preventDefault();

    try {
      ClienteService.solicitarRecuperacaoSenha(email);

      alert("Por favor, acesse sua caixa de mensagens e siga as instruções.");

      navigate("/");
    } catch (erro) {
      alert(erro.obterMensagem());
    }
  }

  return (
    <main className="recuperar_senha">
      <form className="recuperar_senha" onSubmit={confirmarOperacao}>
        <div>
          <div className="texto_redefinir_senha">
            <img className="cadiado" src="/svg/icone_cadiado.svg" />
            <img className="redefini_senha_svg" src="/svg/texto_redefinir_senha.svg" />
          </div>
          <label className="label" htmlFor="email">
            Digite o E-mail de cadastro para redefinir a senha:
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
        </div>
        <div className="botao_continuar">
          <button type="submit">Continuar</button>
        </div>
      </form>
    </main>
  );
}
