import React, { useState } from "react";
import { ProseType, proseList } from "../lib/prose";
import CycleButtons from "../components/CycleButtons";

import styles from "../styles/Prose.module.css";
import EmailFic from "../components/EmailFic";

export default function Prose() {
  const [proseIndex, setProseIndex] = useState(0);

  return (
    <div className={styles.container}>
      <CycleButtons
        itemsLength={proseList.length}
        itemsIndex={proseIndex}
        setItemsIndex={setProseIndex}
      />
      <div className={styles.proseTitle}>
        <h2>{proseList[proseIndex].title}</h2>
        <div>
          <h4>By: {proseList[proseIndex].author}</h4>
          <h4>Ship: {proseList[proseIndex].ship}</h4>
        </div>
      </div>
      <div className={styles.prose}>
        {proseIndex != 2 ? (
          proseList[proseIndex].paragraphs.map((paragraph, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
          ))
        ) : (
          <EmailFic />
        )}
      </div>
    </div>
  );
}
