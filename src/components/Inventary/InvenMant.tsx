import Page_Footer from "../PageFooter"
const Mant_Inven = ({}) => {

    return(
      <>
      <nav>
        <div>
        <h2 className="titleMant">
          Inventario De Repuestos
          <img className="LogoMant" src="/ajuste.png" alt="Not Found" />
        </h2>
        </div>
      </nav>

    <article className="columnTable">
      <div>
      <input className="search" type="text" id="Buscar" name="Buscar" placeholder="Buscar"/>
      <img className="imgSearch" src="/search.png" alt="Not Found" />
      </div>
    <table className="tabla">
      <thead>
        <tr>
          <th>Id</th>
          <th>Repuesto</th>
          <th>Especificación</th>
          <th>Cantidad</th>
          <th>Fecha de salida</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Rotula</td>
          <td>Delantera</td>
          <td>3</td>
          <td>2023-02-01</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Hules</td>
          <td>Traseros</td>
          <td>3</td>
          <td>2023-05-01</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Anillos</td>
          <td>Embrague</td>
          <td>2</td>
          <td>2023-03-03</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Neumáticos</td>
          <td>R-21</td>
          <td>4</td>
          <td>2023-05-17</td>
        </tr>
      </tbody>
    </table>
    </article>
    
    <section>
      <div>

      </div>
    </section>

    <footer>
      <Page_Footer></Page_Footer>
    </footer>
      </>

    )
}
export default Mant_Inven 