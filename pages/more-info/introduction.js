import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";

export default function Introduction() {
    return (
        <Layout>

        <Head>
            <title>More details</title>
        </Head>

        <div>
        My name is Theshueraj and this is my first time dealing with Next.js!
        <br />
        I am excited to start my journey with Next.js!
        <br />
        <Link href="/">Back to home</Link>
        </div>
        </Layout>
    
    );
}