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
    const [filterValue2, setFilterValue2] = useState("");
    const [filteredData2, setFilteredData2] = useState<any[]>([]);

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
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        /* Consuminedo los dato de Bd #2*/

        const fetchData2 = async () => {
            const db = getFirestore();
            try {
                const querydb = await getDocs(collection(db, "Quotes"));
                const dataIn  = querydb.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),  
                }));

                console.log('Data:', dataIn);
                setDocsDbIn(dataIn);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData2();
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

   
    /* End Data is filtered in real time with the database */

    /* Data is filtered in real time with the database */
    useEffect(() => {
        const filtered2 = docsDbIn.filter((data) =>
            Object.keys(data).some((key) =>
                data[key].toString().toLowerCase().includes(filterValue2.toLowerCase())
            )
        );
        setFilteredData2(filtered2);
    }, [filterValue2, docsDbIn]);

const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setFilterValue(value);
    setFilterValue2(value);
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
                                <th>Fecha De Entrada</th>
                                <th>Tipo De Mantenimiento</th>
                                <th>Costo $</th>
                                <th>   </th>
                            </tr>
                        </thead>
                        <tbody>

                            {filteredData2.map((dataIn)=>filteredData.map((data)=>   (

                                <tr key={data.id && dataIn.id}
                                >
                                    <td>{data.Unidad}</td>
                                    <td>{data.Placa}</td>
                                    <td>{dataIn.Fecha_Entrada}</td>
                                    <td>{dataIn.Asunto}</td>
                                    <td>{data.Marca}</td>

                                            <div>
                                                <button className='masInfobutton' onClick={openModal}>Más información</button>
                                                {isOpen && (

                                                    <div className="modal-overlay">

                                                        <div className="modal-content1">
                                                            <button className='.modal-content button buttonMas' onClick={closeModal}>X</button>

                                                            <h1 className='texh1Mo'> Más Información</h1>

                                                            <p className='notaModal1'> Reporte General</p>
                                                            <p className='notaModal'>{data.Color}</p>

                                                            <h1 className='DaModalExit'> Fecha de salida: <h2 className='notaModal'>{dataIn.placa} </h2> </h1>

                                                            <h1 className='DaModalExit'> Estado: <h2 className='notaModal'>{data.Disponibilidad}</h2></h1>

                                                            <h1 className='DaModalExit'> Materiales Utiizados <h2 className='notaModal'>{data.Modelo}</h2> </h1>
                                                            <button className='buttonAcep2' onClick={closeModal}>Aceptar</button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                </tr>
                            )))}
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
                                        placeholder=' N° Placa'/>

                                    <h2 className='texh2Add' > Fecha De Salida</h2>
                                    <input className='impuh1Add'
                                        id="fecha_salida"
                                        value={fecha_salida}
                                        onChange={(e) => setFechaSalida(e.target.value)}
                                        type="date" 
                                       />
                                        

                                    <h2 className='texh2Add'> Reporte General</h2>
                                    <input className='impuh1Add'
                                        type="text"
                                        id="reporte"
                                        value={reporte}
                                        onChange={(e) => setReporte(e.target.value)}
                                        placeholder=' Se cambio....'/>


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

                                    <button className='buttonAcep1' type="submit">Aceptar</button>
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