import React from 'react';
import { Link } from 'react-router-dom';
import '/src/estilos/Home.css';


function Home() {
  return (
    <main>
      <nav>
        <img className="logo" src="https://i.ibb.co/RzccBmV/MOCHILEROSLOGO2.png" alt="Logo" />
        <form className="search-form" action="#">
          <input type="text" placeholder="Escribe aquí..." />
          <button type="submit">Buscar</button>
        </form>
        <ul className="menu">
        <li><Link to="Home">Inicio</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <section className="home-content">
        <h1>Mochileros Globales</h1>
        <img src="https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen de portada" />

        {/* Aquí puedes agregar el contenido adicional de tu página de inicio */}
      </section>

      <footer>
        <p>Autor: MochilerosG | Contacto: info@mochilerosglobales.co | Derechos de autor: &copy; MochilerosGlobales 2023</p>
      </footer>
    </main>
  );
}

export default Home;
