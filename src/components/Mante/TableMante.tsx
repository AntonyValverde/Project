import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import "firebase/compat/firestore";
import "firebase/firestore";
import firebaseConfig from "@/firebase/config";
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { data } from 'autoprefixer';

export default function TableMante() {


    const [docsDbBUs, setDocsDbBUs] = useState<any[]>([]);
    const [docsDbIn, setDocsDbIn] = useState<any[]>([]);

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
    /* Ventana Modal de agregar.*/
    const [isOpen2, setIsOpen2] = useState(false);
    const openModal2 = () => {
        setIsOpen2(true);
    };
    const closeModal2 = () => {
        setIsOpen2(false);
    };


    useEffect(() => {
        /* Consuminedo los dato de Bd */
        const fetchData = async () => {
            const db = getFirestore();
            try {
                const querydb = await getDocs(collection(db, "RegisterUnits"));
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
        const fetchData2 = async () => {
            const db = getFirestore();
            try {
                const querydb2 = await getDocs(collection(db, "Inventario"));
                const dataIn = querydb2.docs.map((doc) => ({
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


    return (
        <>

            <section className='TabMante' >
                <div className='search-container'>
                    <input className='input-search' type='text' placeholder='Buscar...' />
                    {/*<button className='button-search' type="submit">Buscar</button>*/}
                    <div className='titul2'>Reporte de Buses en Mantenimiento</div>
                </div>

                <table className="tabla1" >
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
                        {docsDbBUs.map((data) => docsDbIn.map((dataIn) => ((

                            <tr key={data.Unidad || dataIn.id}>
                                <td>{data.Unidad}</td>
                                <td>{data.Placa}</td>
                                <td>{data.Año}</td>
                                <td>{data.Capacidad}</td>
                                <td>{data.Marca}</td>

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

                                                    <h1 className='DaModalExit'> Fecha de salida: <h2 className='notaModal'>{data.Año} </h2> </h1>

                                                    <h1 className='DaModalExit'> Estado: <h2 className='notaModal'>{data.Disponibilidad}</h2></h1>

                                                    <h1 className='DaModalExit'> Tipo de Servicio: <h2 className='notaModal'>{dataIn.especificacion}</h2> </h1>

                                                    <h1 className='DaModalExit'> Materiales Utiizados <h2 className='notaModal'>{data.Modelo}</h2> </h1>
                                                    <button className='buttonAcep' onClick={closeModal}>Aceptar</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </td>

                            </tr>
                        ))))};

                    </tbody>
                </table>
            </section>
            <div>
                <button className="buttonSearch" onClick={openModal2} >Agregar</button>
                {isOpen2 && (
                    <div className="modal-overlay2">
                        <div className="modal-content2">
                            <button className='.modal-content button buttonMas ' onClick={closeModal2}>X</button>

                            <h1 className='texh2Add'>  ID:</h1>
                            <input className='impuh1Add' type="texts" placeholder=' ID' />

                            <h1 className='texh2Add'>  Numero De Placa:</h1>
                            <input className='impuh1Add' type="texts" placeholder=' N° Placa' />

                            <h2 className='texh2Add'> Fecha de Entrada</h2>
                            <input className='impuh1Add' type="date" />

                            <h2 className='texh2Add'> Reporte/Tipo de Servicio</h2>
                            <input className='impuh1Add' type="text" placeholder=' Nota' />
                            <select className='optionValueAdd2'>
                                <option value="Not available" placeholder='seccioner'>...</option>
                                <option value="Available">Preventivo </option>
                                <option value="Not available">General</option>
                            </select>

                            <h2 className='texh2Add'> Costo</h2>
                            <input className='impuh1Add' type="number" placeholder=' $0.0' />

                            <h2 className='texh2Add'> Estado:</h2>
                            <select className='optionValueAdd2'>
                                <option value="Not available" placeholder='seccioner'>...</option>
                                <option value="Available">Disponible</option>
                                <option value="Not available">No disponible</option>
                            </select>

                            <input className='buttonAcep' type="submit" onClick={closeModal2} />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
