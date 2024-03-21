import React from 'react';
import './ubicacion.css';

import ubi3 from '../assets/ubicacion/ubicacion01.jpg';
import ubi2 from '../assets/ubicacion/ubicacion02.jpg';
import ubi1 from '../assets/ubicacion/ubicacion03.jpg';

const Ubicacion = () => {
  return (
    <div className='ubicacion' id='ubicacion'>
      <div className='title'>
        <h2>ubicación</h2>
        <div className='line'></div>
      </div>
       <section>
        <article className='izq'>
            <h4>¿donde podes encontrarnos?</h4>
            <p>el estudio se encuentra en el encantador barrio de Palermo, *ubicacion*.</p>
            <img src={ubi1} alt="foto de avenida" />
          </article>
          <article className='ctro'>
            <h4>el lugar perfecto</h4>
            <p>para no ser uno mas de la lista, tener una atención especial y de calidad.</p>
            <img src={ubi2} alt="peluquero y cliente" />
          </article>
          <article className='der'>
            <h4>euforia estilistas</h4>
            <p>un espacio seguro para que puedas sentirte escuchado, en donde se toman en cuenta tus deseos y se respeta tu momento.</p>
            <img src={ubi3} alt="local" />
          </article>
       </section> 

    </div>
  )
}

export default Ubicacion