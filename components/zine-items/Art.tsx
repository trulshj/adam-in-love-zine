import Image from "next/image";
import { ArtType } from "../../lib/art";

import styles from "../../styles/Zine.module.css";

export interface ArtProps {
  art: ArtType;
}

export default function ArtItem({ art }: ArtProps) {
  return (
    <div className={styles.imageContainer}>
      <Image
        className={styles.art}
        src={art.image}
        alt={`Art by ${art.author.name} is loading in`}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
