import PropTypes from 'prop-types'
import React, { Component, useState } from 'react'
import ModalMante from '@/components/Mante/ModalMante';
export default function TableMante() {
    
    const[ estadoModal1, cambiarEstadoModal1] = useState(false);      

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
                            <button onClick={()=> cambiarEstadoModal1(!estadoModal1)} className='buntoTabale' about='button' > Mas Información
                                    <ModalMante
                                        estado={estadoModal1}
                                        cambiarEstado={cambiarEstadoModal1}
                               
                                    >   
                                    <section className='contenidoModal'>
                                            <h1 className='texh1Mo'> Nota</h1>
                                            <p className='notaModal'> Se le cambio una solo llanta el resto todo bien</p>
                                            <h1 className='DaModalExit'> Fecha de salida: <h2 className='DaModalExi'>06/06/21 </h2> </h1>
                                            <select className='optionValue'>
                                                <option value="Available">Disponible</option>
                                                <option value="Not available">No disponible</option>
                                            </select>
                                            <button className='buttonModal'>Aceptar</button>
                                        </section>
                                    </ModalMante>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>648122</td>
                            <td>06/06/21</td>
                            <td>Cambio de LLanta</td>
                            <td>$100</td>
                            <td>
                                <button onClick={()=>cambiarEstadoModal1(!estadoModal1)} className='buntoTabale' about='button' > Mas Información
                                    <ModalMante
                                        estado = {estadoModal1}
                                        cambiarEstado= {cambiarEstadoModal1}
                                       
                                    >
                                        <section className='contenidoModal'>
                                            <h1 className='texh1Mo'> Nota</h1>
                                            <p className='notaModal'> Se le cambio una solo llanta el resto todo bien</p>
                                            <h1 className='DaModalExit'> Fecha de salida: <h2 className='DaModalExi'>06/06/21 </h2> </h1>
                                            <select className='optionValue'>
                                                <option value="Available">Disponible</option>
                                                <option value="Not available">No disponible</option>
                                            </select>
                                            <button className='buttonModal'>Aceptar</button>
                                        </section>
                                    </ModalMante>
                                </button>
                            </td>
                       </tr>

                        <tr>
                            <td>03</td>
                            <td>648122</td>
                            <td>06/06/21</td>
                            <td>Cambio de LLanta</td>
                            <td>$100</td>
                            <td>
                            <button onClick={()=>cambiarEstadoModal1(!estadoModal1)} className='buntoTabale' about='button' > Mas Información
                                    <ModalMante
                                        estado = {estadoModal1}
                                        cambiarEstado= {cambiarEstadoModal1}
                                       
                                    >
                                        <section className='contenidoModal'>
                                            <h1 className='texh1Mo'> Nota</h1>
                                            <p className='notaModal'> Se le cambio una solo llanta el resto todo bien</p>
                                            <h1 className='DaModalExit'> Fecha de salida: <h2 className='DaModalExi'>06/06/21 </h2> </h1>
                                            <select className='optionValue'>
                                                <option value="Available">Disponible</option>
                                                <option value="Not available">No disponible</option>
                                            </select>
                                            <button className='buttonModal'>Aceptar</button>
                                        </section>
                                    </ModalMante>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>648122</td>
                            <td>06/06/21</td>
                            <td>Cambio de LLanta</td>
                            <td>$100</td>
                            <td> 
                                <button onClick={()=>cambiarEstadoModal1(!estadoModal1)} className='buntoTabale' about='button' > Mas Información
                                    <ModalMante
                                        estado={estadoModal1}
                                        cambiarEstado={cambiarEstadoModal1}
                                        
                                    >
                                        <section className='contenidoModal'>
                                            <h1 className='texh1Mo'> Nota</h1>
                                            <p className='notaModal'> Se le cambio una solo llanta el resto todo bien</p>
                                            <h1 className='DaModalExit'> Fecha de salida: <h2 className='DaModalExi'>06/06/21 </h2> </h1>
                                            <select className='optionValue'>
                                                <option value="Available">Disponible</option>
                                                <option value="Not available">No disponible</option>
                                            </select>
                                            <button className='buttonModal'>Aceptar</button>
                                        </section>
                                    </ModalMante>
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>05</td>
                            <td>648122</td>
                            <td>06/06/21</td>
                            <td>Cambio de LLanta</td>
                            <td>$100</td>
                            <td>
                            <button onClick={()=> cambiarEstadoModal1(!estadoModal1)} className='buntoTabale' about='button' > Mas Información
                                    <ModalMante
                                        estado = {estadoModal1}
                                        cambiarEstado= {cambiarEstadoModal1}
                                        /*tituloModal=  "INFORMACIÓN"*/
                                    >
                                        <section className='contenidoModal'>
                                            <h1 className='texh1Mo'> Nota</h1>
                                            <p className='notaModal'> Se le cambio una solo llanta el resto todo bien</p>
                                            <h1 className='DaModalExit'> Fecha de salida: <h2 className='DaModalExi'>06/06/21 </h2> </h1>
                                            <select className='optionValue'>
                                                <option value="Available">Disponible</option>
                                                <option value="Not available">No disponible</option>
                                            </select>
                                            <button className='buttonModal'>Aceptar</button>
                                        </section>
                                    </ModalMante>
                                </button>
                            </td>
                         </tr>

                    </tbody>
                </table>
            </section>
        </>
    )
}
