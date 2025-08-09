import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { obterCondicoesPagamentoTodas } from "./api/condicao_pagamento";

import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import Menu from "./componentes/Menu";
import Main from "./componentes/Main";
import Rodape from "./componentes/Rodape";
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
  const [pesquisa, setPesquisa] = useState("");
  const [condicoesPagamento, setCondicoesPagamento] = useState([]);
  const [quantidadeParcelas, setQuantidadeParcelas] = useState(0);

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
  }, []);

  return (
    <>
      <BrowserRouter>
        <Cabecalho pesquisa={pesquisa} setPesquisa={setPesquisa} />
        <Menu />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                secao=""
                setPesquisa={setPesquisa}
                quantidadeParcelas={quantidadeParcelas}
              />
            }
          />
          <Route
            path="/masculino"
            element={
              <Main
                secao="masculino"
                setPesquisa={setPesquisa}
                quantidadeParcelas={quantidadeParcelas}
              />
            }
          />
          <Route
            path="/feminino"
            element={
              <Main
                secao="feminino"
                setPesquisa={setPesquisa}
                quantidadeParcelas={quantidadeParcelas}
              />
            }
          />
          <Route
            path="/especiais"
            element={
              <Main
                secao="especiais"
                setPesquisa={setPesquisa}
                quantidadeParcelas={quantidadeParcelas}
              />
            }
          />
          <Route
            path="/ofertas"
            element={
              <Main
                secao="ofertas"
                setPesquisa={setPesquisa}
                quantidadeParcelas={quantidadeParcelas}
              />
            }
          />
          <Route
            path="/pesquisa"
            element={
              <Main
                secao=""
                pesquisa={pesquisa}
                setPesquisa={setPesquisa}
                quantidadeParcelas={quantidadeParcelas}
              />
            }
          />
          <Route
            path="/detalhe/:idPerfume"
            element={<DetalheProduto quantidadeParcelas={quantidadeParcelas} />}
          />

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
