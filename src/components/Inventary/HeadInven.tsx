import Mant_Inven  from "./InvenMant"
const Head_Inven = ({}) => {

    return(

        <div>
            <header>
            <h1 className="etiqueta">
                Buses Universidad Nacional De Costa Rica
                <img className="mante" src="mantenimiento.png" alt="Not Found" />
            </h1>
            <Mant_Inven ></Mant_Inven>
            </header>
        </div>

    )

}
export default Head_Inven