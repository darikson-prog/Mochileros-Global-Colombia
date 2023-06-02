import React from 'react';
import '../estilos/ArticleList.css';

const Article = ({ title, image, description, route }) => {
  return (
    <section>
      <h2>{title}</h2>
      <img src={image} alt="Imagen de portada" />
      <p>{description}</p>
      <a href={route}>Leer más</a>
    </section>
  );
};

const ArticlesList = () => {
  return (
    <>
      <h1></h1>

      <Article
        title="Artículo 1: Región del Gran Caribe"
        image="https://i.ibb.co/MNdfWkB/Enmascarar-grupo-2.jpg"
        description="¡Bienvenidos a la región del Gran Caribe, un verdadero paraíso tropical! Esta región de Colombia abarca la costa caribeña, ofreciendo una mezcla..."
        route="/articulo1"
      />

      <Article
        title="Artículo 2: Maravillas del Pacífico Colombiano"
        image="https://cloudfront-us-east-1.images.arcpublishing.com/semana/ZPGCLUWACRDKJFMGB7QIZL5SI4.jpg"
        description="Bienvenidos a la región del Pacífico colombiano, un lugar mágico donde la selva tropical se encuentra con el océano Pacífico..."
        route="/articulo2"
      />

      <Article
        title="Artículo 3: Descubriendo los Tesoros de los Andes Orientales"
        image="https://upload.wikimedia.org/wikipedia/commons/f/f2/Vallecojines.jpg"
        description="Adéntrate en la majestuosidad de los Andes Orientales de Colombia, una región llena de montañas, paisajes impresionantes y una rica herencia histórica..."
        route="/articulo3"
      />

      <Article
        title="Artículo 4: Los Encantos de los Andes Occidentales"
        image="https://www.elciudadano.com/wp-content/uploads/2018/09/sss.jpg"
        description="¡Bienvenidos a los Andes Occidentales de Colombia, hogar de impresionantes paisajes montañosos y pueblos pintorescos!..."
        route="/articulo4"
      />

      <Article
        title="Artículo 5: Explorando la Maravillosa Amazonía-Orinoquía"
        image="https://www.semana.com/resizer/3AcYrkS4LzC7QFpyCqD6vwPZXog=/arc-anglerfish-arc2-prod-semana/public/WLKKFNC2IBADNLUVJYHME4IKCY.jpg"
        description="Bienvenidos a la región de la Amazonía-Orinoquía de Colombia, donde la naturaleza se despliega en toda su grandeza..."
        route="/articulo5"
      />

<footer>
        <p>Autor: MochilerosG | Contacto: info@mochilerosglobales.co | Derechos de autor: &copy; MochilerosGlobales 2023</p>
      </footer>

    </>
  );
};

export default ArticlesList;

