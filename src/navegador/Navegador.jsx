import {React, useState} from 'react';
import Burguer from './Burguer';
import './navegador.css';
import logo from '../assets/logo/euforiab.png';

const Navegador = () => {

  const[click, setClick] = useState(false);
  const handleClick = () =>{
  //setear el booleano opuesto al actual cuando se hace click en el boton
    setClick(!click);
  }

  return (
    <div className='navegador'>

      <div className='logo'>
        <img src={logo} alt="logo euforia"/>
      </div>
      <nav className={`links ${click ? 'active' : ''}`}>
        <a href="#inicio">inicio</a>
        <a href="#nosotros">nosotros</a>
        <a href="#ubicacion">ubicación</a>
        <a href="#servicios">servicios</a>
        <a href="#contacto">contacto</a>
      </nav>

      <div className='burguer'>
        <Burguer click={click} handleClick={handleClick}/>
      </div>

      <div className='idiomas'>
        <a href="#">ESP</a>
        <span>/</span>
        <a href="#">ENG</a>
      </div>
    </div>
  )
}

export default Navegador