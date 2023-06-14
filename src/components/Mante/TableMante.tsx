import PropTypes from 'prop-types'
import React, { useState } from 'react'

export default function TableMante() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    const [isOpen2, setIsOpen2] = useState(false);
    const openModal2 = () => {
        setIsOpen2(true);
    };
    const closeModal2 = () => {
        setIsOpen2(false);
    };
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
                        <tr>
                            <td>01</td>
                            <td>648122</td>
                            <td>06/06/21</td>
                            <td>Cambio de LLanta</td>
                            <td>$100</td>
                            <td>
                                <div>
                                    <button className='masInfobutton' onClick={openModal}>Más información</button>
                                    {isOpen && (

                                        <div className="modal-overlay">

                                            <div className="modal-content1">
                                                <button className='.modal-content button buttonMas'  onClick={closeModal}>X</button>


                                                <h1 className='texh1Mo'> Más Información</h1>
                                                
                                                <p className='notaModal1'> Reporte General</p>
                                                <p className='notaModal'> Se le cambio una solo llanta el resto todo bien</p>

                                                <h1 className='DaModalExit'> Fecha de salida: <h2 className='notaModal'>06/06/21 </h2> </h1>

                                                <h1 className='DaModalExit'> Estado: <h2 className='notaModal'>Disponible</h2> </h1>
                                                <h1 className='DaModalExit'> Tipo de Servicio: <h2 className='notaModal'>Preventivo</h2> </h1>
                                                 

                                                <button className='buttonAcep' onClick={closeModal}>Aceptar</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </section>
            <div>
                <button className="buttonSearch" onClick={openModal2} >Agregar</button>
                {isOpen2 && (
                    <div className="modal-overlay2">
                        <div className="modal-content">
                            <button className='.modal-content button ' onClick={closeModal2}>X</button>

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
