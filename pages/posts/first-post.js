import Link from "next/link";
import Layout from "../../components/layout";


export default function FirstPost() {
    return (
    <Layout>
    <div>
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