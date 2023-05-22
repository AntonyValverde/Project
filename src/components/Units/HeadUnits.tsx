import Units_Section from "./UnitsSection"
const Units_head = ({}) => {
    return (
        <div className='cuadro'>
            <header>
                <h1 className="etiqueta">Unidades Disponibles
                    <img className="mante" src="/disponible.png" alt="imagen" />
                </h1>
                <Units_Section></Units_Section>
            </header>
            
        </div>
    )
}

export default Units_head