import { Link } from "react-router-dom";

import Config from "../config";

export default function CardFavorito(props) {
  return (
    <div className="card">
      <div className="foto">
        <img
          className="foto_perfume"
          src={`${Config.urlApi}perfume/obter-imagem/${props.perfumeId}`}
        />
      </div>
      <div className="nome_produto">{props.nome}</div>
      <div className="opcao_favoritos">
        <Link to={`/detalhe/${props.perfumeId}`}>
          <img src="/svg/icone_clique.svg"></img>
        </Link>
        <a
          onClick={() => {
            props.excluirFavorito(props.id);
          }}
        >
          <img src="/svg/icone_lixeira_preto.svg"></img>
        </a>
      </div>
    </div>
  );
}
