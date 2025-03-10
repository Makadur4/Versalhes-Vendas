import { Link } from "react-router-dom";

export default function () {
    return (
        <main className="detalhe">
            <div className="card_pagamento ">
                <div className="dados_cartao">
                    <div className="coluna_input">
                        <div className="input_pagamento">
                            <span>Número do cartão:</span>
                            <input type="text" className="input_200"></input>
                        </div>
                        <div className="input_pagamento">
                            <span>Nome no cartão:</span>
                            <input type="text" className="input_200"></input>
                        </div>
                        <div className="input_pagamento">
                            <span>Validade:</span>
                            <input type="text" className="input_150"></input>
                        </div>
                        <div className="input_pagamento">
                            <span>Códigos de segurança:</span>
                            <input type="text" className="input_150"></input>
                        </div>
                    </div>
                    <div className="coluna_input">
                        <div className="input_pagamento">
                            <span>Número de parcelas:</span>
                            <input type="text" className="input_100"></input>
                        </div>
                        <div className="salvar_cartao">
                            <input type="checkbox"></input>
                            <span>Salvar cartão</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card_dados_pedido">
                <div className="primeira_moldura">
                    <div className="produto_pedido">
                        <div className="moldura_perfume_pedido">
                            <img src="/img/perfume1.png"></img>
                        </div>
                        <span>PERFUME DIOR SAUVAGE MASCULINO EAU DE TOILETTE</span>
                    </div>
                </div>
                <div className="segunda_moldura">
                    <div className="produto_pedido">
                        <div className="moldura_perfume_pedido">
                            <img src="/img/perfume1.png"></img>
                        </div>
                        <span>PERFUME DIOR SAUVAGE MASCULINO EAU DE TOILETTE</span>
                    </div>
                </div>
                <div className="terceira_moldura">
                    <span>2 unidades</span>
                    <div className="custos">
                        <div className="coluna_dados">
                            <span>Desconto</span>
                            <span>Frete</span>
                            <span>Valor</span>
                        </div>
                        <div className="coluna_dados">
                            <span>R$ 0,00</span>
                            <span>R$ 15,00</span>
                            <span>R$ 404,99</span>
                        </div>
                    </div>
                    <Link to="/conclusaopagamento"><button className="botao_concluir">Concluir compra</button></Link>
                </div>
            </div>
        </main>
    )
}