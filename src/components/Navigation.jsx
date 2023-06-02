import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link to="/">Inicio</Link>
      <Link to="/Articles">Artículos</Link>
      <Link to="/Contact">Contacto</Link>
    </div>
  );
};

export default Navigation;
