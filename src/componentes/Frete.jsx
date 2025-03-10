import { Link } from "react-router-dom";

export default function () {
  return (
    <main className="detalhe">
      <div className="card_frete">
        <div className="moldura_frete">
          <div className="endereço">
            <span>RUA WENER GOLDBER, 77 - 151 C</span>
            <span>Jardim Tupanci | Barueri – SP</span>
            <span>06414-025​</span>
            <span>José Ribeiro</span>
          </div>
          <div className="botao_alterar">
            <button className="botao_branco">Alterar</button>
          </div>
        </div>
        <div className="moldura_forma_entrega">
          <span>Escolha uma forma de receber o produto</span>
          <div className="formas_entrega">
            <input type="radio" name="entrega" /><label>Receba em até 30 dias - Grátis</label>
          </div>
          <div className="formas_entrega">
            <input type="radio" name="entrega" /><label>Receba em até 10 dias - R$ 15,00</label>
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
          <Link to="/pagamento"><button className="botao_prosseguir">Prosseguir</button></Link>
        </div>
      </div>
    </main>
  );
}
