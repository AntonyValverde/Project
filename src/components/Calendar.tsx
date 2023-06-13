import axios from "axios"; /*Descargar en la terminal con: npm i axios*/
import React from "react";
import { useState } from "react";
import Page_Head from "./PageHead";
import Page_Footer from "./PageFooter";
import TableButton from "../components/TableButton";

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
  datap: TableData[];
}
const Calendar: React.FC<TableProps> = ({ datap }) => {
  const today = new Date();

  const meses: { [key: string]: string } = {
    "01": "enero",
    "02": "febrero",
    "03": "marzo",
    "04": "abril",
    "05": "mayo",
    "06": "junio",
    "07": "julio",
    "08": "agosto",
    "09": "septiembre",
    "10": "octubre",
    "11": "noviembre",
    "12": "diciembre",
  };
  const data = [
    { Id_unidad: 1, Estado: "excelente", Capacidad: "fuerte", Color: "Rojo" },
    { Id_unidad: 2, Estado: "excelente", Capacidad: "fuerte", Color: "Rojo" },
    { Id_unidad: 3, Estado: "excelente", Capacidad: "fuerte", Color: "Rojo" },
    { Id_unidad: 4, Estado: "excelente", Capacidad: "fuerte", Color: "Rojo" },
    { Id_unidad: 5, Estado: "excelente", Capacidad: "fuerte", Color: "Rojo" },

    // Agrega más datos según tus necesidades
  ];
  const convertirFecha = (fechaISO: string): string => {
    let fechaSinHora = fechaISO.split("T")[0];
    let fechaSeparada = fechaSinHora.split("-") as string[];
    let dia = fechaSeparada[2];
    let mes = meses[fechaSeparada[1]];
    let anho = fechaSeparada[0];
    const fechaFormateada = `${dia} de ${mes} del ${anho}`;
    return fechaFormateada;
  };

  const [termino, setTermino] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);

  const getInformation = async () => {
    if (termino) {
      setLoading(true);
      axios({
        method: "GET",
      })
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const [fechaNacimiento, setFechaNacimiento] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
          <div className="row">
            <label className="my-3" htmlFor="dateInput">
              Buses:
            </label>
            <div className="col-xl-11 col-lg-11 col-md-10 col-sm-8 col-xs-12">
              <select id="inputState" className="form-select">
                <option selected>Buses...</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div className="col-xl-11 col-lg-11 col-md-10 col-sm-8 col-xs-12">
            <div id="calendar">
              <div className="col-xl-11 col-lg-11 col-md-10 col-sm-8 col-xs-12">
                <div className="fechaa">Fecha:</div>
              </div>
            </div>
            <input
              className="form-control"
              id="dateInput"
              type="date"
              placeholder="Fecha de Nacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />
            <div className="flit">Filtrar:</div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-primary me-md-2" type="button">
                Buscar...
              </button>
            </div>
          </div>
        </div>
        <hr />

        <div className="tablaaa">
          <table className="tabla2">
            <thead>
              <tr>
                <th>Id_unidad</th>
                <th>Modelo</th>
                <th>Marca</th>
                <th>Año</th>
                <th>Placa</th>
              </tr>
            </thead>

            <tbody>
              {datap.map((item) => (
                <tr key={item.Id_unidad}>
                  <td>{item.Id_unidad}</td>
                  <td>{item.Modelo}</td>
                  <td>{item.Marca}</td>
                  <td>{item.Año}</td>
                  <td>{item.Placa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <TableButton
            data={data}
            Id_unidad={0}
            Estado={""}
            Capacidad={""}
            Color={""}
          />
        </div>
      </div>

      <footer>
        <Page_Footer></Page_Footer>
      </footer>
    </>
  );
};
export default Calendar;
