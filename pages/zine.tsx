import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";

import styles from "../styles/Zine.module.css";

import { art } from "../lib/zines";
import CycleButtons from "../components/CycleButtons";

const Zine: NextPage = () => {
  const [artIndex, setArtIndex] = useState(0);

  return (
    <div className={styles.container}>
      <Image
        className={styles.art}
        src={art[artIndex]}
        alt="Adam in Love Zine Art"
      />
      <CycleButtons
        itemsLength={art.length}
        itemsIndex={artIndex}
        setItemsIndex={setArtIndex}
      />
    </div>
  );
};

export default Zine;
