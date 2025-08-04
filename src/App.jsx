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
import ConclusaoPedido from "./componentes/ConclusaoPedido";
import Pedido from "./componentes/Pedido";
import EntregaPedido from "./componentes/EntregaPedido";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Menu />

        <Routes>
          <Route path="/" element={<Main secao="" />} />

          <Route path="/masculino" element={<Main secao="masculino" />} />
          <Route path="/feminino" element={<Main secao="feminino" />} />
          <Route path="/especiais" element={<Main secao="especiais" />} />
          <Route path="/ofertas" element={<Main secao="ofertas" />} />
          <Route path="/detalhe/:idPerfume" element={<DetalheProduto />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/frete" element={<Frete />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/conclusaopedido" element={<ConclusaoPedido />} />
          <Route path="/pedido" element={<Pedido />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/recuperarsenha" element={<RecuperarSenha />} />
          <Route path="/redefinirsenha" element={<RedefinirSenha />} />
          <Route path="/favoritos" element={<Main secao="favoritos" />} />
          <Route
            path="/confirmacaodefinicao"
            element={<ConfirmacaoDefinicao />}
          />
          <Route path="/entregapedido" element={<EntregaPedido />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
