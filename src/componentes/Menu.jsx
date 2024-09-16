import { Link } from "react-router-dom";

export default function Menu()
{

    return(

     <nav>
        <ul id="lista">
              <li class="objetos_das_listas">
                  <Link to="/masculino">
                    <img src="/img/masculino.svg" />
                  </Link>
              </li>

              <li class="objetos_das_listas">
                <Link to="/feminino">
                  <img src="/img/feminino.svg" />
                </Link>  
              </li>

              <li class="objetos_das_listas">
                <Link to="/especiais">
                  <img src="/img/especiais.svg" />
                </Link>
              </li>

              <li class="objetos_das_listas">
                <Link to="/ofertas">
                  <img src="/img/ofertas.svg" />
                </Link>
              </li>

          </ul>
     </nav>
    )
}