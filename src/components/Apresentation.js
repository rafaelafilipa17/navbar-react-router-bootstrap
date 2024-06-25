import React from 'react';

function Apresentation() {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: '300px' }}>
        <div className="col-12 p-0">
          <img src="/img-apresentation/RetanguloDown.svg" className="retangulo-down img-fluid position-absolute" alt="RetanguloDown" />
          <picture>
            <source media="(max-width: 767px)" srcSet="/img-apresentation/relva.svg" className="relva" />
            <img src="/img-apresentation/futebolista.svg" className="futebolista img-fluid position-absolute" alt="futebolista" />
          </picture>
          <div className="titulo text-center">
            <h1>CAMINHAMOS RUMO AO</h1>
            <h1 className="nobord">SUCESSO.</h1>
            <br />
            <p>SOBRE O DÍNAMO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apresentation;
