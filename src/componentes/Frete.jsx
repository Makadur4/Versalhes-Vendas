import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { obterEnderecoEntrega } from "../api/cliente";

export default function (props) {
  const [endereco, setEndereco] = useState();

  const navigate = useNavigate();

  async function consultarEnderecoEntrega() {
    const resultado = await obterEnderecoEntrega(props.token);

    if (resultado.mensagem != "") {
      alert(resultado.mensagem);

      return;
    }

    setEndereco(resultado.endereco);
  }

  useEffect(() => {
    if (!props.token || props.token == "") {
      navigate("/login?o=frete");

      return;
    }

    if (props.carrinho.length == 0) {
      alert("Seu carrinho está vazio!");

      navigate("/");

      return;
    }

    consultarEnderecoEntrega();
  }, []);

  let componente;

  if (endereco != null && endereco.cep != "") {
    componente = (
      <>
        <div className="endereço">
          <span>
            {endereco && endereco.endereco}, {endereco && endereco.numero}
            {endereco && endereco.complemento != "" && ` - ${endereco.complemento}`}
          </span>
          <span>
            {endereco && endereco.bairro} | {endereco && endereco.municipio} – {endereco && endereco.uf}
          </span>
          <span>{endereco && endereco.cep}</span>
          <span>{endereco && endereco.responsavel}</span>
        </div>
        <div className="botao_alterar">
          <button
            type="button"
            className="botao_branco"
            onClick={(e) => {
              navigate("/endereco");
            }}
          >
            Alterar
          </button>
        </div>
      </>
    );
  } else {
    componente = (
      <div className="botao_alterar">
        <button
          className="botao_branco"
          onClick={(e) => {
            navigate("/endereco");
          }}
        >
          Informe o Endereço
        </button>
      </div>
    );
  }

  return (
    <main className="detalhe">
      <div className="card_frete">
        <div className="moldura_frete">{componente}</div>
        <div className="moldura_forma_entrega">
          <span>Escolha uma forma de receber o produto</span>
          <div className="formas_entrega">
            <input type="radio" name="entrega" />
            <label>Receba em até 30 dias - Grátis</label>
          </div>
          <div className="formas_entrega">
            <input type="radio" name="entrega" />
            <label>Receba em até 10 dias - R$ 15,00</label>
          </div>
        </div>
      </div>
      <div className="card_dados_pedido">
        <div className="primeira_moldura">
          <div className="produto_pedido">
            <div className="moldura_perfume_pedido">
              <img src="/img/perfume1.png"></img>
            </div>
            <span>PERFUME DIOR SAUVAGE MASCULINO EAU DE TOILETTE</span>
          </div>
        </div>
        <div className="segunda_moldura">
          <div className="produto_pedido">
            <div className="moldura_perfume_pedido">
              <img src="/img/perfume1.png"></img>
            </div>
            <span>PERFUME DIOR SAUVAGE MASCULINO EAU DE TOILETTE</span>
          </div>
        </div>
        <div className="terceira_moldura">
          <span>2 unidades</span>
          <div className="custos">
            <div className="coluna_dados">
              <span>Desconto</span>
              <span>Frete</span>
              <span>Valor</span>
            </div>
            <div className="coluna_dados">
              <span>R$ 0,00</span>
              <span>R$ 15,00</span>
              <span>R$ 404,99</span>
            </div>
          </div>
          <Link to="/pagamento">
            <button className="botao_prosseguir">Prosseguir</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
