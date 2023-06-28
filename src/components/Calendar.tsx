import axios from "axios"; /*Descargar en la terminal con: npm i axios*/
import "firebase/compat/firestore";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import { RiAddCircleLine, RiCloseLine, RiFileList3Line } from "react-icons/ri";

import Page_Head from "./PageHead";
import Page_Footer from "./PageFooter";
import "firebase/firestore";
import firebaseConfig from "@/firebase/config";
import { initializeApp } from "firebase/app";
import React, { FormEvent, useEffect, useState } from "react";

const Calendar = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  const openModal2 = () => {
    setIsOpen2(true);
  };
  const closeModal2 = () => {
    setIsOpen2(false);
  };

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedData, setSelectedData] = useState<any>(null);
  const [showTable, setShowTable] = useState(false);
  const [busD, setbusD] = useState<any[]>([]);
  const [tdata, setdata] = useState<any[]>([]);
  const [filV, setFilV] = useState("");
  const [placa, setplacaa] = useState("");
  const [Placa, setplaca] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  {
    /*Es la variable del buscador*/
  }
  const [Asunto, setAsunto] = useState("");
  const [Fecha_Entrada, setFecha_Entrada] = useState("");

  const app = initializeApp(firebaseConfig);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      try {
        const querydb = await getDocs(collection(db, "RegistroUnidades"));
        const data = querydb.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Data:", data);
        setdata(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [termino, setTermino] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const filtered = tdata.filter((data) =>
      Object.keys(data).some((key) =>
        data[key].toString().toLowerCase().includes(filV.toLowerCase())
      )
    );
    setbusD(filtered);
  }, [filV, tdata]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setFilV(value);
  };
  /* Add data to the database with the modal */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData = {
      placa: Number(placa),
      Fecha_Entrada: String(Fecha_Entrada),
      Asunto: String(Asunto),
    };
    try {
      const db = getFirestore();
      await addDoc(collection(db, "Quotes"), newData);
      setdata([...tdata, newData]);
      handleCloseModal();
      resetForm();
      setShowAlert(true);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };
  /*Reset inputs and form*/
  const resetForm = () => {
    setAsunto("");
    setplacaa("");
    setFecha_Entrada("");
  };
  /*The form is closed to click on the button and it is displayed.*/
  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };
  const handleSelectData = (data: any) => {
    setSelectedData(data);
  };
  const handleButtonClick = () => {
    setShowTable(!showTable);
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <header>
        <Page_Head></Page_Head>
      </header>

      <div className="TabCita">
        <h3 className="text-center">
          Calendario de Mantenimientos Preventivos
        </h3>
        <hr />
        <div className="contp">
          <article>
            <div>
              <input
                className="search"
                type="text"
                value={filV}
                onChange={handleFilterChange}
                name="Buscar"
                placeholder="Busqueda Filtrada"
              />
              <button className="addCita" onClick={openModal2}>
                Agregar
              </button>
              <div>
                {isOpen2 && (
                  <div className="Citass">
                    <div className="modal-contento">
                      <form onSubmit={handleSubmit}>
                        <button
                          className=".modal-con button "
                          onClick={closeModal}
                        >
                          X
                        </button>
                        <h1 className="textAdd"> Numero de Placa:</h1>
                        <input
                          className="impAdd"
                          type="text"
                          id="placa"
                          value={placa}
                          onChange={(e) => setplacaa(e.target.value)}
                          placeholder=" N° Placa"
                        />

                        <h2 className="textAdd"> Fecha de Entrada</h2>
                        <input
                          className="impAdd"
                          type="date"
                          id="fecha_entrada"
                          value={Fecha_Entrada}
                          onChange={(e) => setFecha_Entrada(e.target.value)}
                        />

                        <h2 className="textAdd"> Tipo de Servicio</h2>
                        <input
                          className="impAdd"
                          type="text"
                          id="asunto"
                          value={Asunto}
                          onChange={(e) => setAsunto(e.target.value)}
                          placeholder=" General/Preventivo"
                        />

                        <button className="buttonenviar" onClick={closeModal}>
                          Aceptar
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>
        <hr />
        <div className="containerTable">
          <table className="tableInven">
            <thead>
              <tr>
                <th>Id</th>
                <th>Modelo</th>
                <th>Marca</th>
                <th>Año</th>
                <th>Placa</th>
              </tr>
            </thead>
            <tbody>
              {busD.map((data) => (
                <tr key={data.Unidad}>
                  <td>{data.Unidad}</td>
                  <td>{data.Modelo}</td>
                  <td>{data.Marca}</td>
                  <td>{data.Anno}</td>
                  <td>{data.Placa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <button onClick={handleButtonClick} className="buttonPau">
            {showTable ? "Ver -" : "Ver +"}
          </button>
          {showTable && (
            <div className="containerTable">
              <table className="tableInven">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Estado</th>
                    <th>Disponibilidad</th>
                    <th>Capacidad</th>
                    <th>Color</th>
                  </tr>
                </thead>
                <tbody>
                  {busD.map((data) => (
                    <tr key={data.Unidad}>
                      <td>{data.Unidad}</td>
                      <td>{data.Estado}</td>
                      <td>{data.Disponibilidad}</td>
                      <td>{data.Capacidad}</td>
                      <td>{data.Color}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <footer>
        <Page_Footer></Page_Footer>
      </footer>
    </>
  );
};
export default Calendar;
