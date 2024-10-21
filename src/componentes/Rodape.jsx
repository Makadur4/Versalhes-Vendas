function Links() {
  return (
    <div id="links">
      <ul id="lista_links">
        <li className="objeto_links">Sobre Nós</li>
        <li className="objeto_links">|</li>
        <li className="objeto_links">Ajuda</li>
        <li className="objeto_links">|</li>
        <li className="objeto_links">Contato</li>
      </ul>
    </div>
  );
}

function Contato() {
  return (
    <div id="rodape">
      <div className="Contato">
        <div id="objeto_rodape1">WhatsApp: (11) 99910-8746</div>
        <div id="objeto_rodape2">E-mail: teamsvesalhes@gmail.com</div>
        <div id="objeto_rodape3">
          Endereço: Av. Alameda Rio Branco, 885 - São Paulo - SP - CEP: 0645-027
        </div>
      </div>
    </div>
  );
}

export default function Rodape() {
  return (
    <footer>
      <Links />
      <Contato />
    </footer>
  );
}
