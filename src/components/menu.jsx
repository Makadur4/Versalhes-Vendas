import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <ul id="lista">
        <li className="objetos_das_listas">
          <Link to="/masculino">
            <img src="/svg/texto_masculino.svg" />
          </Link>
        </li>
        <li className="objetos_das_listas">
          <Link to="/feminino">
            <img src="/svg/texto_feminino.svg" />
          </Link>
        </li>
        <li className="objetos_das_listas">
          <Link to="/especiais">
            <img src="/svg/texto_especiais.svg" />
          </Link>
        </li>
        <li className="objetos_das_listas">
          <Link to="/ofertas">
            <img src="/svg/texto_ofertas.svg" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
