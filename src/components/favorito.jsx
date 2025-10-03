export default function (props) {
  const ativo = props.favorito != null && props.favorito.id != 0;

  return (
    <a className="Favoritar" onClick={props.alterarFavorito}>
      <img src={`/svg/icone_coracao_preto${ativo ? "_preenchido" : ""}.svg`}></img> {ativo ? "Remover" : "Favoritar"}
    </a>
  );
}
