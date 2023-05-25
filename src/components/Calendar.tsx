import axios from 'axios'; /*Descargar en la terminal con: npm i axios*/
import React from 'react'
import { useState } from 'react'
import Page_Head from './PageHead';
import Page_Footer from './PageFooter';

interface TableData {
  Id_unidad: number;
  Modelo: string;
  Marca: string;
  Año: number;
  Placa: number;
  Estado: string;
  Capacidad: string;
  Color: string;
}

interface TableProps {
  data: TableData[];
}
const Calendar: React.FC<TableProps> = ({ data }) => {
  const today = new Date()

  const meses: { [key: string]: string } = {
    '01': 'enero',
    '02': 'febrero',
    '03': 'marzo',
    '04': 'abril',
    '05': 'mayo',
    '06': 'junio',
    '07': 'julio',
    '08': 'agosto',
    '09': 'septiembre',
    '10': 'octubre',
    '11': 'noviembre',
    '12': 'diciembre'
  }
  const convertirFecha = (fechaISO: string): string => {
    let fechaSinHora = fechaISO.split('T')[0]
    let fechaSeparada = fechaSinHora.split('-') as string[]
    let dia = fechaSeparada[2]
    let mes = meses[fechaSeparada[1]]
    let anho = fechaSeparada[0]
    const fechaFormateada = `${dia} de ${mes} del ${anho}`;
    return fechaFormateada;
  }

  const [termino, setTermino] = useState<string>('');
  const [loading, setLoading] = useState<Boolean>(false)



  const getInformation = async () => {
    if (termino) {
      setLoading(true)
      axios({
        method: 'GET',

      }).then((res) => {

      }).catch((err) => {
        console.log(err)
      }).finally(() => {
        setLoading(false)
      })
    }
  }

  const [fechaNacimiento, setFechaNacimiento] = useState('')



  return (
    <>

      <header>
        <Page_Head></Page_Head>
      </header>
      <div>
        <h2 className="title2">Citas de Mantenimiento
          <img className="busLogo" src="/img/busEtiqueta.png" alt="Not Found" />
        </h2>
      </div>

      <div className="container mt-5">

        <h3 className='text-center'>Calendario de Mantenimientos Preventivos</h3>
        <hr />
        <div className='contp'>
          <div className='row'>
            <label className="my-3" htmlFor='dateInput'>Buses:</label>
            <div className='col-xl-11 col-lg-11 col-md-10 col-sm-8 col-xs-12'>
              <select id="inputState" className="form-select">

                <option selected>Buses...</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div className='col-xl-11 col-lg-11 col-md-10 col-sm-8 col-xs-12'>
            <div id="calendar">
              <div className='col-xl-11 col-lg-11 col-md-10 col-sm-8 col-xs-12'>

                <div className="fechaa">Fecha:</div>
              </div>
            </div>
            <input className="form-control" id='dateInput' type='date' placeholder='Fecha de Nacimiento' value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
            <div className="flit">Filtrar:</div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">

              <button className="btn btn-primary me-md-2" type="button">Buscar...</button>

            </div>

          </div>
        </div>
        <hr />
       
          <table className='table-cites'>
            <thead>
              <tr>
                <th>Id_unidad</th>
                <th>Modelo</th>
                <th>Marca</th>
                <th>Año</th>
                <th>Placa</th>
                <th>Estado</th>
                <th>Capacidad</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.Id_unidad}>
                  <td>{item.Id_unidad}</td>
                  <td>{item.Modelo}</td>
                  <td>{item.Marca}</td>
                  <td>{item.Año}</td>
                  <td>{item.Placa}</td>
                  <td>{item.Estado}</td>
                  <td>{item.Capacidad}</td>
                  <td>{item.Color}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      <footer>
        <Page_Footer></Page_Footer>
      </footer>
    </>
  )

}
export default Calendar