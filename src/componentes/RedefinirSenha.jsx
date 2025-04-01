import { Link } from "react-router-dom"

export default function () {
    return(
        <main className="redefinir_senha">
              <div>
                <div className="texto_redefinir_senha">
                  <img className="cadiado" src="/svg/icone_cadiado.svg" />
                  <img className="redefini_senha_svg" src="/svg/texto_redefinir_senha.svg" />
                </div>
                <label className="label" htmlFor="email">
                Digite a nova senha:
                </label>
                <input type="text" className="input3" id="email"></input>
                <label className="label" htmlFor="email">
                Confirme a nova senha:
                </label>
                <input type="text" className="input4" id="email"></input>
              </div>
              <div className="botao_continuar">
                <Link to="/confirmacaodefinicao"><button>Continuar</button></Link>
              </div>
            </main>
    )
}
