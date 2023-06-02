import React, { useState, useEffect } from 'react';
import '/src/estilos/Contact.css';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 8000); // Mostrar el mensaje por 5 segundos

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <section className="título1">
          <h1>CONTÁCTANOS</h1>
        </section>
        <p>¿Tienes alguna recomendación o deseas conocer más sobre próximos destinos?</p>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
          placeholder="Escribe tu nombre completo"
        />

        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          placeholder="Escribe tu dirección de correo electrónico"
        />

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input-field"
          placeholder="¿Qué mensaje quieres dejarnos?"
        />

        {isSubmitted ? (
          <p className="thank-you-message">Gracias por tu mensaje. Estaremos contactándonos contigo en la mayor brevedad.</p>
        ) : (
          <button type="submit">Enviar</button>
        )}
      </form>
      <footer>
        <p>Autor: MochilerosG | Contacto: info@mochilerosglobales.co | Derechos de autor: &copy; MochilerosGlobales 2023</p>
      </footer>
    </>
  );
};


export default Contact;

