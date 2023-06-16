import axios from "axios"; /*Descargar en la terminal con: npm i axios*/
import "firebase/compat/firestore";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import Page_Head from "./PageHead";
import Page_Footer from "./PageFooter";
import "firebase/firestore";
import firebaseConfig from "@/firebase/config";
import { initializeApp } from "firebase/app";
import React, { useEffect, useState } from "react";

const Calendar = () => {
    const [showTable, setShowTable] = useState(false);
    const [busD, setbusD] = useState<any[]>([]);
    const [tdata, setdata] = useState<any[]>([]);
    const [filV, setFilV] = useState("");

    const app = initializeApp(firebaseConfig);


    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            try {
                const querydb = await getDocs(collection(db, "RegisterUnits"));
                const data = querydb.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log("Data:", data);
                setdata(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);


    const [termino, setTermino] = useState<string>("");
    const [loading, setLoading] = useState<Boolean>(false);

    const getInformation = async () => {
        if (termino) {
            setLoading(true);
            axios({
                method: "GET",
            })
                .then((res) => { })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    useEffect(() => {
        const filtered = tdata.filter((data) =>

            Object.keys(data).some((key) =>
                data[key].toString().toLowerCase().includes(filV.toLowerCase())
            )
        );
        setbusD(filtered);
    },

        [filV, tdata]);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target as HTMLInputElement;
        setFilV(value);
    };

    const handleButtonClick = () => {
        setShowTable(!showTable);
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
                    <article>
                        <div>
                            <input
                                className="search"
                                type="text"
                                value={filV}
                                onChange={handleFilterChange}
                                name="Buscar"
                                placeholder="Busqueda Filtrada"
                            />
                        </div>
                    </article>
                </div>
                <hr />
                <div className="containerTable">
                    <table className="tableInven">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Modelo</th>
                                <th>Marca</th>
                                <th>Año</th>
                                <th>Placa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {busD.map((data) => (
                                <tr key={data.Unidad}>
                                    <td>{data.Unidad}</td>
                                    <td>{data.Modelo}</td>
                                    <td>{data.Marca}</td>
                                    <td>{data.Año}</td>
                                    <td>{data.Placa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <button onClick={handleButtonClick} className="buttonPau">
                        {showTable ? "Ver -" : "Ver +"}
                    </button>
                    {showTable && (
                        <div className="containerTable">
                            <table className="tableInven">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Estado</th>
                                        <th>Disponibilidad</th>
                                        <th>Capacidad</th>
                                        <th>Color</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {busD.map((data) => (
                                        <tr key={data.Unidad}>
                                            <td>{data.Unidad}</td>
                                            <td>{data.Estado}</td>
                                            <td>{data.Disponibilidad}</td>
                                            <td>{data.Capacidad}</td>
                                            <td>{data.Color}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    )}

                </div>

            </div >
            <footer>
                <Page_Footer></Page_Footer>
            </footer>

        </>
    );
};
export default Calendar;
