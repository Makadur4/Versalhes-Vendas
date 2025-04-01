import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import Menu from "./componentes/Menu";
import Main from "./componentes/Main";
import Rodape from "./componentes/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalheProduto from "./componentes/DetalheProduto";
import Login from "./componentes/Login";
import Carrinho from "./componentes/Carrinho";
import SobreNos from "./componentes/SobreNos";
import Ajuda from "./componentes/Ajuda";
import Contato from "./componentes/Contato";
import Cadastro from "./componentes/Cadastro";
import RecuperarSenha from "./componentes/RecuperarSenha";
import RedefinirSenha from "./componentes/RedefinirSenha";
import ConfirmacaoDefinicao from "./componentes/ConfirmacaoDefinicao";
import Frete from "./componentes/Frete";
import Pagamento from "./componentes/Pagamento";
import ConclusaoPagamento from "./componentes/ConclusaoPedido";
import Pedido from "./componentes/Pedido";
import EntregaPedido from "./componentes/EntregaPedido";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />

        <Menu />

        <Routes>
          <Route path="/" element={<Main filtro="" />} />
          <Route path="/masculino" element={<Main filtro="masculino" />} />
          <Route path="/feminino" element={<Main filtro="feminino" />} />
          <Route path="/especiais" element={<Main filtro="especiais" />} />
          <Route path="/ofertas" element={<Main filtro="ofertas" />} />
          <Route path="/detalhe/:idPerfume" element={<DetalheProduto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favoritos" element={<Main filtro="favoritos" />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/recuperarsenha" element={<RecuperarSenha />} />
          <Route path="/redefinirsenha" element={<RedefinirSenha />} />
          <Route
            path="/confirmacaodefinicao"
            element={<ConfirmacaoDefinicao />}
          />
          <Route path="/frete" element={<Frete />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/conclusaopagamento" element={<ConclusaoPagamento />} />
          <Route path="/pedido" element={<Pedido />} />
          <Route path="/entregapedido" element={<EntregaPedido />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
