import  TableMante2 from "@/components/Mante/TableMante";
import Page_Footer from "@/components/PageFooter";
import Page_Head from "@/components/PageHead";

export default function IndexMante() {
  return (
    <>
      <div>
        <Page_Head></Page_Head>
      </div>

      <section>
        <TableMante2/>
      </section>

      <div>
        <Page_Footer></Page_Footer>
      </div>
    </>
  );
}
