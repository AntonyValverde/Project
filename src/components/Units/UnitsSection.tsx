import Page_Footer from "../PageFooter"
import React, { useState } from "react";


const Units_Section = ({ }) => {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(!showForm);
    };
    return (
        <div>
            <section >

                <article className="Units photos">
                    {/*<img className="photos img" src="/1.png"></img>
                    <img className="photos img" src="/2.png"></img>
                    <img className="photos img" src="/3.png"></img>
                    <img className="photos img" src="/4.png"></img>
                    <img className="photos img" src="/5.png"></img>

                    <img className="photos img" src="/1.png"></img>
                    <img className="photos img" src="/2.png"></img>
                    <img className="photos img" src="/3.png"></img>
                    <img className="photos img" src="/4.png"></img>
                    <img className="photos img" src="/5.png"></img>*/}

                    <img className="photos img" src="https://image.lexica.art/full_jpg/621d1c64-ef6e-49e2-b2f1-851fc51686db" alt="1" />
                    <img className="photos img" src="https://image.lexica.art/full_jpg/c9a3129e-6d48-47d7-9265-1ebc4a32c735" alt="2" />
                    <img className="photos img" src="https://image.lexica.art/full_jpg/ee6c8a40-68e0-4dc6-99c1-7261926ad1f6" alt="3" />
                    <img className="photos img" src="https://image.lexica.art/full_jpg/56213690-71a7-4976-99cd-fb222b63d285" alt="4" />
                    <img className="photos img" src="https://image.lexica.art/full_jpg/81e31e64-83b0-43ad-85db-b5909792d993" alt="5" />
                    <img className="photos img" src="https://image.lexica.art/full_jpg/dcf0ee45-125e-47c3-a4bd-0aaa4ff688b1" alt="6" />
                    <img className="photos img" src="https://image.lexica.art/full_jpg/c5e6a686-1106-4744-9b62-bc95d9e360d0" alt="7" />
                    <img className="photos img" src="https://image.lexica.art/full_jpg/59b6bddc-2652-46fb-8f5e-04e0ae09f0df" alt="55" />
                    <img className="photos img" src="https://image.lexica.art/full_jpg/90193690-7742-4280-912b-44579af929c5" alt="44" />
                    <img className="photos img" src="https://image.lexica.art/full_jpg/de1f37dc-2496-4f9a-a4a9-b3dcb62ebbd7" alt="54" />
                    <img className="photos img" src="https://image.lexica.art/full_jpg/a59d5df2-b146-48a7-925b-ab3c79186f48" alt="14" />
                </article>
                <article className="container">
                    <div className="wrapper">
                        <div className="form-box login">
                            <h2>Units</h2>
                            <form action="#">
                                <div className="input-box">
                                    <span className="icon"></span>
                                    <input type="unidad" />
                                    <label>Unidad</label>
                                </div>
                                <div className="input-box">
                                    <span className="icon"></span>
                                    <input type="placa" />
                                    <label>Placa</label>

                                </div>
                                <div className="input-box">
                                    <span className="icon"></span>
                                    <input type="placa" />
                                    <label>Placa</label>

                                </div>
                                <div className="input-box">
                                    <span className="icon"></span>
                                    <input type="placa" />
                                    <label>Placa</label>

                                </div>
                                <div className="input-box">
                                    <span className="icon"></span>
                                    <input type="placa" />
                                    <label>Placa</label>

                                </div>
                                <div className="input-box">
                                    <span className="icon"></span>
                                    <input type="placa" />
                                    <label>Placa</label>

                                </div>
                            </form>

                        </div>
                    </div>
                </article>
                <article>
                    <div className="form-button-container">

                    </div>
                    <div className="buttonCRUDmodificar">
                        <button>MODIFICAR</button>
                    </div>
                    <div className="buttonCRUDeliminar">
                        <button>ELIMINAR</button>
                    </div>

                </article>
            </section>
            <Page_Footer></Page_Footer>
        </div>

    )
}
export default Units_Section