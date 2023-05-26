import Page_Footer from '@/components/PageFooter';
import Page_Head from '@/components/PageHead';
import Typewriter from 'typewriter-effect';
export default function indexMante () {
    return (
        <>
        <div>
        
        <Page_Head></Page_Head>
        </div>
        
        <article >
             {/*para hacer que escriba solo  en el h4 
            Corremos en consola   npm install typewriter-effect y despues se llama ejemplo fila 2*/}
            <h4 className='tableTitle'>
                <Typewriter
                    options={{
                        strings: [
                            "Resgistro De Unidades En Mantenimiento",
                            "Unidades No Disponibles."
                        ],
                        //autoStart: 3,
                        autoStart: true,
                        loop: true,
                        delay: 50,
                    }} />
                
                <img className="LogoMante" src="/img/reparacion.png" alt="Not Found" />
            </h4>
           
            <div className='search-container'>
                <input className='input-search' type='text' placeholder='Buscar...' />
                <button className='button-search' type="submit">Buscar</button>
            </div>   
            
            <div className='SecTable'>
            <table className="table1" >
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Placa</th>
                        <th>Fecha Entrada</th>
                        <th>Trabajo y/o servicio</th>
                        <th>Costo $</th>
                        <th>Nota</th>
                        <th>Fecha Salida</th>
                        <th>Disponibilidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>648122</td>
                        <td>06/06/21</td>
                        <td>Cambio de LLanta</td>
                        <td>$100</td>
                        <td>Se le cambio una solo llanta el resto todo bien</td>
                        <td>06/06/21</td>
                        <td>    
                        <select className='optionValue'>
                                <option value="Available">Disponible</option>  
                                <option value="Not available">No disponible</option>  
                             </select>
                        </td>
                    </tr>
                    <tr>
                    <td>02</td>
                        <td>648122</td>
                        <td>06/06/21</td>
                        <td>Cambio de LLanta</td>
                        <td>$100</td>
                        <td>Se le cambio una solo llanta el resto todo bien</td>
                        <td>06/06/21</td>
                        <td>    
                            <select className='optionValue'>
                                <option value="Available">Disponible</option>  
                                <option value="Not available">No disponible</option>  
                             </select>
                        </td>
                    </tr>
                    <tr>
                    <td>03</td>
                        <td>648122</td>
                        <td>06/06/21</td>
                        <td>Cambio de LLanta</td>
                        <td>$100</td>
                        <td>Se le cambio una solo llanta el resto todo bien</td>
                        <td>06/06/21</td>
                        <td>    
                        <select className='optionValue'>
                                <option value="Available">Disponible</option>  
                                <option value="Not available">No disponible</option>  
                             </select>
                        </td>
                    </tr>
                    <tr>
                        <td>04</td>
                        <td>648122</td>
                        <td>06/06/21</td>
                        <td>Cambio de LLanta</td>
                        <td>$100</td>
                        <td>Se le cambio una solo llanta el resto todo bien</td>
                        <td>06/06/21</td>
                        <td>    
                            <select className='optionValue'>
                                <option value="Available">Disponible</option>  
                                <option value="Not available">No disponible</option>  
                             </select>
                        </td>
                    </tr>
                    <tr>
                        <td>05</td>
                        <td>648122</td>
                        <td>06/06/21</td>
                        <td>Cambio de LLanta</td>
                        <td>$100</td>
                        <td>Se le cambio una solo llanta el resto todo bien</td>
                        <td>06/06/21</td>
                        <td>    
                            <select className='optionValue'>
                                <option  value="Available">Disponible</option>  
                                <option value="Not available">No disponible</option>  
                             </select>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
            <Page_Footer></Page_Footer>
        </article>
        </>
    )
}