export default function Estrelas(props) {
  let nivel1 = "";

  if (props.nivel >= 1) nivel1 = "_preenchido";

  let nivel2 = "";

  if (props.nivel >= 2) nivel2 = "_preenchido";

  let nivel3 = "";

  if (props.nivel >= 3) nivel3 = "_preenchido";

  let nivel4 = "";

  if (props.nivel >= 4) nivel4 = "_preenchido";

  let nivel5 = "";

  if (props.nivel == 5) nivel5 = "_preenchido";

  return (
    <div className="Estrelas">
      <img src={`/svg/icone_estrela_preto${nivel1}.svg`}></img>
      <img src={`/svg/icone_estrela_preto${nivel2}.svg`}></img>
      <img src={`/svg/icone_estrela_preto${nivel3}.svg`}></img>
      <img src={`/svg/icone_estrela_preto${nivel4}.svg`}></img>
      <img src={`/svg/icone_estrela_preto${nivel5}.svg`}></img>
    </div>
  );
}
