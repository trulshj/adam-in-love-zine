import React from "react";
import styles from "../styles/LetterButton.module.css";

interface LetterButtonProps {
  children: React.ReactNode;
  letterColor?: string;
}

const LetterButton = ({
  children,
  letterColor = "lightpink",
}: LetterButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.wrapper}>
        <div className={styles.lid + " " + styles.one}></div>
        <div className={styles.lid + " " + styles.two}></div>
        <div className={styles.envelope}></div>
        <div
          className={styles.letter}
          style={{ backgroundColor: letterColor }}
        ></div>
      </div>
      <span className={styles.buttonText}>{children}</span>
    </div>
  );
};

export default LetterButton;
