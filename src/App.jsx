import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import ApoioService from "./services/apoio-service";

import Cabecalho from "./components/cabecalho";
import Menu from "./components/menu";
import Rodape from "./components/rodape";

import Main from "./components/main";
import DetalheProduto from "./components/detalhe-produto";
import Carrinho from "./components/carrinho";
import Frete from "./components/frete";
import Endereco from "./components/endereco";
import Pagamento from "./components/pagamento";
import ConclusaoPedido from "./components/conclusao-pedido";
import Pedidos from "./components/pedidos";
import DetalhePedido from "./components/detalhe-pedido";
import Login from "./components/login";
import Cadastro from "./components/Cadastro";
import RecuperarSenha from "./components/recuperar-senha";
import AlterarSenha from "./components/alterar-senha";
import ConfirmacaoSenha from "./components/confirmacao-senha";
import SobreNos from "./components/sobre-nos";
import Ajuda from "./components/ajuda";
import Contato from "./components/contato";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("jwtToken") ?? "");
  const [carrinho, setCarrinho] = useState(JSON.parse(sessionStorage.getItem("carrinho") ?? "[]"));
  const [frete, setFrete] = useState(null);

  const [pesquisa, setPesquisa] = useState("");
  const [condicoesPagamento, setCondicoesPagamento] = useState([]);
  const [quantidadeParcelas, setQuantidadeParcelas] = useState(0);

  function guardarToken(valor) {
    sessionStorage.setItem("jwtToken", valor);
    setToken(valor);
  }

  function guardarCarrinho(valor) {
    sessionStorage.setItem("carrinho", JSON.stringify(valor));
    setCarrinho(valor);
  }

  async function carregarCondicoesPagamento() {
    try {
      const resultado = await ApoioService.obterCondicoesPagamento();

      setCondicoesPagamento(resultado);

      const maiorQuantidadeParcelas = resultado.reduce((maior, item) => {
        return item.quantidadeParcelas > maior.quantidadeParcelas ? item : maior;
      }).quantidadeParcelas;

      setQuantidadeParcelas(maiorQuantidadeParcelas);
    } catch (erro) {
      alert(erro.obterMensagem());
    }
  }

  useEffect(() => {
    carregarCondicoesPagamento();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Cabecalho token={token} guardarToken={guardarToken} pesquisa={pesquisa} setPesquisa={setPesquisa} carrinho={carrinho} />
        <Menu />
        <Routes>
          <Route path="/" element={<Main secao="" setPesquisa={setPesquisa} quantidadeParcelas={quantidadeParcelas} />} />
          <Route path="/masculinos" element={<Main secao="Masculinos" setPesquisa={setPesquisa} quantidadeParcelas={quantidadeParcelas} />} />
          <Route path="/femininos" element={<Main secao="Femininos" setPesquisa={setPesquisa} quantidadeParcelas={quantidadeParcelas} />} />
          <Route path="/especiais" element={<Main secao="Especiais" setPesquisa={setPesquisa} quantidadeParcelas={quantidadeParcelas} />} />
          <Route path="/ofertas" element={<Main secao="Ofertas" setPesquisa={setPesquisa} quantidadeParcelas={quantidadeParcelas} />} />
          <Route path="/pesquisa" element={<Main secao="" pesquisa={pesquisa} setPesquisa={setPesquisa} quantidadeParcelas={quantidadeParcelas} />} />
          <Route path="/favoritos" element={<Main token={token} secao="Favoritos" setPesquisa={setPesquisa} />} />
          <Route path="/detalhe/:id" element={<DetalheProduto token={token} quantidadeParcelas={quantidadeParcelas} carrinho={carrinho} guardarCarrinho={guardarCarrinho} />} />
          <Route path="/carrinho" element={<Carrinho carrinho={carrinho} quantidadeParcelas={quantidadeParcelas} guardarCarrinho={guardarCarrinho} />} />
          <Route path="/frete" element={<Frete token={token} carrinho={carrinho} setFrete={setFrete} />} />
          <Route path="/endereco" element={<Endereco token={token} />} />
          <Route path="/pagamento" element={<Pagamento token={token} frete={frete} carrinho={carrinho} condicoesPagamento={condicoesPagamento} />} />
          <Route path="/conclusao-pedido/:id" element={<ConclusaoPedido token={token} guardarCarrinho={guardarCarrinho} />} />
          <Route path="/pedidos" element={<Pedidos token={token} />} />
          <Route path="/detalhe-pedido/:id" element={<DetalhePedido token={token} />} />
          <Route path="/login" element={<Login guardarToken={guardarToken} token={token} />} />
          <Route path="/cadastro" element={<Cadastro token={token} />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
          <Route path="/alterar-senha" element={<AlterarSenha />} />
          <Route path="/confirmacao-senha" element={<ConfirmacaoSenha />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
