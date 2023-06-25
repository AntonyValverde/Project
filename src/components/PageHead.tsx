import router from "next/router";
import { RiHome2Line, RiMoonFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const InicioLinkClick = (event: { preventDefault: () => void }) => {
  event.preventDefault();
  router.push("/");
};
const Page_Head = ({}) => {
  return (
    <>
      <header>
        <div>
          <h1 className="etiqueta">
            Buses Universidad Nacional De Costa Rica
            <a href="#" className="linkInicio" onClick={InicioLinkClick}>
              <RiHome2Line className="iconHouse" /> Inicio
            </a>
            <img
              className="mante"
              src="/img/mantenimiento.png"
              alt="Not Found"
            />
          </h1>
        </div>
      </header>
    </>
  );
};
export default Page_Head;
