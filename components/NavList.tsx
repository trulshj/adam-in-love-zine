import Link from "next/link";
import LetterButton from "./LetterButton";
import styles from "../styles/NavList.module.css";

export default function NavList() {
  return (
    <nav className={styles.navList}>
      <Link href='/' passHref>
        <LetterButton letterColor='lightblue'>Home</LetterButton>
      </Link>
      <Link href='/about' passHref>
        <LetterButton letterColor='lightgreen'>About</LetterButton>
      </Link>
      <Link href='/zine' passHref>
        <LetterButton>Zine</LetterButton>
      </Link>
    </nav>
  );
}
