import type { NextPage } from "next";
import Link from "next/link";
import LetterButton from "../components/LetterButton";
import { buttonType } from "../components/NavList";

import styles from "../styles/ZineNav.module.css";

const ZineNav: NextPage = () => {
  const buttons: buttonType[] = [
    { href: "/zine/full", text: "Full Zine", color: "white" },
    { href: "/zine/art", text: "Art Only", color: "white" },
    { href: "/zine/fics", text: "Fics Only", color: "white" },
  ];
  return (
    <div className={styles.container}>
      <h2>How do you want to view the zine?</h2>
      <div className={styles.buttonContainer}>
        {buttons.map((button, idx) => (
          <Link key={idx} href={button.href}>
            <a>
              <LetterButton letterColor={button.color}>
                {button.text}
              </LetterButton>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ZineNav;
