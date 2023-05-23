import Image from 'next/image'
import { Inter } from 'next/font/google'
import Page_Footer from '@/components/PageFooter'
import Page_Head from '@/components/PageHead'
import { Josefin_Sans } from 'next/font/google'
import Page_nav from '@/components/PageNav'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        {/*<Unidades></Unidades>*/}
        <Page_Head></Page_Head>
      </header>
      <nav>
        <Page_nav></Page_nav>
      </nav>
      <section className="contain flex text">

        <div className="column">
          <h3 className="title">Información</h3>
          <img className="images" src="/unidades.png" alt="Not Found" />
          <hr />
          <Link href="/addressUnits" className='button'>

            Unidades Disponibles

          </Link>
        </div>
        <div className="column">
          <h3 className="title">Información</h3>
          <img className="images" src="/reparacion.png" alt="Not Found" />
          <hr />
          <a href="#" className="button">Mantenimiento Unidades</a>
        </div>
        <div className="column">
          <h3 className="title">Información</h3>
          <img className="images" src="/calendario.png" alt="Not Found" />
          <hr />
          <Link href="/addressCites" className='button'>

            Cita Unidades

          </Link>
        </div>

        <div className="column">
            <h3 className="title">Información</h3>
            <img className="images" src="/ajuste.png" alt="Not Found" />
            <hr/>
            <Link href="/addressInven" className="button">
          
              Inventario Repuesto
            </Link>

          </div>
      </section>



      <footer>
        <Page_Footer></Page_Footer>
      </footer>

      {/**/}
      <script src='script.js'></script>
    </>
  )
}
