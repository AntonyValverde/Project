import React from "react";
import Page_Footer from "../PageFooter";
import { useState } from 'react'
import { ChangeEvent } from 'react'
import { useRef } from 'react';
import html2canvas from "html2canvas";
import { saveAs } from 'file-saver';

const FormButton = () => {
  const [unidad, setUnidad] = useState('');
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [marca, setMarca] = useState('');
  const [año, setAño] = useState('');
  const [estado, setEstado] = useState('');
  const [capacidad, setCapacidad] = useState('');
  const [color, setColor] = useState('');

  const eventUnidad = (event: ChangeEvent<HTMLInputElement>) => {
    setUnidad(event.target.value);
  }
  const eventPlaca = (event: ChangeEvent<HTMLInputElement>) => {
    setPlaca(event.target.value);
  }
  const eventModelo = (event: ChangeEvent<HTMLInputElement>) => {
    setModelo(event.target.value);
  }
  const eventMarca = (event: ChangeEvent<HTMLInputElement>) => {
    setMarca(event.target.value);
  }
  const eventAño = (event: ChangeEvent<HTMLInputElement>) => {
    setAño(event.target.value);
  }
  const eventEstado = (event: ChangeEvent<HTMLInputElement>) => {
    setEstado(event.target.value);
  }
  const eventColor = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  }
  const eventCapacidad = (event: ChangeEvent<HTMLInputElement>) => {
    setCapacidad(event.target.value);
  }

  const [desplegado, setDesplegado] = useState(false);

  const botonClick = () => {
    setDesplegado(!desplegado)
  }

  const formularioRef = useRef<HTMLFormElement>(null);

  const generarImagen = () => {
    
    const formulary = document.getElementById('formulario');

    if (formulary) {
      html2canvas(formulary).then((canvas) => {
        
        canvas.toBlob((blob) => {
          if (blob) {
            saveAs(blob, 'formulario.png');
           
          } else {
            
            console.log('Error al generar el objeto Blob.');
          }
        });
      });
    } else {
      console.log('El elemento del formulario no existe.');
    }

  };


  return (
    <div>
      <div className={`boton-desplegable ${desplegado ? 'desplegado' : ''}`}>
        <button className="butonCenter" onClick={botonClick} >Agregar</button>
        {desplegado && <div className="contenido-desplegado">
          
          <article ref={formularioRef} className="containerDos" id="formulario">
            <div className="wrapper">
              <div className="form-box login">
                <h2>Units</h2>
                <form action="#" id="formulary">
                  <div className="input-box">
                    <span className="icon"></span>
                    <input type="text" name="unidad" value={unidad} onChange={eventUnidad} />
                    <label>Unidad</label>
                  </div>
                  <div className="input-box">
                    <span className="icon"></span>
                    <input type="text" name="modelo" value={modelo} onChange={eventModelo} />
                    <label>Modelo</label>

                  </div>
                  <div className="input-box">
                    <span className="icon"></span>
                    <input type="text" name="marca" value={marca} onChange={eventMarca} />
                    <label>Marca</label>

                  </div>
                  <div className="input-box">
                    <span className="icon"></span>
                    <input type="text" name="año" value={año} onChange={eventAño} />
                    <label>Año</label>

                  </div>
                  <div className="input-box">
                    <span className="icon"></span>
                    <input type="text" name="placa" value={placa} onChange={eventPlaca} />
                    <label>Placa</label>

                  </div>
                  <div className="input-box">
                    <span className="icon"></span>
                    <input type="text" name="estado" value={estado} onChange={eventEstado} />
                    <label>Estado</label>

                  </div>
                  <div className="input-box">
                    <span className="icon"></span>
                    <input type="text" name="capacidad" value={capacidad} onChange={eventCapacidad} />
                    <label>Capacidad</label>

                  </div>
                  <div className="input-box">
                    <span className="icon"></span>
                    <input type="text" name="color" value={color} onChange={eventColor} />
                    <label>Color</label>

                  </div>
                  <div className="remember-forgot">
                    <label><input type="checkbox" />Disponible</label>
                    <button onClick={generarImagen} className="btnLogin-popup">Registrar</button>
                  </div>
                </form>
              </div>
            </div>
          </article>
          <Page_Footer></Page_Footer>
        </div>}
      </div>


      <Page_Footer></Page_Footer>
    </div>



  );

};

export default FormButton;





