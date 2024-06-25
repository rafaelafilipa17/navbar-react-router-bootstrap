import React from 'react';

function Footer() {
  return (
    <div>
      <br /><br /><br /><br /><br />

      <img src="/img-footer/Group476.svg" className="Group476" alt="Group 476" />
      <div className="container-fluid">
        <div className="final">
          <h3>CONTACTOS</h3>
          <div className="contactos">
            <img src="/img-footer/email2 1.svg" alt="Email Icon" />
            <a href="mailto:geral@dinamoclubeestacao.com">
              geral@dinamoclubeestacao.com
            </a>
            <br />
            <img src="/img-footer/telemovel.svg" alt="Phone Icon" />
            <a href="tel:961715003">
              961 715 003
            </a>
            <br />
            <img src="/img-footer/local.svg" alt="Location Icon" />
            <a href="https://www.google.com/maps?q=Quinta+das+Fontainhas+Lote+28,+3510-224+Viseu">
              Quinta das Fontainhas Lote 28
              <br />
              Escritório J, 3510-224 Viseu
            </a>
          </div>
          <h3 className="horario">HORÁRIO</h3>
          <div className="horarios">
            <img src="/img-footer/relogio.svg" alt="Clock Icon" />
            De Segunda a Sexta feira:
            <br />
            Das 9h00-12h30 E 14h00-18h00
          </div>
          <div className="rodape">
            <h6>© 2022 Dínamo Clube Estação Viseu. All Rights Reserved</h6>
            <img src="/img-footer/facebook.svg" className="social" alt="Facebook Icon" />
            <img src="/img-footer/instagram.svg" className="social" alt="Instagram Icon" />
          </div> 
        </div>
      </div> 
    </div>
  );
}

export default Footer;
