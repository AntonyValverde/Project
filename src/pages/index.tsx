import Image from 'next/image'
import { Inter } from 'next/font/google'
import Page_Footer from '@/components/PageFooter'
import Page_Head from '@/components/PageHead'
import { Josefin_Sans } from 'next/font/google'
import Page_nav from '@/components/PageNav'
import Link from 'next/link'
import html2canvas from 'html2canvas';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <Page_Head></Page_Head>
      </header>
      <nav>
        <Page_nav></Page_nav>
      </nav>
      <section className="contain flex text">

        <div className="column">
          <h3 className="title">Información</h3>
          <img className="images" src="/img/unidades.png" alt="Not Found" />
          <hr />
          <Link href="/indexUnits" className='button'>Registro Unidades
          </Link>
        </div>
        <div className="column">
          <h3 className="title">Información</h3>
          <img className="images" src="/img/calendario.png" alt="Not Found" />
          <hr />
          <a href="#" className="button">Citas Unidades</a>
        </div>
        <div className="column">
          <h3 className="title">Información</h3>
          <img className="images" src="/img/reparacion.png" alt="Not Found" />
          <hr />
          <Link href="/addressCites" className='button'>Mantenimiento Unidades
          </Link>
        </div>

        <div className="column">
            <h3 className="title">Información</h3>
            <img className="images" src="/img/ajuste.png" alt="Not Found" />
            <hr/>
            <Link href="/indexInven" className="button">Inventario Repuesto
            </Link>

          </div>
      </section>

      <footer>
        <Page_Footer></Page_Footer>
      </footer>
    </>
  )
}
