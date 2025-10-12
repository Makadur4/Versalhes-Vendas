import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ClienteService from "../services/cliente-service";

import { formatarCep } from "../utils/formatacao-util";
import ApoioService from "../services/apoio-service";

export default function (props) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [uf, setUf] = useState("");

  const navigate = useNavigate();

  async function atualizarDados() {
    try {
      const endrecoCliente = await ClienteService.obterEnderecoCliente(
        props.token
      );

      if (endrecoCliente.cep == null) {
        return;
      }

      setCep(endrecoCliente.cep);
      setEndereco(endrecoCliente.endereco);
      setNumero(endrecoCliente.numero);
      setComplemento(endrecoCliente.complemento);
      setBairro(endrecoCliente.bairro);
      setMunicipio(endrecoCliente.municipio);
      setUf(endrecoCliente.uf);
    } catch (erro) {
      alert(erro.obterMensagem());

      navigate("/");
    }
  }

  useEffect(() => {
    if (!props.token || props.token == "") {
      navigate("/login?o=endereco");

      return;
    }

    atualizarDados();
  }, []);

  async function concluirOperacao(e) {
    e.preventDefault();

    try {
      await ClienteService.alterarEnderecoCliente(
        props.token,
        cep,
        endereco,
        numero,
        complemento,
        bairro,
        municipio,
        uf
      );

      navigate("/frete");
    } catch (erro) {
      alert(erro.obterMensagem());

      navigate("/");
    }
  }

  return (
    <main className="cadastro">
      <form className="cadastro" onSubmit={concluirOperacao}>
        <div className="dados_cadastrais">
          <div className="formulario">
            <div>
              <label className="label" htmlFor="cep">
                CEP:
              </label>
              <input
                type="text"
                className="input3"
                id="cep"
                value={cep}
                onChange={(e) => {
                  setCep(formatarCep(e.target.value));
                }}
                required
              ></input>
              <label className="label" htmlFor="endereco">
                Endereco:
              </label>
              <input
                type="text"
                className="input"
                id="endereco"
                value={endereco}
                onChange={(e) => {
                  setEndereco(e.target.value);
                }}
                required
              ></input>
              <label className="label" htmlFor="numero">
                Número:
              </label>
              <input
                type="text"
                className="input3"
                id="numero"
                value={numero}
                onChange={(e) => {
                  setNumero(e.target.value);
                }}
                required
              ></input>
              <label className="label" htmlFor="complemento">
                Complemento:
              </label>
              <input
                type="text"
                className="input3"
                id="complemento"
                value={complemento}
                onChange={(e) => {
                  setComplemento(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label className="label" htmlFor="bairro">
                Bairro:
              </label>
              <input
                type="text"
                className="input3"
                id="bairro"
                value={bairro}
                onChange={(e) => {
                  setBairro(e.target.value);
                }}
                required
              ></input>
              <label className="label" htmlFor="municipio">
                Município:
              </label>
              <input
                type="text"
                className="input3"
                id="municipio"
                value={municipio}
                onChange={(e) => {
                  setMunicipio(e.target.value);
                }}
                required
              ></input>
              <label className="label" htmlFor="uf">
                UF:
              </label>
              <select
                className="input3"
                id="uf"
                value={uf}
                onChange={(e) => {
                  setUf(e.target.value);
                }}
                required
              >
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AM">AM</option>
                <option value="AP">AP</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MG">MG</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="PR">PR</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="RS">RS</option>
                <option value="SC">SC</option>
                <option value="SE">SE</option>
                <option value="SP">SP</option>
                <option value="TO">TO</option>
              </select>
            </div>
          </div>
          <button type="submit" className="botao_cadastro">
            Confirmar
          </button>
        </div>
      </form>
    </main>
  );
}
