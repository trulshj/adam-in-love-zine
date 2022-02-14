import styles from "../../styles/Prose.module.css";
import EmailFic from "../../components/EmailFic";

import { ProseType } from "../../lib/prose";
import ArtItem from "./Art";
import Author from "../Author";

import { useEffect, useRef } from "react";

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
          <Author author={prose.author} ship={prose.ship} />
        </div>
      </div>
      <div className={styles.prose}>
        {!prose.email ? (
          prose.paragraphs?.map((paragraph, idx) => (
            <p
              className={
                paragraph.trim().length == 1 ? styles.centered : undefined
              }
              key={idx}
              dangerouslySetInnerHTML={{ __html: paragraph.trim() }}
            ></p>
          ))
        ) : (
          <EmailFic />
        )}
        {console.log(prose.paragraphs)}
        {!prose.collabArt ? null : (
          <div className={styles.collabArt}>
            <ArtItem art={prose.collabArt} />
            <Author author={prose.collabArt.author} collabArt={true} />
          </div>
        )}
      </div>
    </div>
  );
}
