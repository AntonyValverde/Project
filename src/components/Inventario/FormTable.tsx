import React, { FormEvent, useState } from "react";

const TableForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [repuesto, setRepuesto] = useState("");
  const [especificacion, setEspecificacion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [tableData, setTableData] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData = {
      id,
      repuesto,
      especificacion,
      cantidad,
      precio,
    };

    setTableData([...tableData, newData]);
    handleCloseModal();
    resetForm();
  };

  const resetForm = () => {
    setId("");
    setRepuesto("");
    setEspecificacion("");
    setCantidad("");
    setPrecio("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  return (
    <div>
      {showModal && (
        <div className="modalForm">
          <div className="modal-contentForm">
            <span className="closeForm" onClick={handleCloseModal}>
              &times;
            </span>
            Agregar Repuesto
            <form onSubmit={handleSubmit}>
              <label htmlFor="id">ID:</label>
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
                Agregar
              </button>
            </form>
          </div>
        </div>
      )}
      <article className="columnTable">
        <div>
          <input
            className="Textsearch"
            type="text"
            id="Buscar"
            name="Buscar"
            placeholder="Buscar"
          />
        </div>

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
            <tr>
              <td>1</td>
              <td>Rotula</td>
              <td>Delantera</td>
              <td>3</td>
              <td>$60</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Hules</td>
              <td>Traseros</td>
              <td>3</td>
              <td>$70</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Anillos</td>
              <td>Embrague</td>
              <td>2</td>
              <td>$85</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Neumáticos</td>
              <td>R-21</td>
              <td>4</td>
              <td>$120</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Luces</td>
              <td>Largas</td>
              <td>2</td>
              <td>$150</td>
            </tr>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.repuesto}</td>
                <td>{data.especificacion}</td>
                <td>{data.cantidad}</td>
                <td>{data.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
      <button className="buttonSearch" onClick={() => setShowModal(true)}>
        Agregar datos
      </button>
    </div>
  );
};

export default TableForm;
