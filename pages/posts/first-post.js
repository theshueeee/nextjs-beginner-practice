import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";


export default function FirstPost() {
    return (
    <Layout>
    <div>

    {/*Head component to set the title and meta description*/}
    <Head>
        <title>First Post</title>
        <meta name="description" content="My first post in Next.js"/>
    </Head>
    <h1>
        First Post
    </h1>
    <h2>
        <Link href="/">Back to home</Link>
    </h2>
    <p>
        Hello, this is my first post! 
        I am excited to start my journey with Next.js!
        <Link href="/more-info/introduction">More details</Link>
    </p>
    </div>
    </Layout>
    );
}