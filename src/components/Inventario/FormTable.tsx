import React, { FormEvent, useEffect, useState } from "react";
import {
  RiAddCircleLine,
  RiCloseLine,
  RiEditLine,
  RiFileList3Line,
} from "react-icons/ri";
import "firebase/firestore";
import "firebase/compat/firestore";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  serverTimestamp,
  doc,
} from "firebase/firestore";
import firebaseConfig from "@/firebase/config";
import { initializeApp } from "firebase/app";

const TableForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [repuesto, setRepuesto] = useState("");
  const [especificacion, setEspecificacion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [tableData, setTableData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [filterValue, setFilterValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [selectedData, setSelectedData] = useState<any>(null);

  /*Initialize firebase*/
  const app = initializeApp(firebaseConfig);

  /* The data from the database is consumed */
  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      try {
        const querydb = await getDocs(collection(db, "Inventario"));
        const data = querydb.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Data:", data);
        setTableData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  /* Data is filtered in real time with the database */
  useEffect(() => {
    const filtered = tableData.filter((data) =>
      Object.keys(data).some((key) =>
        data[key].toString().toLowerCase().includes(filterValue.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [filterValue, tableData]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setFilterValue(value);
  };

  /* Add data to the database with the modal */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData = {
      id: Number(id),
      repuesto: String(repuesto),
      especificacion: String(especificacion),
      cantidad: Number(cantidad),
      precio: Number(precio),
    };

    try {
      const db = getFirestore();
      await addDoc(collection(db, "Inventario"), newData);
      setTableData([...tableData, newData]);
      handleCloseModal();
      resetForm();
      setShowAlert(true);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };
  /*Reset inputs and form*/
  const resetForm = () => {
    setId("");
    setRepuesto("");
    setEspecificacion("");
    setCantidad("");
    setPrecio("");
  };
  /*The form is closed to click on the button and it is displayed.*/
  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  //ModifiedTable
  /* Select a data row from the table */
  const handleSelectData = (data: any) => {
    setSelectedData(data);
    setId(data.id);
    setRepuesto(data.repuesto);
    setEspecificacion(data.especificacion);
    setCantidad(data.cantidad);
    setPrecio(data.precio);
    setShowModal(true);
  };
  const handleUpdateData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedData = {
      id: Number(id),
      repuesto: String(repuesto),
      especificacion: String(especificacion),
      cantidad: Number(cantidad),
      precio: Number(precio),
    };

    try {
      const db = getFirestore();
      await updateDoc(doc(db, "Inventario", selectedData.id), updatedData);
      const updatedTableData = tableData.map((data) =>
        data.id === selectedData.id ? updatedData : data
      );
      setTableData(updatedTableData);
      handleCloseModal();
      resetForm();
      setShowAlert(true);
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
    }
  };
  return (
    <>
      <div>
        {/*The modal is created with the inputs and the methods are passed to it.*/}

        {showModal && (
          <div className="modalForm">
            <div className="modal-contentForm">
              <span className="closeForm" onClick={handleCloseModal}>
                &times;
              </span>
              <label className="labelmodal" htmlFor="repuesto">
                <span className="iconForm">
                  <RiFileList3Line />
                </span>
                Form Agregar Repuesto
              </label>
              <form onSubmit={handleSubmit}>
                <label className="labelform" htmlFor="repuesto">
                  ID:
                </label>
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
                  <span className="buttonIcon">
                    <RiAddCircleLine />
                  </span>
                  Agregar
                </button>
                <button className="ButtonCancel" onClick={handleCloseModal}>
                  <span className="IconCancel">
                    <RiCloseLine />
                  </span>
                  Cancelar
                </button>

                <button className="buttonUpdate" type="submit">
                  <span className="updateIcon">
                    <RiEditLine />
                  </span>
                  Modificar
                </button>
              </form>
            </div>
          </div>
        )}

        {showAlert && (
          <div className="alert-popup show">
            <p className="alert-message">
              Los datos se han agregado correctamente
            </p>
            <span className="alert-close" onClick={handleCloseAlert}>
              &times;
            </span>
          </div>
        )}

        <article>
          <div>
            {/*The input for the filtered search is created and the filter methods are passed to it.*/}
            <input
              className="Textsearch"
              type="text"
              value={filterValue}
              onChange={handleFilterChange}
              name="Buscar"
              placeholder="Buscar"
            />
          </div>
          {/*The table and its columns are created.*/}
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
                {/*A mapping of the data is made to add them to the columns.*/}
                {filteredData.map((data) => (
                  <tr
                    key={data.id}
                    onClick={() => handleSelectData(data)}
                    className={selectedData === data ? "selected-row" : ""}
                  >
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
    </>
  );
};

export default TableForm;
