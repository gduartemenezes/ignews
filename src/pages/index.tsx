import styles from "../styles/home.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Renê</title>
      </Head>
      <h2 className={styles.title}>hello</h2>
    </>
  );
}
