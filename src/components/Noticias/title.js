import React, { useEffect } from 'react';

const Title = () => {
  useEffect(() => {
    const tituloF = document.querySelector('.tituloF');
    const hidden = document.querySelector('.hidden');

    const handleMouseEnter = () => {
      hidden.classList.remove('d-none');
      hidden.classList.add('d-block');
    };

    const handleMouseLeave = () => {
      setTimeout(() => {
        hidden.classList.remove('d-block');
        hidden.classList.add('d-none');
      }, 7000);
    };

    tituloF.addEventListener('mouseenter', handleMouseEnter);
    tituloF.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tituloF.removeEventListener('mouseenter', handleMouseEnter);
      tituloF.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div>
      <img src="/Noticias/img-title/Rectangle237.svg" className="Rectangle237 img-fluid z-index-n1" alt="Rectangle237" />
      <img src="/Noticias/img-title/noticias.png" className="clube img-fluid" alt="noticias" />
      <h1 className="tituloF end-0">NOTÍCIAS</h1>
      <a href="PaginaInicial.html" type="button" className="hidden btn btn-link">HOME {'>'}</a>
    </div>
  );
}

export default Title;
