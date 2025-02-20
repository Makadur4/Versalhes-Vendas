export default function () {
    return (
        <main className="cadastro">
            <div className="foto_perfil">
                    <img src="/svg/icone_perfil_preto.svg" />
                </div>
            <div className="formulario">
                <div>
                    <label className="label" htmlFor="email">
                        E-mail:
                    </label>
                    <input type="text" className="input" id="email"></input>

                    <label className="label" htmlFor="senha">
                        Senha:
                    </label>
                    <input type="text" className="input" id="senha"></input>

                    <label className="label" htmlFor="data_nascimento">
                        Data de nascimento:
                    </label>
                    <input type="text" className="input3" id="data_nascimento"></input>

                    <label className="label" htmlFor="cpf">
                        CPF:
                    </label>
                    <input type="text" className="input3" id="cpf"></input>
                </div>
                <div>
                <label className="label" htmlFor="telefone">
                    Telefone:
                </label>
                <input type="text" className="input3" id="telefone"></input>

                <label className="label" htmlFor="genero">
                    Gênero:
                </label>
                
                <div className="generos">
                <div className="masculino">
                <input type="radio" htmlFor="genero" name="genero"></input>
                <span>Masculino</span>
                <img src="/svg/simbolo_masculino.svg" />
                </div>
                
                <div className="feminino">
                <input type="radio" htmlFor="genero" name="genero"></input>
                <span>Feminino</span>
                <img src="/svg/simbolo_feminino.svg" />
                </div>
                </div>
            </div>
            </div>
        </main>
    );
}