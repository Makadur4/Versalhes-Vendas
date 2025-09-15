import { useState } from "react";

export default function () {
  const [seta1, setSeta1] = useState("/svg/icone_seta_direita.svg");
  const [seta2, setSeta2] = useState("/svg/icone_seta_direita.svg");
  const [seta3, setSeta3] = useState("/svg/icone_seta_direita.svg");
  const [seta4, setSeta4] = useState("/svg/icone_seta_direita.svg");
  const [seta5, setSeta5] = useState("/svg/icone_seta_direita.svg");
  const [mostrarSpan, setMostrarSpan] = useState(false);

  const AbrirDuvida1 = () => {
    setSeta1((prev) => (prev === "/svg/icone_seta_direita.svg" ? "/svg/icone_seta_baixo.svg" : "/svg/icone_seta_direita.svg"));

    setMostrarSpan((prev) => !prev);
  };

  function Duvida() {
    return <span className="duvida">Caso não encontre o perfume desejado na lista de produtos, tente procura-lo na barra de pesquisa no centro superior do nosso site. Se o problema persistir, tente filtrar os produtos pela a marca que desejar.</span>;
  }

  const AbrirDuvida2 = () => {
    setSeta2((prev) => (prev === "/svg/icone_seta_direita.svg" ? "/svg/icone_seta_baixo.svg" : "/svg/icone_seta_direita.svg"));
  };

  const AbrirDuvida3 = () => {
    setSeta3((prev) => (prev === "/svg/icone_seta_direita.svg" ? "/svg/icone_seta_baixo.svg" : "/svg/icone_seta_direita.svg"));
  };

  const AbrirDuvida4 = () => {
    setSeta4((prev) => (prev === "/svg/icone_seta_direita.svg" ? "/svg/icone_seta_baixo.svg" : "/svg/icone_seta_direita.svg"));
  };

  const AbrirDuvida5 = () => {
    setSeta5((prev) => (prev === "/svg/icone_seta_direita.svg" ? "/svg/icone_seta_baixo.svg" : "/svg/icone_seta_direita.svg"));
  };

  return (
    <main className="main_links">
      <div className={`card_links ${mostrarSpan ? "card_links_duvida" : ""}`}>
        <div className="titulo">
          <h2>Ajuda / Suporte</h2>
        </div>
        <div className="conteudo">
          <ul>
            <li>
              <img src={seta1} onClick={AbrirDuvida1}></img>Problemas para encontrar o produto desejado ?
            </li>
            {mostrarSpan && <Duvida />}
            <li>
              <img src={seta2} onClick={AbrirDuvida2}></img>Meu pedido consta como entregue, mas eu não recebi.
            </li>
            <li>
              <img src={seta3} onClick={AbrirDuvida3}></img>Qual é o processo de reembolso de acordo com as formas de pagamento ?
            </li>
            <li>
              <img src={seta4} onClick={AbrirDuvida4}></img>Como acompanhar o status de rastreio do meu pedido ?
            </li>
            <li>
              <img src={seta5} onClick={AbrirDuvida5}></img>Como faço para saber o prazo de entrega e modalidades disponíveis para o meu endereço ?
            </li>
          </ul>
          <div className="contato">
            <span>Não conseguiu resolver seu problema? Fale com um de nossos consultores:</span>
            <button className="botao_whats">WhatsApp</button>
            {/*https://wa.me/5511999999999*/}
          </div>
        </div>
      </div>
      <div className="logo_links">
        <img src="/img/logo.png" className="castelo"></img>
        <img src="/svg/texto_versalhes_black.svg" className="versalhes"></img>
      </div>
    </main>
  );
}
