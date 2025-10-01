import { Link } from "react-router-dom";

export default function CardFavorito(props) {
  return (
    <Link to="/detalhe">
      <div className="card">
        <div className="foto">
          {props.foto}
          <img class="foto_perfume" src={`/img/perfume${props.id}.png`} />
        </div>
        <div className="nome_produto">{props.nome}</div>
        <div className="opcao_favoritos">
          <Link to="/carrinho">
            <img src="/svg/icone_carrinho_preto.svg"></img>
          </Link>
          <Link to="/">
            <img src="/svg/icone_lixeira_preto.svg"></img>
          </Link>
        </div>
      </div>
    </Link>
  );
}
