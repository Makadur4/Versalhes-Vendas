import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { obterMarcaTodas } from "../api/marca";
import { obterTiposTodos } from "../api/tipo";

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
    const resultadoMarcas = await obterMarcaTodas();

    if (resultadoMarcas.mensagem != "") {
      alert(resultadoMarcas.mensagem);

      navigate("/");
    }

    const resultadoTipos = await obterTiposTodos();

    if (resultadoTipos.mensagem != "") {
      alert(resultadoTipos.mensagem);

      navigate("/");
    }

    setMarcas(resultadoMarcas.lista);
    setTipos(resultadoTipos.lista);
  }

  useEffect(() => {
    atualizarListas();
  }, []);

  function aplicarFiltros() {
    props.setFiltros({
      preco: parseInt(preco),
      marcas: marcasSelecionadas,
      tipos: tiposSelecionados,
    });
  }

  function limparFiltros() {
    setPreco("0");
    setMarcasSelecionadas({});
    setTiposSelecionados({});

    props.setFiltros({
      preco: 0,
      marcas: {},
      tipos: {},
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
        {item.tipo}
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
            min="50.00"
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
