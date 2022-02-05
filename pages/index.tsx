import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adam in Love</title>
        <meta
          name="description"
          content="A zine about Adam from SK8 being in love <33"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        Welcome to Adam in Love Webzine, a project for Adam loves by Adam
        lovers. We are here to show our favourite character the love he deserves
        by showering him in affection from other characters! Feel free to scroll
        through the entire project, or find your favourite Adam ship in the
        &quot;Zine&quot; envelope! We hope you like all the wonderful Adam
        content created by our amazing contributors, and may this zine bring you
        some joy, valentines day or not.
        <br />
        <br />
        xoxo
        <br />
        Adam In Love moderators
      </p>
    </div>
  );
};

export default Home;
