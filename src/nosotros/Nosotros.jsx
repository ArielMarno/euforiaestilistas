import React from 'react';
import './nosotros.css';

import nos01 from '../assets/nosotros/nosotros01.jpg';
import nos02 from '../assets/nosotros/nosotros02.jpg';

import otowil from '../assets/nosotros/otowil.png';
import han from '../assets/nosotros/han.png';
import opcion from '../assets/nosotros/opcion.png';

const Nosotros = () => {
  return (
    <div className='nosotros' id='nosotros'>

      <div className='title'>
        <h2>nosotros</h2>
        <div className='line'></div>
      </div>

      <section>
        <img src={nos01} alt="corte de pelo" className='top-left'/>
        <article>
          <p className='naranja'><span>euforia estudio</span> te brinda un espacio en el que podes llevar tu look a otro nivel.</p>
          <p>respetamos siempre tu vision para lograr que muestres todo tu caracter a traves de tu estilo.</p>
        </article>
      </section>

      <section>
        <article>
          <div>
            <p className='naranja'>desde el año 2016 dedicandonos profesionalmente a lo que amamos hacer.</p>
            <p>incorporamos especialistas y herramientas para brindarte los mejores servicios.</p>
          </div>

          <div>
            <p>trabajamos con los mejores productos y las marcas mas prestigiosas del mercado. </p>
            <p className='naranja'>buscamos que tu piel y tu pelo tengan el mejor trato posible, y que recibas la mejor atencion.</p>
          </div>

          <div className='marcas'>
            <img src={otowil} alt="logo otowil" />
            <img src={han} alt="logo han" />
            <img src={opcion} alt="logo opcion" />
          </div>
        </article>

        <img src={nos02} alt="tijeras peluqueria" className='bottom-right'/>
  
      </section>

    </div>
  )
}

export default Nosotros