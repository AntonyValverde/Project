import React, { FormEvent, useEffect, useState } from "react";
import "firebase/firestore";
import "firebase/compat/firestore";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import db from "@/firebase/config";
import firebaseConfig from "@/firebase/config";
import { config } from "process";
import { initializeApp } from "firebase/app";

const TableForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [repuesto, setRepuesto] = useState("");
  const [especificacion, setEspecificacion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [tableData, setTableData] = useState<any[]>([]);

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      try {
        const querySnapshot = await getDocs(collection(db, "Inventario"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Data:", data); // Verificar los datos obtenidos
        setTableData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData = {
      id,
      repuesto,
      especificacion,
      cantidad,
      precio,
    };

    setTableData([...tableData, newData]);
    handleCloseModal();
    resetForm();
  };

  const resetForm = () => {
    setId("");
    setRepuesto("");
    setEspecificacion("");
    setCantidad("");
    setPrecio("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  return (
    <div>
      {showModal && (
        <div className="modalForm">
          <div className="modal-contentForm">
            <span className="closeForm" onClick={handleCloseModal}>
              &times;
            </span>
            Agregar Repuesto
            <form onSubmit={handleSubmit}>
              <label htmlFor="id">ID:</label>
              <input
                className="inputForm"
                type="text"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />

              <label className="labelform" htmlFor="repuesto">
                Repuesto:
              </label>
              <input
                className="inputForm"
                type="text"
                id="repuesto"
                value={repuesto}
                onChange={(e) => setRepuesto(e.target.value)}
                required
              />

              <label className="labelform" htmlFor="especificacion">
                Especificación:
              </label>
              <input
                className="inputForm"
                type="text"
                id="especificacion"
                value={especificacion}
                onChange={(e) => setEspecificacion(e.target.value)}
                required
              />

              <label className="labelform" htmlFor="cantidad">
                Cantidad:
              </label>
              <input
                className="inputForm"
                type="number"
                id="cantidad"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                required
              />

              <label className="labelform" htmlFor="precio">
                Precio:
              </label>
              <input
                className="inputForm"
                type="number"
                id="precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                required
              />

              <button className="buttonAdd" type="submit">
                Agregar
              </button>
            </form>
          </div>
        </div>
      )}
      <article>
        <div>
          <input
            className="Textsearch"
            type="text"
            id="Buscar"
            name="Buscar"
            placeholder="Buscar"
          />
        </div>
        <div className="containerTable">
          <table className="tableInven">
            <thead>
              <tr>
                <th>ID</th>
                <th>Repuesto</th>
                <th>Especificación</th>
                <th>Cantidad</th>
                <th>Precio $</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.repuesto}</td>
                  <td>{data.especificacion}</td>
                  <td>{data.cantidad}</td>
                  <td>{data.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <button className="buttonSearch" onClick={() => setShowModal(true)}>
        Agregar datos
      </button>
    </div>
  );
};

export default TableForm;
