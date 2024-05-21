import React from "react";
import { useState } from "react";
import "../styles/formulario.css";

function Formulario() {
  //defino que guardar en el estado
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });
  //manejo los cambios, los capturo y los seteo con lo que ingresaron
  const handleChange = (e) => {
    const [name, value] = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

    //aca manejaria la logica del envio
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(form);
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={form.apellido}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    );
  };

export default Formulario;
