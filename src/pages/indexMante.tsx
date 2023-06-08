import TableMante from '@/components/Mante/TableMante';
import Page_Footer from '@/components/PageFooter';
import Page_Head from '@/components/PageHead'

import Typewriter from 'typewriter-effect';

export default function indexMante() {
    return (
        <>
            <div>
                <Page_Head></Page_Head>
            </div>

            <section>
                <TableMante />
            </section>

            <div>
                <Page_Footer></Page_Footer>
            </div>
        </>
    )
}