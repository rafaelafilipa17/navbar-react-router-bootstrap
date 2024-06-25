import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Form() {
  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div class="container terceiro">
      <div class="inscreva position-relative" style={{ marginBottom: '-213px' }}>
        <h3 class="position-absolute start-0">O desporto une-nos!</h3>
        <h6 class="position-absolute start-0">
          Inscreva-se agora e faça parte desta comunidade apaixonada pelo desporto.
        </h6>
        <button
          type="button"
          class="btn btn-primary rounde position-absolute end-0"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={handleShow}
        >
          <h5>Inscreva-se</h5>
        </button>
      </div>

      <div class={`modal fade ${showModal ? 'show' : ''}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ backdropFilter: 'blur(3px)' }}>
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content" style={{ width: '650px', height: '487px' }}>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">FORMULÁRIO DE INSCRIÇÃO</h5>
              <button type="button" class="btn-close" onClick={handleClose} aria-label="Fechar"></button>
            </div>
            <div class="modal-body d-flex justify-content-center" style={{ alignItems: 'flex-start', width: '740px' }}>
              <img src="/img-form/line.svg" style={{ width: '4px', marginBottom: '193px' }} alt="decorative line" />
              <h3 class="titleForm" style={{ position: 'relative', fontSize: '20px' }}>FORMULÁRIO DE INSCRIÇÃO</h3>
              <form class="d-flex flex-column">
                <div class="row" style={{ position: 'absolute', left: '42px', bottom: '233px' }}>
                  <div class="col">
                    <label for="exampleInputEmail1" class="form-label">Nome *</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nome *" style={{ borderWidth: '2px', borderColor: '#7EC424' }} />
                  </div>
                  <div class="col">
                    <label for="exampleInputPassword1" class="form-label">Modalidade *</label>
                    <select class="form-select" aria-label="Default select example" style={{ borderWidth: '2px', borderColor: '#004100' }}>
                      <option selected>Modalidade *</option>
                      <option value="1">Futebol</option>
                      <option value="2">Futsal</option>
                      <option value="3">Atletismo</option>
                      <option value="4">Ténis de Mesa</option>
                      <option value="5">Campismo e Montanhismo</option>
                    </select>
                  </div>
                </div>
                <div class="row" style={{ position: 'absolute', left: '42px', bottom: '179px' }}>
                  <div class="col">
                    <label for="exampleInputEmail2" class="form-label">Email *</label>
                    <input type="text" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Email *" style={{ borderWidth: '2px', borderColor: '#004100' }} />
                  </div>
                  <div class="col">
                    <label for="date" class="form-label">Data</label>
                    <div class="input-group date" id="datepicker">
                      <input type="text" class="form-control" id="date" placeholder="DATA" />
                      <span class="input-group-append">
                        <span class="input-group-text bg-light d-block">
                          <i class="fa fa-calendar"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <a style={{ color: '#7EC424', bottom: '310px', position: 'fixed', right: '967px' }}>*</a>
                <a style={{ color: '#004100', position: 'fixed', bottom: '310px', right: '686px' }}>campos de preenchimento obrigatório.</a>
                <div class="form-check" style={{ position: 'fixed', bottom: '280px', right: '967px' }}>
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    <a style={{ color: '#004100', bottom: '277px', position: 'fixed', right: '875px' }}>Li e aceito a</a>
                    <a style={{ color: '#7EC424', bottom: '276px', position: 'fixed', right: '712px' }}>Política de Privacidade</a>
                  </label>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btnModal btn btn-light" onClick={handleClose}>ENVIAR</button>
            </div>
          </div>
        </div>
      </div>

      <img src="/img-form/Rectangle42.svg" class="position-absolute" style={{ top: '2061px', right: '22px' }} alt="decorative rectangle" />
      <img src="/img-form/Rectangle41.svg" class="position-absolute" style={{ top: '2061px', right: '22px' }} alt="decorative rectangle" />
    </div>
  );
}

export default Form;
