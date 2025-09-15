import { Link } from "react-router-dom";

export default function () {
  return (
    <main className="main_links">
      <div className="card_link_contato">
        <label className="estado">SÃO PAULO</label>
        <span>
          Av. Alameda rio branco, 885 <br />
          São Paulo – SP – CEP:0645-027 Email:<a href="#">TeamsVersalhes@gmail.com</a>
          <br />
          WhatsApp: (11) 99910-8746
        </span>
      </div>
      <div className="card_link_contato_envio">
        <label>
          Nome:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="text" />
        </label>
        <label className="mensagem">
          Mensagem:
          <textarea />
        </label>
        <button>Enviar</button>
      </div>
    </main>
  );
}
