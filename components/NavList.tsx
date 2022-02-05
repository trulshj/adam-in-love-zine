import { useState } from "react";
import Link from "next/link";
import LetterButton from "./LetterButton";
import styles from "../styles/NavList.module.css";

interface buttonType {
  href: string;
  text: string;
  color?: string;
}

export default function NavList() {
  const [showMenu, setShowMenu] = useState(false);

  const buttons: buttonType[] = [
    { href: "/", text: "Home", color: "white" },
    { href: "/about", text: "About", color: "white" },
    { href: "/zine", text: "Art", color: "white" },
    { href: "/poetry", text: "Poetry", color: "white" },
    { href: "/prose", text: "Prose", color: "white" },
  ];

  return (
    <nav
      className={`${styles.navList} ${
        showMenu ? styles.activeMenu : styles.inactiveMenu
      }`}
    >
      {buttons.map((button, idx) => (
        <Link key={idx} href={button.href}>
          <a>
            <LetterButton letterColor={button.color}>
              {button.text}
            </LetterButton>
          </a>
        </Link>
      ))}
      <button
        className={`${styles.menuButton} ${
          showMenu ? styles.activeButton : styles.inactiveButton
        }`}
        onClick={() => setShowMenu(!showMenu)}
      >
        Menu
      </button>
    </nav>
  );
}
