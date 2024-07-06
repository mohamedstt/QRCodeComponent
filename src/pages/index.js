import Head from "next/head";
import Image from "next/image";
import Card from "./Card";
import styles from "./app.module.css";



export default function Home() {
  return (
    <>
      <Head>
        <title>QR CODE COMPONENT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
      <Card/>
      </main>
    </>
  );
}
