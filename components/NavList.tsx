import LetterButton from "./LetterButton";
import styles from "../styles/NavList.module.css";

export default function NavList() {
  return (
    <nav className={styles.navList}>
      <LetterButton letterColor="lightblue">Home</LetterButton>
      <LetterButton letterColor="lightgreen">About</LetterButton>
      <LetterButton>Zine</LetterButton>
    </nav>
  );
}
