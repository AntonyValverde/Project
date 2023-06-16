import React, { FormEvent, useEffect, useState } from "react";
import "firebase/firestore";
import "firebase/compat/firestore";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import Page_Footer from "../PageFooter";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const FormButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [Unidad, setUnidad] = useState("");
  const [Placa, setPlaca] = useState("");
  const [Modelo, setModelo] = useState("");
  const [Marca, setMarca] = useState("");
  const [Año, setAño] = useState("");
  const [Estado, setEstado] = useState("");
  const [Capacidad, setCapacidad] = useState("");
  const [Color, setColor] = useState("");
  const [Disponibilidad, setDisponibilidad] = useState("");
  const [tableData, setTableData] = useState<any[]>([]);

  /* Add data to the database with the modal */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData = {
      Unidad,
      Placa,
      Modelo,
      Marca,
      Año,
      Estado, 
      Capacidad,
      Color,
      Disponibilidad
    };

    try {
      const db = getFirestore();
      await addDoc(collection(db, "RegisterUnits"), newData);
      setTableData([...tableData, newData]);
      handleCloseModal();
       
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const [desplegado, setDesplegado] = useState(false);

  const botonClick = () => {
    setDesplegado(!desplegado);
  };

  const formularioRef = useRef<HTMLFormElement>(null);

  const generarImagen = () => {
    const formulary = document.getElementById("formulario");

    if (formulary) {
      html2canvas(formulary).then((canvas) => {
        canvas.toBlob((blob) => {
          if (blob) {
            saveAs(blob, "formulario.png");
            
          } else {
            console.log("Error al generar el objeto Blob.");
          }
        });
      });
    } else {
      console.log("El elemento del formulario no existe.");
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div>
        <button className="butonCenter" onClick={botonClick}>
          Agregar
        </button>
      </div>

      <div className={`boton-desplegable ${desplegado ? "desplegado" : ""}`}>
        {desplegado && (
          <div className="contenido-desplegado">
            <article
              ref={formularioRef}
              className="containerTwo"
              id="formulario"
            >
              <div className="wrapper">
                <div className="form-box login">
                  <span className="closeForm" onClick={botonClick}>
                    &times;
                  </span>
                  <h2>Units</h2>
                  <form onSubmit={handleSubmit} action="#" id="formulary">
                    <div className="input-box">
                      <span className="icon"></span>
                      <input
                        type="text"
                        id="unidad"
                        value={Unidad}
                        onChange={(e) => setUnidad(e.target.value)}
                        required
                      />
                      <label>Unidad</label>
                    </div>
                    <div className="input-box">
                      <span className="icon"></span>
                      <input
                        type="text"
                        id="modelo"
                        value={Modelo}
                        onChange={(e) => setModelo(e.target.value)}
                        required
                      />
                      <label>Modelo</label>
                    </div>
                    <div className="input-box">
                      <span className="icon"></span>
                      <input
                        type="text"
                        id="marca"
                        value={Marca}
                        onChange={(e) => setMarca(e.target.value)}
                        required
                      />
                      <label>Marca</label>
                    </div>
                    <div className="input-box">
                      <span className="icon"></span>
                      <input
                        type="text"
                        id="año"
                        value={Año}
                        onChange={(e) => setAño(e.target.value)}
                        required
                      />
                      <label>Año</label>
                    </div>
                    <div className="input-box">
                      <span className="icon"></span>
                      <input
                        type="text"
                        id="placa"
                        value={Placa}
                        onChange={(e) => setPlaca(e.target.value)}
                        required
                      />
                      <label>Placa</label>
                    </div>
                    <div className="input-box">
                      <span className="icon"></span>
                      <input
                        type="text"
                        id="estado"
                        value={Estado}
                        onChange={(e) => setEstado(e.target.value)}
                        required
                      />
                      <label>Estado</label>
                    </div>
                    <div className="input-box">
                      <span className="icon"></span>
                      <input
                        type="text"
                        id="capacidad"
                        value={Capacidad}
                        onChange={(e) => setCapacidad(e.target.value)}
                        required
                      />
                      <label>Capacidad</label>
                    </div>
                    <div className="input-box">
                      <span className="icon"></span>
                      <input
                        type="text"
                        id="color"
                        value={Color}
                        onChange={(e) => setColor(e.target.value)}
                        required
                      />
                      <label>Color</label>
                    </div>
                    <div className="remember-forgot">
                      <label>
                        <input 
                          type="checkbox"
                          id="disponibilidad"
                          value={Disponibilidad}
                          onChange={(e) => setDisponibilidad(e.target.value)}
                        />
                        Disponible
                      </label>
                      <button
                        className="btnLogin-popup" 
                        onClick={generarImagen}
                      >
                        Registrar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </article>
            <Page_Footer></Page_Footer>
          </div>
        )}
      </div>

      <Page_Footer></Page_Footer>
    </div>
  );
};

export default FormButton;
