import Page_Footer from "@/components/PageFooter";
import Page_Head from "@/components/PageHead";
import TableForm from "@/components/Inventario/FormTable";
import { FormEvent, useState } from "react";

export default function IndexInven() {
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
