import { Link } from "react-router-dom";

export default function (props) {

    function CapturarClique(event) {
        event.stopPropagation();
    }

    return(
        <div className="overlay" onClick={props.FuncaoFechar}>
        <div className="overlay_modal" >
            <div className="modal" onClick={CapturarClique}>
                    <div className="botoes_modal">
                        <ul>
                            <li><Link to="/login"><button className="botao_modal">Entrar</button></Link></li>
                            <li><Link to="/cadastro"><button className="botao_modal">Cadastro</button></Link></li>
                        </ul>
                    </div>
            </div>
        </div>
    </div>    
    )
}