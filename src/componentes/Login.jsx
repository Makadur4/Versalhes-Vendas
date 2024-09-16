export default function () {
  return (
    <div className="login">
      <div>
        <div className="foto_perfil">
          <h1>
            <img src="/img/person-circle.svg" />
          </h1>
        </div>
        <label className="label" htmlFor="email">
          E-mail:
        </label>
        <input type="text" className="input" id="email"></input>

        <label className="label" htmlFor="senha">
          Senha:
        </label>
        <input type="text" className="input2" id="senha"></input>
      </div>
      <div className="esqueceu_senha">
        <span>Esqueceu a senha?</span>
      </div>
      <div className="botao_continuar">
        <button>Continuar</button>
      </div>
      <div className="texto_cadastrar">
        <span>Não se cadastrou ainda?</span>
        <a href="">cadastre-se</a>
      </div>
    </div>
  );
}
