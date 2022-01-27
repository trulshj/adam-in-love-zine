import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import homeStyles from "../styles/Home.module.css";
import styles from "../styles/About.module.css";

import LetterButton from "../components/LetterButton";
import Footer from "../components/Footer";

const About: NextPage = () => {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="A zine about Adam from SK8 being in love <33"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={homeStyles.main}>
        <LetterButton></LetterButton>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default About;
