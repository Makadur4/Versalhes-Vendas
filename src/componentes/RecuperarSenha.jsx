import { Link } from "react-router-dom"

export default function () {
  return (
    <main className="recuperar_senha">
      <div>
        <div className="texto_redefinir_senha">
          <img className="cadiado" src="/svg/icone_cadiado.svg" />
          <img className="redefini_senha_svg" src="/svg/texto_redefinir_senha.svg" />
        </div>
        <label className="label" htmlFor="email">
          Digite o E-mail de cadastro para redefinir a senha:
        </label>
        <input type="text" className="input" id="email"></input>
      </div>
      <div className="botao_continuar">
        <Link to="/redefinirsenha"><button>Continuar</button></Link>
      </div>
    </main>
  )
}
