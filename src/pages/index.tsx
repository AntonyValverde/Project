import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Page_Footer from "@/components/PageFooter";
import Page_Head from "@/components/PageHead";
import { Josefin_Sans } from "next/font/google";
import Page_nav from "@/components/PageNav";
import Link from "next/link";
import { RiMoonFill } from "react-icons/ri";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>
        <Page_Head></Page_Head>
      </header>
      <nav>
        <Page_nav></Page_nav>
      </nav>

      <section className="flex text">
        <div className="column">
          <h3 className="title">Register Units</h3>
          <img className="images" src="/img/unidades.png" alt="Not Found" />
          <Link href="/indexUnits" className="button">
            Registro Unidades
          </Link>
        </div>

        <div className="column">
          <h3 className="title">Date Units</h3>
          <img className="images" src="/img/calendario.png" alt="Not Found" />
          <Link href="/indexCita" className="button">
            Citas Unidades
          </Link>
        </div>

        <div className="column">
          <h3 className="title">Maintenance Units</h3>
          <img className="images" src="/img/reparacion.png" alt="Not Found" />

          <Link href="/indexMante" className="button">
            Mantenimiento Unidades
          </Link>
        </div>

        <div className="column">
          <h3 className="title">Spare Parts Inventary</h3>
          <img className="images" src="/img/ajuste.png" alt="Not Found" />
          <Link href="/indexInven" className="button">
            Inventario Repuesto
          </Link>
        </div>
      </section>

      <footer>
        <Page_Footer></Page_Footer>
      </footer>
    </>
  );
}
