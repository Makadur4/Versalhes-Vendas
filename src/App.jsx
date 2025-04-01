import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import Menu from "./componentes/Menu";
import Main from "./componentes/Main";
import Rodape from "./componentes/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalheProduto from "./componentes/DetalheProduto";
import Login from "./componentes/Login";
import Carrinho from "./componentes/Carrinho";
import Frete from "./componentes/Frete";

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
          <Route path="/frete" element={<Frete />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
