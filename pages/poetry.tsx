import React, { useState } from "react";
import { PoetryType, poetryList } from "../lib/poetry";
import CycleButtons from "../components/CycleButtons";

import styles from "../styles/Poetry.module.css";

export default function Poetry() {
  const [poetryIndex, setPoetryIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.poetryTitle}>
        <h2>{poetryList[poetryIndex].title}</h2>
        <div>
          <h4>By: {poetryList[poetryIndex].author}</h4>
          <h4>Ship: {poetryList[poetryIndex].ship}</h4>
        </div>
      </div>
      <div className={styles.poem}>
        {poetryList[poetryIndex].poem.map((stanza, idx) => (
          <p key={idx}>
            {stanza.map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </p>
        ))}
      </div>
      <CycleButtons
        itemsLength={poetryList.length}
        itemsIndex={poetryIndex}
        setItemsIndex={setPoetryIndex}
      />
    </div>
  );
}
