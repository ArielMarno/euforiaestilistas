import React from 'react';
import './footer.css';

import logo from '../assets/logo/euforiab.png';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='logo'>
        <img src={logo} alt="logo euforia" />
      </div>
      <nav>
        <div>
          <a href="#inicio">inicio</a>
          <a href="#nosotros">nosotros</a>
        </div>

        <div>
          <a href="#ubicacion">ubicacion</a>
          <a href="#servicios">servicios</a>
        </div>
      </nav>
      <div className='privacidad'>
        <p>politicas de privacidad</p>
      </div>
    </div>
  )
}

export default Footer