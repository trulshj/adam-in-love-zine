import styles from "../../styles/Prose.module.css";
import EmailFic from "../../components/EmailFic";

import { ProseType } from "../../lib/prose";
import ArtItem from "./Art";
import { MutableRefObject, ReactNode, useEffect, useRef } from "react";

export interface ProseItemProps {
  prose: ProseType;
}

export default function ProseItem({ prose }: ProseItemProps) {
  const ficContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ficContainer.current?.scrollTo({ top: 0 });
  });

  return (
    <div className={styles.container} ref={ficContainer}>
      <div className={styles.proseTitle}>
        <h2>{prose.title}</h2>
        <div>
          <h4>By: {prose.author}</h4>
          <h4>Ship: {prose.ship}</h4>
        </div>
      </div>
      <div className={styles.prose}>
        {!prose.email ? (
          prose.paragraphs?.map((paragraph, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
          ))
        ) : (
          <EmailFic />
        )}
        {!prose.collabArt ? null : (
          <div className={styles.collabArt}>
            <ArtItem art={prose.collabArt} />
          </div>
        )}
      </div>
    </div>
  );
}
