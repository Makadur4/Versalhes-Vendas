import { Link } from "react-router-dom";

export default function () {
  return (
    <main className="main_centralizado">
      <div>
        <div className="texto_redefinir_senha">
          <img className="cadiado" src="/svg/icone_cadiado.svg" />
          <img
            className="redefini_senha_svg"
            src="/svg/texto_sucesso_redefinicao.svg"
          />
        </div>
      </div>
      <div className="botao_voltar">
        <Link to="/">
          <button>Voltar para a tela inicial</button>
        </Link>
      </div>
    </main>
  );
}
