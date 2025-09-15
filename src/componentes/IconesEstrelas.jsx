export default function IconesEstrelas(props) {
  const nivel1 = props.nivel >= 1 ? "_preenchido" : "";
  const nivel2 = props.nivel >= 2 ? "_preenchido" : "";
  const nivel3 = props.nivel >= 3 ? "_preenchido" : "";
  const nivel4 = props.nivel >= 4 ? "_preenchido" : "";
  const nivel5 = props.nivel >= 5 ? "_preenchido" : "";

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
