import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <ul id="lista">
        <li className="objetos_das_listas">
          <Link to="/masculinos">
            <img src="/svg/texto_masculinos.svg" />
          </Link>
        </li>
        <li className="objetos_das_listas">
          <Link to="/femininos">
            <img src="/svg/texto_femininos.svg" />
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
