import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";

import styles from "../styles/Zine.module.css";

import { art } from "../lib/zines";

const Zine: NextPage = () => {
  const [artIndex, setArtIndex] = useState(0);

  const prevArt = () => {
    if (artIndex == 0) {
      setArtIndex(art.length - 1);
    } else {
      setArtIndex(artIndex - 1);
    }
  };

  const nextArt = () => {
    if (artIndex == art.length - 1) {
      setArtIndex(0);
    } else {
      setArtIndex(artIndex + 1);
    }
    console.log(artIndex);
  };

  return (
    <div className={styles.container}>
      <Image
        className={styles.art}
        src={art[artIndex]}
        alt="Adam in Love Zine Art"
      />
      <div className={styles.buttonContainer}>
        <button onClick={prevArt}>&lt;</button>
        <button onClick={nextArt}>&gt;</button>
      </div>
    </div>
  );
};

export default Zine;