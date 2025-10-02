import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ApoioService from "../services/apoio-service";

export default function (props) {
  const navigate = useNavigate();

  const [preco, setPreco] = useState("0");
  const [marcas, setMarcas] = useState([]);
  const [tipos, setTipos] = useState([]);

  const [marcasSelecionadas, setMarcasSelecionadas] = useState({});
  const [tiposSelecionados, setTiposSelecionados] = useState({});

  const selecionarMarcas = (id) => {
    setMarcasSelecionadas((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selecionarTipos = (id) => {
    setTiposSelecionados((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  async function atualizarListas() {
    try {
      const resultadoMarcas = await ApoioService.obterMarcas();

      setMarcas(resultadoMarcas);

      const resultadoTipos = await ApoioService.obterTipos();

      setTipos(resultadoTipos);
    } catch (erro) {
      alert(erro.obterMensagem());

      navigate("/");
    }
  }

  useEffect(() => {
    atualizarListas();
  }, []);

  function aplicarFiltros() {
    props.setFiltros({
      preco: parseInt(preco),
      marcas: Object.keys(marcasSelecionadas).filter((key) => marcasSelecionadas[key]),
      tipos: Object.keys(tiposSelecionados).filter((key) => tiposSelecionados[key]),
    });
  }

  function limparFiltros() {
    setPreco("0");
    setMarcasSelecionadas({});
    setTiposSelecionados({});

    props.setFiltros({
      preco: 0,
      marcas: [],
      tipos: [],
    });
  }

  const componenteMarcas = marcas.map((item) => {
    return (
      <li key={item.id}>
        <input
          key={item.id}
          type="checkbox"
          value={item.id}
          checked={!!marcasSelecionadas[item.id]}
          onChange={() => {
            selecionarMarcas(item.id);
          }}
        ></input>
        {item.nome}
      </li>
    );
  });

  const componenteTipos = tipos.map((item) => {
    return (
      <li key={item.id}>
        <input
          key={item.id}
          type="checkbox"
          value={item.id}
          checked={!!tiposSelecionados[item.id]}
          onChange={() => {
            selecionarTipos(item.id);
          }}
        ></input>
        {item.nome}
      </li>
    );
  });

  return (
    <div className="div_filtro">
      <div className="filtro">
        <span>Filtros</span>
      </div>
      <div className="itens_filtro">
        <div className="div_preco">
          <span>
            Preço: R$
            {" " +
              parseFloat(preco).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
          </span>
          <input
            className="input_preco"
            type="range"
            id="price-range"
            min="50.000"
            max="2000.00"
            step="50"
            value={preco}
            onChange={(e) => {
              setPreco(e.target.value);
            }}
          ></input>
        </div>
        <div className="div_itens">
          <span>Marca</span>
          <ul>{componenteMarcas}</ul>
        </div>
        <div className="div_itens">
          <span>Tipo</span>
          <ul>{componenteTipos}</ul>
        </div>
        <div className="grupo_botoes">
          <button className="botao_destaque" onClick={aplicarFiltros}>
            Aplicar
          </button>
          <button className="botao_branco" onClick={limparFiltros}>
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
}
