import Link from "next/link";
import LetterButton from "./LetterButton";
import styles from "../styles/NavList.module.css";

export default function NavList() {
  return (
    <nav className={styles.navList}>
      <Link href='/'>
        <a>
          <LetterButton letterColor='lightblue'>Home</LetterButton>
        </a>
      </Link>
      <Link href='/about'>
        <a>
          <LetterButton letterColor='lightgreen'>About</LetterButton>
        </a>
      </Link>
      <Link href='/zine'>
        <a>
          <LetterButton>Zine</LetterButton>
        </a>
      </Link>
    </nav>
  );
}
