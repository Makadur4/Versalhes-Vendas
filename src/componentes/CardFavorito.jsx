import { Link } from "react-router-dom";

export default function (props) {
  return (
    <div class="card">
      <div class="foto">
        {props.foto}
        <img class="foto_perfume" src={`/img/perfume${props.id}.png`} />
      </div>

      <div class="nome_produto">{props.nome}</div>
      <div className="opcao_favoritos">
        <img src="/img/carrinho-black.svg"></img>
        <img src="/img/trash.svg"></img>
      </div>
    </div>
  );
}
