import Page_Footer from "@/components/PageFooter";
import Page_Head from "@/components/PageHead";
import TableForm from "@/components/Inventario/FormTable";
import { FormEvent, useState } from "react";
/*<link rel="stylesheet" href="/styles/Inven.css" />;}*/
export default function indexInven() {
  return (
    <>
      <div>
        <Page_Head></Page_Head>
      </div>

      <section>
        <div>
          <TableForm></TableForm>
        </div>
      </section>

      <footer>
        <Page_Footer></Page_Footer>
      </footer>
    </>
  );
}
