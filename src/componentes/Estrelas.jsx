
export default function Estrelas(props){

    let nivel1 = "";

    if(props.nivel >= 1) nivel1 = "-fill"

    let nivel2 = "";

if(props.nivel >= 2) nivel2 = "-fill"

    let nivel3 = "";

if(props.nivel >= 3) nivel3 = "-fill"

    let nivel4 = "";

if(props.nivel >= 4) nivel4 = "-fill"

    let nivel5 = "";

    if(props.nivel == 5) nivel5 = "-fill"

    return(
        <div className="Estrelas">
            <img src={`/img/star${nivel1}.svg`}></img>
            <img src={`/img/star${nivel2}.svg`}></img>
            <img src={`/img/star${nivel3}.svg`}></img>
            <img src={`/img/star${nivel4}.svg`}></img>
            <img src={`/img/star${nivel5}.svg`}></img>
        </div>
    )
}