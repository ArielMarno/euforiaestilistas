import React from 'react';
import './servicios.css';

import peluqueria from '../assets/servicios/servicios-peluqueria.jpg';
import coloracion from '../assets/servicios/servicios-coloracion.jpg';
import maquillaje from '../assets/servicios/servicios-maquillaje.jpg';


const Servicios = () => {
  return (
    <div className='servicios' id='servicios'>
      <div className='title'>
        <h2>servicios</h2>
        <div className='line'></div>
      </div>

      <section>
        <article className='peluqueria'>
          <img src={peluqueria} alt="peluquero cortando el pelo" />
          <div>
            <h3>peluqueria</h3>
            <p>diseño de corte y peinados </p>
            <a href='#' className='btn'>reservar turno</a>
          </div>
        </article>

        <article className='coloracion'>
          <div>
            <h3>coloración</h3>
            <p>color tradicional, balayage, reflejos e iluminación y más.</p>
            <a href='#' className='btn'>reservar turno</a>
          </div>
          <img src={coloracion} alt="mujer preparando una coloración" />
        </article>

        <article className='maquillaje'>
          <img src={maquillaje} alt="maquillista" />
          <div>
            <h3>maquillaje profesional</h3>
            <p>maquillaje social y editorial para producciones audiovisuales.</p>
            <a href='#' className='btn'>reservar turno</a>
          </div>
        </article>
      </section>

    </div>
  )
}

export default Servicios