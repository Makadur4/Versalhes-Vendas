export default function CardCarrinho() {
  return (
    <div className="moldura_produto">
      <div className="moldura_carrinho">
        <h1>
          <img className="foto_dior_carrinho" src="/img/perfume1.png"></img>
        </h1>
      </div>
      <div className="descricao">
        <div className="nome_produto">
          <p>PERFUME DIOR SAUVAGE MASCULINO EAU DE TOILETTE</p>
          <div className="opcao_produto">
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <button>Remover</button>
          </div>
        </div>
      </div>
      <div className="valor_produto_carrinho">
        <span>RS 199,99</span>
      </div>
    </div>
  );
}
