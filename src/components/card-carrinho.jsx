import Config from "../config";

export default function CardCarrinho(props) {
  const precoTotal = props.precoVenda * props.quantidade;

  const componente =
    precoTotal == props.precoVenda ? null : (
      <>
        {" "}
        <br />
        <div>
          R${" "}
          {precoTotal.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      </>
    );

  return (
    <div key={props.id} className="moldura_produto">
      <div className="moldura_carrinho">
        <h1>
          <img className="foto_dior_carrinho" src={`${Config.urlApi}perfume/obter-imagem/${props.id}`} />
        </h1>
      </div>
      <div className="descricao_carrinho">
        <div className="nome_produto">
          <p>{props.nome}</p>
          <div className="opcao_produto">
            <select
              value={props.quantidade}
              onChange={(e) => {
                props.mudarQuantidadeItem(props.id, e.target.value);
              }}
            >
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
            <button
              onClick={() => {
                props.removerItem(props.id);
              }}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
      <div className="valor_produto_carrinho">
        <div>
          R${" "}
          {props.precoVenda.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
        {componente}
      </div>
    </div>
  );
}
