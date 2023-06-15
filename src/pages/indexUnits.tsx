import FormButton from "@/components/Units/formulario";
import ModalUnits from "@/components/Units/ModalUnits";
import { getFirestore, collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { uploadFile } from "@/firebase/configUnits";
import { useParams } from "react-router-dom";
import firebaseConfig from "@/firebase/config";

export default function indexUnits() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [link, setLink] = useState<string | null>(null)
  const [loanding, setLoanding] = useState<boolean>(false)
   

  const handleFile = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = evt.target;
    if (!files || !files.length) return;
    setLoanding(true)
    const url = await uploadFile(files[0])
    setLink(url)
    setLoanding(false)
  }

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'photosUnits');
    getDocs(queryCollection)
      .then((res) => setData(res.docs.map((photosUnits) => ({ id: photosUnits.id, imagen: photosUnits.id, ...photosUnits.data() }))));
  }, []);

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
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
                <img src={item.imagen} alt="5" onClick={() => cambiarEstadoModal1(!estadoModal1)}/>
                 
              </div>
            ))}


          </article>
        </section>
      </div>

      <div>
        <FormButton></FormButton>
      </div>
      <div>
        <ModalUnits estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}>
          <section className="contenidoModal">
            <img className="photos img" src="/1.png"></img>
          </section>
        </ModalUnits>
      </div>
      {/**/}
    </div>
  );
}
