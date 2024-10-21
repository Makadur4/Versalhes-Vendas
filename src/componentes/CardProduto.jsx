import { Link } from "react-router-dom";

export default function (props) {
  return (
    <Link to={`/detalhe/${props.IdPerfume}`}>
      <div className="card">
        <div className="foto">
          <img
            className="foto_perfume"
            src={`http://localhost:8080/imagem/${props.IdPerfume}`}
          />
        </div>

        <div className="nome_produto">{props.Nome}</div>

        <div className="preco_produto">
          <span>{props.PrecoNormal} à vista</span>
        </div>

        <div className="parcelas_produto">
          ou em {props.Parcelas}x sem juros
        </div>
      </div>
    </Link>
  );
}
