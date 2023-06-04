import Page_Footer from "@/components/PageFooter"
import Page_Head from "@/components/PageHead"
import Page_nav from "@/components/PageNav"

export default function indexInven() {

  return (
    <>
      <div>
        <Page_Head></Page_Head>
      </div>
      <article className="columnTable">
        <div>
          <input className="search" type="text" id="Buscar" name="Buscar" placeholder="Buscar" />

        </div>

        <table className="tabla">
          <thead>
            <tr>
              <th>Id</th>
              <th>Repuesto</th>
              <th>Especificación</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Rotula</td>
              <td>Delantera</td>
              <td>3</td>
              <td>$60</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Hules</td>
              <td>Traseros</td>
              <td>3</td>
              <td>$70</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Anillos</td>
              <td>Embrague</td>
              <td>2</td>
              <td>$85</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Neumáticos</td>
              <td>R-21</td>
              <td>4</td>
              <td>$120</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Luces</td>
              <td>Largas</td>
              <td>2</td>
              <td>$150</td>
            </tr>
          </tbody>
        </table>
      </article>
      <div>
        <button className="buttonSearch" type="submit">Agregar</button>
      </div>
      <footer>
        <Page_Footer></Page_Footer>
      </footer>
    </>

  )

}
