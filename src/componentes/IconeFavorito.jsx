export default function (props) {
  return (
    <a className="Favoritar" onClick={props.mudarStatusFavorito}>
      <img
        src={`/svg/icone_coracao_preto${
          props.favorito ? "_preenchido" : ""
        }.svg`}
      ></img>{" "}
      {props.favorito ? "Remover" : "Favoritar"}
    </a>
  );
}
