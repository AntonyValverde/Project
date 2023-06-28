import FormButton from "@/components/Units/formulario";
import "firebase/firestore";
import "firebase/compat/firestore";
import { getFirestore, collection, getDocs, addDoc, query, where } from "@firebase/firestore";
import { RiCloseLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { uploadFile } from "@/firebase/configUnits";
import Page_Head from "@/components/PageHead";
import { useRouter } from 'next/router';
 
export default function IndexUnits() {

  const [estadoModal1, cambiarEstadoModal1] = useState(false); {/*Para ventana emergente*/}
  const [data, setData] = useState<any[]>([]); {/*Para cargar datos de la firebase*/}
  const [link, setLink] = useState<string | null>(null) // Para cargar el link de la imagen subida a storage
  const [ID, setID] = useState<string | null>("1") // Para cargar el id de la imagen 
  const [loanding, setLoanding] = useState<boolean>(false) // Verifica la subida de la imagen a storage
  const [tableData, setTableData] = useState<any[]>([]); {/*Carga la variable con las imagenes subidas y pasadas a firebase*/}
  const [showModal, setShowModal] = useState(false); {/*Para el formulario*/}
  const [searchTerm, setSearchTerm] = useState(''); {/*Es la variable del buscador*/}
  const [date, setDate] = useState<any[]>([]); {/*Carga datos de la firebase*/}
  const [selectedItem, setSelectedItem] = useState(null); {/*Guarda el momento actual del dato de la firebase*/}

  useEffect(() => { {/*Busca en la firebase las placas buscadas por la "searchTerm" */}
    const fetchData = async () => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'photosUnits');


      if (searchTerm !== '') {
        const q = query(queryCollection, where('id', '==', searchTerm));

        try {
          const querySnapshot = await getDocs(q);
          const results = querySnapshot.docs.map((photosUnits) => ({
            id: photosUnits.id, imagen: photosUnits.id,
            ...photosUnits.data()
          }));
          setDate(results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {

        setDate([]);
      }
    }

    fetchData();
  }, [searchTerm]);


  interface ModalUnitsProps { //Interfaz de una ventana emergente con varias variables
    estado: boolean;
    cambiarEstado: (estado: boolean) => void;
    selectedItem: any;
    children?: React.ReactNode;
  }

  const ModalUnits: React.FC<ModalUnitsProps> = ({ estado, cambiarEstado, selectedItem }) => { //Abre la ventana emergente para mostrar la imagen 

    console.log(selectedItem?.imagen);
    

    return (
      <div style={{ display: estado ? 'block' : 'none' }}>  
        <div className="modalForme">
          <section className="modal-contentForme">
            <button onClick={() => cambiarEstado(false)}>
              <span className="IconCancele">
                <RiCloseLine />
              </span>
            </button>
            {selectedItem && ( 
              <div>
                <img src={selectedItem.imagen}></img>
              </div>
            )}
          </section>
        </div>
      </div>
    );
  };


  useEffect(() => { {/*Pide datos de la firebase para cargar las imagenes*/}
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'photosUnits');
    getDocs(queryCollection)
      .then((res) => setData(res.docs.map((photosUnits) => ({ id: photosUnits.id, imagen: photosUnits.id, ...photosUnits.data() }))));
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {  {/*Lee cada cambio en la barra de busqueda*/}
    setSearchTerm(event.target.value);
  };

  const handleCloseModal = () => { {/*Cierra el formulario*/}
    setShowModal(false);
  };

  const handleFile = async (evt: React.ChangeEvent<HTMLInputElement>) => {  {/*Sube el archivo de imagen seleccionado a la storage*/}
    var dato = prompt("Por favor, ingresa el numero de placa:");
    if (dato !== null && dato !== "") { {/*Si se coloca una placa entra a la condicion*/}
      const { files } = evt.target;
      if (!files || !files.length) return;  {/*Lee los archivos seleccionados y verifica si existen o si hay al menos uno*/}
      setLoanding(true)
       
      const url = await uploadFile(files[0], dato) // Sube el archivo a la storage y obtiene la URL de la imagen subida
      setLink(url)
      setID(url)
      const id = dato;
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
        refrescarPagine();
      } catch (error) {
        console.error("Error adding data:", error);
      }
    } else {
      console.log("No has ingresado ningún dato.");
    }
    
  }
  const router = useRouter();

  const refrescarPagine = () => {
    router.reload();
  };

  return (
    <div >
      <div className="cuadro">{/*El contenedor del header*/}
        <header >
          <Page_Head></Page_Head>
        </header>
      </div>
      <div>{/*Todo el cuarpo de la app*/}
        <section>
          <article>{/*Espacio donde van los componentes mensionados*/}
            <div className="search-bar">
              <input type="text" placeholder="Buscar" className="inputY" value={searchTerm} onChange={handleSearchChange} />{/*Barra de busqueda*/}
              <input accept="" multiple onChange={handleFile} type="file" />{/*Te manda a buscar una imagen a tu archivero*/}
              <ul className="results">{/*Un contenedor para las respuestas*/}
                {date.map((item, index) => (
                  <div key={index} className="item-container" onClick={() => { cambiarEstadoModal1(!estadoModal1); setSelectedItem(item ) }}>{/*Recorre las placas encontradas*/}
                    <p>{item.id}</p>
                  </div>
                ))}
              </ul>
            </div>

          </article>

          <article className="Units photos">{/*Un contenedor donde van las imagenes*/}

            {data.map((item) => (

              <div className="photos img" key={item.imagen} onClick={() => {cambiarEstadoModal1(!estadoModal1); setSelectedItem(item)}}>{/*Recorre todas las imagenes de la Firebase*/}
                <img src={item.imagen} alt="5" />
              </div>

            ))}

          </article>
          <article >{/*La funcion de los onCiick mandan parametros por esta funcion*/}
            <ModalUnits estado={estadoModal1} cambiarEstado={cambiarEstadoModal1} selectedItem={selectedItem}>
            </ModalUnits>
          </article>
        </section>
      </div>

      <div>{/*Formulario*/}
        <FormButton></FormButton>
      </div>

       
    </div>
  );
}