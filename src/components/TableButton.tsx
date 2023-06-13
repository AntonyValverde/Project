import React, { useState } from "react";

interface TableButtonProps {
  data: any[];
  Id_unidad: number;
  Estado: string;
  Capacidad: string;
  Color: string; // Los datos que se mostrarán en la tabla
}

const TableButton: React.FC<TableButtonProps> = ({ data }) => {
  const [showTable, setShowTable] = useState(false);

  const handleButtonClick = () => {
    setShowTable(!showTable);
  };

  return (
    <>
      <div>
        <button onClick={handleButtonClick} className="buttonPau">
          {showTable ? "Ver -" : "Ver +"}
        </button>
        {showTable && (
          <div className="tablaaaa">
            <table className="tabla1">
              <thead>
                <tr>
                  <th>Id_unidad</th>
                  <th>Estado</th>
                  <th>Capacidad</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.Id_unidad}>
                    <td>{item.Id_unidad}</td>
                    <td>{item.Estado}</td>
                    <td>{item.Capacidad}</td>
                    <td>{item.Color}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default TableButton;
