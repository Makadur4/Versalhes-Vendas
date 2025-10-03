import { Link } from "react-router-dom";

import Config from "../config";

export default function (props) {
  const preco =
    props.estoque == 0 ? (
      <div className="preco_produto">
        <span>Indisponível</span>
      </div>
    ) : (
      <>
        <div className="preco_produto">
          <span>{`R$ ${props.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} à vista`}</span>
        </div>

        <div className="parcelas_produto">ou em até {props.parcelas}x (consulte condições)</div>
      </>
    );

  return (
    <Link to={`/detalhe/${props.id}`}>
      <div className="card">
        <div className="foto">
          <img className="foto_perfume" src={`${Config.urlApi}perfume/obter-imagem/${props.id}`} />
        </div>

        <div className="nome_produto">{props.nome}</div>
        {preco}
      </div>
    </Link>
  );
}
