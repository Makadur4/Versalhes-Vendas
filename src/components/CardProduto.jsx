import { Link } from "react-router-dom";

export default function (props) {
  return (
    <Link to={`/detalhe/${props.idPerfume}`}>
      <div className="card">
        <div className="foto">
          <img
            className="foto_perfume"
            src={`http://localhost:8080/imagem/${props.idPerfume}`}
          />
        </div>

        <div className="nome_produto">{props.nome}</div>

        <div className="preco_produto">
          <span>
            R${" "}
            {props.preco.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            à vista
          </span>
        </div>

        <div className="parcelas_produto">
          ou em até {props.parcelas}x (consulte condições)
        </div>
      </div>
    </Link>
  );
}
