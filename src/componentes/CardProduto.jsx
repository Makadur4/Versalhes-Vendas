import { Link } from "react-router-dom";

export default function (props) {
  return (
    <Link to="/detalhe">
      <div class="card">
        <div class="foto">
          {props.foto}
          <img class="foto_perfume" src={`/img/perfume${props.id}.png`} />
        </div>

        <div class="nome_produto">{props.nome}</div>

        <div class="preco_produto">
          <span>{props.preco} à vista</span>
        </div>

        <div class="parcelas_produto">
          ou em {props.parcelas_produto}x sem juros
        </div>
      </div>
    </Link>
  );
}
