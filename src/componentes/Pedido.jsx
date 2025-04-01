import { Link } from "react-router-dom";

export default function () {
    return (
        <main className="detalhe">
            <div className="card_seus_pedidos">
            <span>Meus Pedidos:</span>
                <div className="primeira_moldura">
                    <div className="pedido">
                        <div className="dados_pedido">
                        <div className="marcador_pedido">
                            <img src="/svg/circulo_pedido_azul.svg"></img>
                            <span>Nr: 7493827461</span>
                            </div>
                            <span>Total de Produtos: 2</span>
                        </div>
                        <div className="dados_pedido">
                            <span>Data: 20/03/25</span>
                            <span>Valor Total: R$ 399,99</span>
                        </div>
                    </div>
                </div>
                <div className="primeira_moldura">
                    <div className="pedido">
                        <div className="dados_pedido">
                            <div className="marcador_pedido">
                            <img src="/svg/circulo_pedido.svg"></img>
                            <span>Nr: 8295710284</span>
                            </div>
                            <span>Total de Produtos: 1</span>
                        </div>
                        <div className="dados_pedido">
                            <span>Data: 10/03/25</span>
                            <span>Valor Total: R$ 499,99</span>
                        </div>
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
                    <Link to="/entregapedido"><button className="botao_concluir">Acompanhar a entrega</button></Link>
                </div>
            </div>
        </main>
    )
}