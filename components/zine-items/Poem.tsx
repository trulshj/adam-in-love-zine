import styles from "../../styles/Poetry.module.css";

import { PoetryType } from "../../lib/poetry";
import Author from "../Author";

export interface PoetryItemProps {
  poem: PoetryType;
}

export default function PoemItem({ poem }: PoetryItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.poetryTitle}>
        <h2>{poem.title}</h2>
        <Author author={poem.author} ship={poem.ship} />
      </div>
      <div className={styles.poem}>
        {poem.poem.map((stanza, idx) => (
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
    </div>
  );
}
