import FormButton from "@/components/Units/formulario";
import ModalUnits from "@/components/Units/ModalUnits";
import "firebase/firestore";
import "firebase/compat/firestore";
import { getFirestore, collection, getDocs, addDoc } from "@firebase/firestore";
import { RiCloseLine } from "react-icons/ri";
import React, { FormEvent, useEffect, useState } from "react";
import { uploadFile } from "@/firebase/configUnits";
import {
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/alert";

export default function indexUnits() {

  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [link, setLink] = useState<string | null>(null)
  const [ID, setID] = useState<string | null>("1")
  const [loanding, setLoanding] = useState<boolean>(false)
  const [tableData, setTableData] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);


  const handleCloseModal = () => {
    setShowModal(false);
  };


  const handleFile = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = evt.target;
    if (!files || !files.length) return;
    setLoanding(true)
    const url = await uploadFile(files[0])
    setLink(url)
    setID(url)
    const id = url;
    const imagen = url;

    setLoanding(false)

    const newData = {
      id,
      imagen
    };

    try {
      const db = getFirestore();
      await addDoc(collection(db, "photosUnits"), newData);
      setTableData([...tableData, newData]);
      handleCloseModal();

    } catch (error) {
      console.error("Error adding data:", error);
    }

  }

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'photosUnits');
    getDocs(queryCollection)
      .then((res) => setData(res.docs.map((photosUnits) => ({ id: photosUnits.id, imagen: photosUnits.id, ...photosUnits.data() }))));
  }, []);

  return (
    <div >
      <div className="cuadro">
        <header>
          <h1 className="etiqueta">
            Unidades Disponibles
            <img className="mante" src="/img/disponible.png" alt="imagen" />
          </h1>
        </header>
      </div>
      <div>
        <section>
          <article>
            <div className="search-bar">
              <input type="text" placeholder="Buscar" className="inputY" />
              <input accept="image/*" multiple onChange={handleFile} type="file" />
            </div>
          </article>

          <article className="Units photos">

            {data.map((item) => (
              <div className="photos img" key={item.imagen}>
                <img src={item.imagen} alt="5" onClick={() => cambiarEstadoModal1(!estadoModal1)} />
              </div>

            ))}
 
          </article>
          <article >
            <ModalUnits estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}>
              <div className="modalForm">
                <section className="modal-contentForm">
                  <button onClick={() => cambiarEstadoModal1(!estadoModal1)}>
                    <span className="IconCancel">
                      <RiCloseLine />
                    </span>
                  </button>
                  <img className="photos img" src="/1.png"></img>
                </section>
              </div>

            </ModalUnits>
          </article>
        </section>
      </div>

      <div>
        <FormButton></FormButton>
      </div>

      {/**/}
    </div>
  );
}
