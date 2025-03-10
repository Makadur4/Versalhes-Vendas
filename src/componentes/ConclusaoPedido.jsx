import { Link } from "react-router-dom";

export default function () {
    return (
        <main className="detalhe">
            <div className="card_confirmacao_pedido">
                <span>Sucesso! O número do seu pedido é: 999-999</span>
                <div className="primeira_moldura">
                    <div className="produto_pedido">
                        <div className="moldura_perfume_pedido">
                            <img src="/img/perfume1.png"></img>
                        </div>
                        <span>PERFUME DIOR SAUVAGE MASCULINO EAU DE TOILETTE</span>
                    </div>
                </div>
                <div className="primeira_moldura">
                    <div className="produto_pedido">
                        <div className="moldura_perfume_pedido">
                            <img src="/img/perfume1.png"></img>
                        </div>
                        <span>PERFUME DIOR SAUVAGE MASCULINO EAU DE TOILETTE</span>
                    </div>
                </div>
            </div>
            <div className="card_pedido">
                <div className="primeira_moldura">
                    <div className="coluna_geral">
                        <div className="coluna_dados">
                            <span>Valor Total:</span>
                            <span className="span_pedido">Formas de pagamento:</span>
                        </div>
                        <div className="coluna_dados">
                            <span>R$ 404,99</span>
                            <span>Crédito</span>
                        </div>
                    </div>
                </div>
                <div className="segunda_moldura">
                    <div className="coluna_dados">
                        <span>RUA WENER GOLDBER, 77 - 151 C</span>
                        <span>JARDIM TUPANCI | BARUERI - SP</span>
                        <span>06414-025</span>
                        <span>JOSÉ RIBEIRO</span>
                    </div>
                </div>
                <div className="terceira_moldura">
                    <div className="coluna_geral">
                        <div className="coluna_dados">
                            <span>Previsão de Entrega</span>
                        </div>
                        <div className="coluna_dados">
                            <span>11/09/23</span>
                        </div>
                    </div>
                    <Link to="/pedido"><button className="botao_concluir">Acompanhar o pedido</button></Link>
                </div>
            </div>
        </main>
    )
}