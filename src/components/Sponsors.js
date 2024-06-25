import React, { useState, useEffect, useRef } from 'react';

function Sponsors() {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const patrociniosRef = useRef([]);
  const patrociniosPorPagina = 3;

  useEffect(() => {
    mostrarPatrocinios();
  }, [paginaAtual]);

  const mostrarPatrocinios = () => {
    const patrocinios = patrociniosRef.current;
    if (patrocinios.length === 0) return;

    patrocinios.forEach(patrocinio => patrocinio.style.display = 'none');
    const inicio = paginaAtual * patrociniosPorPagina;
    patrocinios.slice(inicio, inicio + patrociniosPorPagina).forEach(patrocinio => patrocinio.style.display = 'block');
  };

  const handleEsquerdaClick = () => {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const handleDireitaClick = () => {
    if (paginaAtual < Math.ceil(patrociniosRef.current.length / patrociniosPorPagina) - 1) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  return (
    <div className="container-fluid at">
      <div className="row" style={{ marginTop: '200px' }}>
        {['/img-sponsors/viseu.svg', '/img-sponsors/pingodoce.svg', '/img-sponsors/viseu2.svg', '/img-sponsors/selecao.svg', '/img-sponsors/lusitania.svg', '/img-sponsors/ipv.svg'].map((src, index) => (
          <div className="col-lg-3 patrocinio" key={index} ref={el => patrociniosRef.current[index] = el}>
            <img src={src} alt={`Patrocinio ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="botoes">
        <button className="btnesquerda2" onClick={handleEsquerdaClick}>
          <img src="/img-sponsors/setaesquerda.svg" alt="Seta Esquerda" />
        </button>
        <button className="btndireita2" onClick={handleDireitaClick}>
          <img src="/img-sponsors/setadireita.svg" alt="Seta Direita" />
        </button>
      </div>
    </div>
  );
}

export default Sponsors;
