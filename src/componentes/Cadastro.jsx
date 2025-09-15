import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { formatarData, formatarCpf, formatarTelefone } from "../utils/formatacao";
import { efetuarCadastro } from "../api/cliente";

export default function () {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState("");

  const location = useLocation();
  const parametros = new URLSearchParams(location.search);
  const origem = parametros.get("o");

  const navigate = useNavigate();

  async function concluirOperacao(e) {
    e.preventDefault();

    const resultado = await efetuarCadastro(email, senha, dataNascimento, cpf, telefone, sexo);

    if (resultado.mensagem != "") {
      alert(resultado.mensagem);

      return;
    }

    alert("Cadastro concluído com sucesso!");

    navigate(`/login?o=${origem}`);
  }

  return (
    <main className="cadastro">
      <form className="cadastro" onSubmit={concluirOperacao}>
        <div className="foto_perfil">
          <img src="/svg/icone_perfil_preto.svg" />
        </div>
        <div className="dados_cadastrais">
          <div className="formulario">
            <div>
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
                type="text"
                className="input"
                id="senha"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
                required
              ></input>
              <label className="label" htmlFor="data_nascimento">
                Data de nascimento:
              </label>
              <input
                type="text"
                className="input3"
                id="data_nascimento"
                value={dataNascimento}
                onChange={(e) => {
                  setDataNascimento(formatarData(e.target.value));
                }}
                required
              ></input>
              <label className="label" htmlFor="cpf">
                CPF:
              </label>
              <input
                type="text"
                className="input3"
                id="cpf"
                value={cpf}
                onChange={(e) => {
                  setCpf(formatarCpf(e.target.value));
                }}
                required
              ></input>
            </div>
            <div>
              <label className="label" htmlFor="telefone">
                Telefone:
              </label>
              <input
                type="text"
                className="input3"
                id="telefone"
                value={telefone}
                onChange={(e) => {
                  setTelefone(formatarTelefone(e.target.value));
                }}
                required
              ></input>
              <label className="label" htmlFor="genero">
                Gênero:
              </label>
              <div className="generos">
                <div className="masculino">
                  <input
                    type="radio"
                    htmlFor="genero"
                    name="genero"
                    value="M"
                    checked={sexo === "M"}
                    onChange={(e) => {
                      setSexo(e.target.value);
                    }}
                    required
                  ></input>
                  <span>Masculino</span>
                  <img src="/svg/simbolo_masculino.svg" />
                </div>
                <div className="feminino">
                  <input
                    type="radio"
                    htmlFor="genero"
                    name="genero"
                    value="F"
                    checked={sexo === "F"}
                    onChange={(e) => {
                      setSexo(e.target.value);
                    }}
                    required
                  ></input>
                  <span>Feminino</span>
                  <img src="/svg/simbolo_feminino.svg" />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="botao_cadastro">
            Salvar Dados
          </button>
        </div>
      </form>
    </main>
  );
}
