import React from 'react';
import './App.css';
import Navegador from '../src/navegador/Navegador';
import Inicio from '../src/inicio/Inicio';
import Nosotros from '../src/nosotros/Nosotros';
import Ubicacion from '../src/ubicacion/Ubicacion';
import Servicios from '../src/servicios/Servicios';
import Contacto from '../src/contacto/Contacto';
import Footer from '../src/footer/Footer';


function App() {

  return (
      <>
        <Navegador />
        <Inicio />
        <Nosotros />
        <Ubicacion />
        <Servicios />
        <Contacto />
        <Footer />
      </>
        
        
  )
}

export default App
