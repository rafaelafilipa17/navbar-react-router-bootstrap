import React from 'react';

const Highlight = () => {
    const handleLeftClick = () => {
        alert('Esquerda!');
    };

    const handleRightClick = () => {
        alert('Direita!');
    };

    return (
        <div className="noticiaPrincipal position-relative">
            <img src="/Noticias/img-highlight/noticiaDestaque.svg" className="img-fluid" alt="Notícia Destaque" />
            <div className="caroussel-caption position-absolute p-2" style={{ left: '7%', top: '61%' }}>
                <div className="verticalLine">
                    <div className="noticia-content" id="noticia-content">
                        <h4 className="subtitle" style={{ color: 'white' }}>Ténis de Mesa</h4>
                        <h1 className="title" style={{ color: 'white' }}>Loren ipsum</h1>
                        <p className="description" style={{ color: 'white', lineHeight: 1.5, marginTop: '-22px' }}>
                            Loren ipsum loren ipsum loren ipsum Loren ipsum loren ipsum loren ipsum Loren ipsum loren ipsum loren
                            ipsum Loren ipsum
                        </p>
                    </div>
                    <button className="readMore">LER MAIS</button>
                    <input
                        type="image"
                        src="/Noticias/img-highlight/btnLeft.svg"
                        onClick={handleLeftClick}
                        style={{ bottom: '328px', width: '69px', height: '69px', left: '623px', position: 'relative' }}
                        alt="Botão Esquerda"
                    />
                    <input
                        type="image"
                        src="/Noticias/img-highlight/btnRight.svg"
                        onClick={handleRightClick}
                        style={{ width: '69px', height: '69px', position: 'relative', left: '631px', bottom: '328px' }}
                        alt="Botão Direita"
                    />
                </div>
            </div>
        </div>
    );
};

export default Highlight;
