import React, { useState, useEffect, FormEvent } from 'react'
import "firebase/compat/firestore";
import "firebase/firestore";
import firebaseConfig from "@/firebase/config";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc, getDoc } from 'firebase/firestore';

const TableMantee = () => {
    const [docsDbBUs, setDocsDbBUs] = useState<any[]>([]);
    const [docsDbIn, setDocsDbIn] = useState<any[]>([]);
    const [id, setId] = useState("");
    const [fecha_salida, setFechaSalida] = useState("");
    const [reporte, setReporte] = useState("");
    const [costo, setCosto] = useState("");
    const [repuestos, setRepuestos] = useState("");
    const [numPlaca, setNumPlaca] = useState("")
    const [tableData, setTableData] = useState<any[]>([]);
    const [showAlert, setShowAlert] = useState(false);
    const [filterValue, setFilterValue] = useState("");
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [selectedData, setSelectedData] = useState<any>(null);
    /*inicio de DataBase*/
    const app = initializeApp(firebaseConfig);


    /* Ventana Modal de Mas información.*/
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    /* Ventana Modal de Agregar.*/
    const [isOpen2, setIsOpen2] = useState(false);
    const openModal2 = () => {
        setIsOpen2(true);
    };
    const closeModal2 = () => {
        setIsOpen2(false);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
      };

    useEffect(() => {
        /* Consuminedo los dato de Bd */

        const fetchData = async () => {
            const db = getFirestore();
            try {
                const querydb = await getDocs(collection(db, "RegistroUnidades"));
                const data = querydb.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log('Data:', data);
                setDocsDbBUs(data);

                {/*const querydb2 = await getDocs(collection(db, "Inventario"));
                const dataIn = querydb2.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                console.log('Data:', dataIn);
                setDocsDbIn(dataIn);*/}

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    /* Data is filtered in real time with the database */
    useEffect(() => {
        const filtered = docsDbBUs.filter((data) =>
            Object.keys(data).some((key) =>
                data[key].toString().toLowerCase().includes(filterValue.toLowerCase())
            )
        );
        setFilteredData(filtered);
    }, [filterValue, docsDbBUs]);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target as HTMLInputElement;
        setFilterValue(value);
    };
    /* End Data is filtered in real time with the database */


    /* Add data to the database with the modal */
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newData = {
            id: Number(id),
            fecha_salida: String(fecha_salida),
            numPlaca: String(numPlaca),
            reporte: String(reporte),
            costo: Number(costo),
            repuestos: String(repuestos),

        };
        try {
            const db = getFirestore();
            await addDoc(collection(db, "MaintenanceReport"), newData);
            setTableData([...tableData, newData]);
            resetForm();
            setShowAlert(true);
        } catch (error) {
            console.error("Error adding data:", error);
        }

    };
    const resetForm = () => {
        setId("");
        setNumPlaca("");
        setFechaSalida("");
        setReporte("");
        setCosto("");
        setRepuestos("");
    };

    return (
        <>
            <div>
                <div className="containerTable2">{/*Esta clase le pertenece a Jordan*/}
                    <div className='search-container'>
                        <input className='input-search'
                            type='text'
                            placeholder='Buscar...'
                            value={filterValue}
                            name="Buscar"
                            onChange={handleFilterChange} />
                        {/*<button className='button-search' type="submit">Buscar</button>*/}
                        <div className='titul2'>Reporte de Buses en Mantenimiento</div>
                    </div>
                    <table className="tableMant">
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Placa</th>
                                <th>Fecha Entrada</th>
                                <th>Trabajo y/o servicio</th>
                                <th>Costo $</th>
                                <th>   </th>
                            </tr>
                        </thead>
                        <tbody>

                            {filteredData.map((data) => (

                                <tr key={data.Unidad}
                                >
                                    <td>{data.Unidad}</td>
                                    <td>{data.Placa}</td>
                                    <td>{data.Año}</td>
                                    <td>{data.Capacidad}</td>
                                    <td>{data.Marca}</td>

                                    <td>
                                        <td>
                                            <div>
                                                <button className='masInfobutton' onClick={openModal}>Más información</button>
                                                {isOpen && (

                                                    <div className="modal-overlay">

                                                        <div className="modal-content1">
                                                            <button className='.modal-content button buttonMas' onClick={closeModal}>X</button>

                                                            <h1 className='texh1Mo'> Más Información</h1>

                                                            <p className='notaModal1'> Reporte General</p>
                                                            <p className='notaModal'>{data.Color}</p>

                                                            <h1 className='DaModalExit'> Fecha de salida: <h2 className='notaModal'>{data.fecha_salida} </h2> </h1>

                                                            <h1 className='DaModalExit'> Estado: <h2 className='notaModal'>{data.Disponibilidad}</h2></h1>

                                                            {/*<h1 className='DaModalExit'>   Tipo de Servicio: <h2 className='notaModal'>{dataIn.especificacion}</h2> </h1>*/}

                                                            <h1 className='DaModalExit'> Materiales Utiizados <h2 className='notaModal'>{data.Modelo}</h2> </h1>
                                                            <button className='buttonAcep' onClick={closeModal}>Aceptar</button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </td>


                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>


                    <button className="buttonSearchMant" onClick={openModal2} >Agregar</button>
                    {isOpen2 && (
                        <div className="modal-overlay2">
                            <div className="modal-content2">

                                <button className='.modal-content button buttonMas ' onClick={closeModal2}>X</button>
                                <form onSubmit={handleSubmit}>
                                    <h1 className='texh2Add'>  ID:</h1>
                                    <input className='impuh1Add'
                                        type="text"
                                        id="id"
                                        value={id}
                                        onChange={(e) => setId(e.target.value)}
                                        placeholder=' ID' />

                                    <h1 className='texh2Add'>  Numero De Placa:</h1>
                                    <input className='impuh1Add'
                                        type="text"
                                        id="numPlaca"
                                        value={numPlaca}
                                        onChange={(e) => setNumPlaca(e.target.value)}
                                        placeholder=' N° Placa' />

                                    <h2 className='texh2Add' > Fecha De Salida</h2>
                                    <input className='impuh1Add'
                                        id="fecha_salida"
                                        value={fecha_salida}
                                        onChange={(e) => setFechaSalida(e.target.value)}
                                        type="date" />

                                    <h2 className='texh2Add'> Reporte General</h2>
                                    <input className='impuh1Add'
                                        type="text"
                                        id="reporte"
                                        value={reporte}
                                        onChange={(e) => setReporte(e.target.value)}
                                        placeholder=' Se cambio....' />



                                    <h2 className='texh2Add' > Costo</h2>
                                    <input className='impuh1Add'
                                        type="number"
                                        id="costo"
                                        value={costo}
                                        onChange={(e) => setCosto(e.target.value)}
                                        placeholder=' $0.0' />

                                    <h2 className='texh2Add' > Repuestos usados:</h2>
                                    <input className='impuh1Add'
                                        type="text"
                                        id="repuesto"
                                        value={repuestos}
                                        onChange={(e) => setRepuestos(e.target.value)}
                                        placeholder=' ' />

                                    <button className='buttonAcep' type="submit">Aceptar</button>
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

                </div>

            </div>
        </>
    )
}

export default TableMantee