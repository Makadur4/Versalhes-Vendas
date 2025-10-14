import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  formatarData,
  formatarCpf,
  formatarTelefone,
} from "../utils/formatacao-util";

import ClienteService from "../services/cliente-service";

export default function (props) {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");

  const location = useLocation();
  const parametros = new URLSearchParams(location.search);
  const origem = parametros.get("o");

  const navigate = useNavigate();

  async function carregarDados() {
    try {
      if ((props.token ?? "") == "") {
        return;
      }

      const cliente = await ClienteService.obterCliente(props.token);

      setCpf(cliente.cpf);
      setNome(cliente.nome);
      setDataNascimento(cliente.dataNascimento);
      setSexo(cliente.sexo);
      setTelefone(cliente.telefone);
      setEmail(cliente.email);
    } catch (erro) {
      alert(erro.obterMensagem());

      navigate("/");
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  async function concluirOperacao(e) {
    e.preventDefault();

    try {
      if (senha !== confirmacao) {
        alert("A confirmação não correponde à nova senha digitada!");

        return;
      }

      if ((props.token ?? "") == "") {
        await ClienteService.incluirCliente(
          cpf,
          nome,
          dataNascimento,
          sexo,
          telefone,
          email,
          senha
        );

        alert("Cadastro concluído com sucesso!");

        navigate(`/login?o=${origem}`);
      } else {
        await ClienteService.alterarCliente(
          props.token,
          cpf,
          nome,
          dataNascimento,
          sexo,
          telefone,
          email,
          senha
        );

        alert("Cadastro alterado com sucesso!");

        navigate("/");
      }
    } catch (erro) {
      if (erro.codigo == 404) {
        alert(
          "Cadastro não encontrado. Por favor, verifique o link de acesso!"
        );
      } else {
        alert(erro.obterMensagem());
      }
    }
  }

  return (
    <main className="main_centralizada">
      <form className="cadastro" onSubmit={concluirOperacao}>
        <div className="foto_perfil">
          <img src="/svg/icone_perfil_preto.svg" />
        </div>
        <div className="dados_cadastrais">
          <div className="formulario">
            <div>
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
              <label className="label" htmlFor="nome">
                Nome:
              </label>
              <input
                type="text"
                className="input"
                id="nome"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
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
              <label className="label" htmlFor="genero">
                Gênero:
              </label>
              <div className="generos">
                <div className="masculino">
                  <input
                    type="radio"
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
                className="input"
                id="senha"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
                required
              ></input>
              <label className="label" htmlFor="confirmacao">
                Confirmação:
              </label>
              <input
                type="password"
                className="input"
                id="confirmacao"
                value={confirmacao}
                onChange={(e) => {
                  setConfirmacao(e.target.value);
                }}
                required
              ></input>
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
