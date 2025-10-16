import Link from "next/link";


export default function FirstPost() {
    return (
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
    );
}