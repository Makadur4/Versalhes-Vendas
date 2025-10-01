import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import { obterCondicoesPagamentoTodas } from "./api/condicao_pagamento";

import Cabecalho from "./components/Cabecalho";
import Menu from "./components/menu";

//import Main from "./componentes/Main";
//import DetalheProduto from "./componentes/DetalheProduto";
//import Carrinho from "./componentes/Carrinho";
//import Frete from "./componentes/Frete";
//import Endereco from "./componentes/Endereco";
//import Pagamento from "./componentes/Pagamento";
//import ConclusaoPedido from "./componentes/ConclusaoPedido";
//import Pedido from "./componentes/Pedido";

//import Login from "./componentes/Login";
//import Cadastro from "./componentes/Cadastro";
//import RecuperarSenha from "./componentes/RecuperarSenha";
//import RedefinirSenha from "./componentes/RedefinirSenha";
//import ConfirmacaoDefinicao from "./componentes/ConfirmacaoDefinicao";

//import SobreNos from "./componentes/SobreNos";
//import Ajuda from "./componentes/Ajuda";
//import Contato from "./componentes/Contato";

//import EntregaPedido from "./componentes/EntregaPedido";

import Rodape from "./components/Rodape";

import "./App.css";

function App() {
  const [pesquisa, setPesquisa] = useState("");
  /* const [condicoesPagamento, setCondicoesPagamento] = useState([]);
  const [quantidadeParcelas, setQuantidadeParcelas] = useState(0);
  const [carrinho, setCarrinho] = useState(JSON.parse(sessionStorage.getItem("carrinho") ?? "[]"));
  const [token, setToken] = useState(sessionStorage.getItem("jwtToken") ?? "");

  function guardarToken(valor) {
    sessionStorage.setItem("jwtToken", valor);
    setToken(valor);
  }

  function guardarCarrinho(valor) {
    sessionStorage.setItem("carrinho", JSON.stringify(valor));
    setCarrinho(valor);
  }

  async function carregarCondicoesPagamento() {
    const resultado = await obterCondicoesPagamentoTodas();

    if (resultado.mensagem != "") {
      alert(resultado.mensagem);

      return;
    }

    setCondicoesPagamento(resultado.lista);

    const maiorQuantidadeParcelas = resultado.lista.reduce((maior, item) => {
      return item.quantidadeParcelas > maior.quantidadeParcelas ? item : maior;
    }).quantidadeParcelas;

    setQuantidadeParcelas(maiorQuantidadeParcelas);
  }

  useEffect(() => {
    carregarCondicoesPagamento();
  }, []);*/

  return (
    <>
      <BrowserRouter>
        <Cabecalho pesquisa={pesquisa} setPesquisa={setPesquisa} />
        <Menu />
        <Routes>
          {/*<Route path="/" element={<Main secao="" setPesquisa={setPesquisa} quantidadeParcelas={quantidadeParcelas} />} />
          <Route path="/masculino" element={<Main secao="masculino" setPesquisa={setPesquisa} quantidadeParcelas={quantidadeParcelas} />} />
          <Route path="/feminino" element={<Main secao="feminino" setPesquisa={setPesquisa} quantidadeParcelas={quantidadeParcelas} />} />
          <Route path="/especiais" element={<Main secao="especiais" setPesquisa={setPesquisa} quantidadeParcelas={quantidadeParcelas} />} />
          <Route path="/ofertas" element={<Main secao="ofertas" setPesquisa={setPesquisa} quantidadeParcelas={quantidadeParcelas} />} />
          <Route path="/pesquisa" element={<Main secao="" pesquisa={pesquisa} setPesquisa={setPesquisa} quantidadeParcelas={quantidadeParcelas} />} />
          <Route path="/favoritos" element={<Main secao="favoritos" />} />
          <Route path="/detalhe/:idPerfume" element={<DetalheProduto quantidadeParcelas={quantidadeParcelas} carrinho={carrinho} guardarCarrinho={guardarCarrinho} />} />
          <Route path="/carrinho" element={<Carrinho carrinho={carrinho} quantidadeParcelas={quantidadeParcelas} guardarCarrinho={guardarCarrinho} />} />
          <Route path="/frete" element={<Frete token={token} carrinho={carrinho} />} />
          <Route path="/endereco" element={<Endereco token={token} />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/conclusaopedido" element={<ConclusaoPedido />} />
          <Route path="/pedido" element={<Pedido />} />
          <Route path="/login" element={<Login guardarToken={guardarToken} token={token} />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/recuperarsenha" element={<RecuperarSenha />} />
          <Route path="/redefinirsenha" element={<RedefinirSenha />} />
          <Route path="/confirmacaodefinicao" element={<ConfirmacaoDefinicao />} />

          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/contato" element={<Contato />} />

          <Route path="/entregapedido" element={<EntregaPedido />} />*/}
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
