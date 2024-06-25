import React from 'react';

function Panel() {
  return (
    <div className="container-fluid at">
      <div className="atividades position-relative">
        <img src="/img-panel/gradiente.svg" className="gradiente" alt="gradiente" />
        <h1>DESCUBRA <br /> AS PRÓXIMAS <br /> ATIVIDADES </h1>
        <img src="/img-panel/agenda.svg" className="agenda position-absolute" alt="agenda" />
        <h5>Toda a agenda</h5>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active principal" href="#">Futebol</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active secundario" href="#">Futsal</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active secundario" href="#">Ténis de Mesa</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active secundario" href="#">Atletismo</a>
          </li>
        </ul>
        <div className="container quarto">
          <div className="row jogos">
            <div className="col-sm-12 col-lg-6">
              <div className="evento">
                <img src="/img-panel/Rectangle37.svg" className="Rectangle37" alt="Rectangle37" />
                <h2 className="data">17 <br /> FEV.</h2>
                <img src="/img-panel/logo1.svg" className="logo" alt="logo1" />
                <h4>VS</h4>
                <img src="/img-panel/dinamo.svg" className="dinamo" alt="dinamo" />
              </div>
              <div className="conteudoNovo">
                <img src="/img-panel/Rectangle37.svg" className="Rectangle37" alt="Rectangle37" />
                <h2 className="data">17 <br /> FEV.</h2>
                <h6 className="sub">SUB 10A</h6>
                <h6 className="datahora">Sábado 17 | 09:00</h6>
                <h6 className="info">Ranhados vs Dínamo C.Estação <br /> Parque Desportivo st Eufemia</h6>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-lg-6">
              <div className="evento2">
                <img src="/img-panel/Rectangle37.svg" className="Rectangle37" alt="Rectangle37" />
                <h2 className="data">17 <br /> FEV.</h2>
                <img src="/img-panel/logo2.svg" className="logo" alt="logo2" />
                <h4>VS</h4>
                <img src="/img-panel/dinamo.svg" className="dinamo" alt="dinamo" />
              </div>
              <div className="conteudoNovo2">
                <img src="/img-panel/Rectangle37.svg" className="Rectangle37" alt="Rectangle37" />
                <h2 className="data">17 <br /> FEV.</h2>
                <h6 className="sub">SUB 10A</h6>
                <h6 className="datahora">Sábado 17 | 09:00</h6>
                <h6 className="info">Ranhados vs Dínamo C.Estação <br /> Parque Desportivo st Eufemia</h6>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-lg-6 pt-1">
              <div className="evento3">
                <img src="/img-panel/Rectangle37.svg" className="Rectangle37" alt="Rectangle37" />
                <h2 className="data">17 <br /> FEV.</h2>
                <img src="/img-panel/logo1.svg" className="logo" alt="logo1" />
                <h4>VS</h4>
                <img src="/img-panel/dinamo.svg" className="dinamo" alt="dinamo" />
              </div>
              <div className="conteudoNovo3">
                <img src="/img-panel/Rectangle37.svg" className="Rectangle37" alt="Rectangle37" />
                <h2 className="data">17 <br /> FEV.</h2>
                <h6 className="sub">SUB 10A</h6>
                <h6 className="datahora">Sábado 17 | 09:00</h6>
                <h6 className="info">Ranhados vs Dínamo C.Estação <br /> Parque Desportivo st Eufemia</h6>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-lg-6 pt-1">
              <div className="evento4">
                <img src="/img-panel/Rectangle37.svg" className="Rectangle37" alt="Rectangle37" />
                <h2 className="data">-</h2>
                <img src="/img-panel/logo3.svg" className="logo" alt="logo3" />
                <h4>VS</h4>
                <img src="/img-panel/dinamo.svg" className="dinamo" alt="dinamo" />
              </div>
              <div className="conteudoNovo4">
                <img src="/img-panel/Rectangle37.svg" className="Rectangle37" alt="Rectangle37" />
                <h2 className="data">17 <br /> FEV.</h2>
                <h6 className="sub">SUB 10A</h6>
                <h6 className="datahora">Sábado 17 | 09:00</h6>
                <h6 className="info">Ranhados vs Dínamo C.Estação <br /> Parque Desportivo st Eufemia</h6>
              </div>
            </div>
          </div>
          <button className="btnesquerda">
            <img src="/img-panel/setaesquerda.svg" alt="setaesquerda" />
          </button>
          <button className="btndireita">
            <img src="/img-panel/setadireita.svg" alt="setadireita" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Panel;
