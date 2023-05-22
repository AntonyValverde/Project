import React from "react";

const FormButton = () => {
  return (
    <div className="form-button-container">
      <button className="form-button">Mostrar formulario</button>
      <form className="form">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormButton;





