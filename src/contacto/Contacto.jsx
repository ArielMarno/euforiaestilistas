import React from 'react';
import './contacto.css';

const Contacto = () => {
  return (
    <div className='contacto' id='contacto'>

      <div className='title'>
        <h2>contacto</h2>
        <div className='line'></div>
      </div>

      <section>
        <p>ponete en contacto y agenda tu turno,<br /> <span>te estamos esperando!</span></p>
        <div>
          <a href='#' className='btn-contacto'>whatsapp</a>
          <a href='#' className='btn-contacto'>instagram</a>
        </div>
      </section>
    </div>
  )
}

export default Contacto