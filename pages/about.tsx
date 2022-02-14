import type { NextPage } from "next";
import Link from "next/link";
import LetterButton from "../components/LetterButton";
import { buttonType } from "../components/NavList";

import styles from "../styles/about_pages/About.module.css";

const About: NextPage = () => {
  const buttons: buttonType[] = [
    { href: "/about/faq", text: "FAQ", color: "white" },
    { href: "/about/mods", text: "Mods", color: "white" },
  ];
  return (
    <div className={styles.container}>
      <h2>About</h2>
      <p>
        For all Adam lovers, an upcoming website featuring art, prose, and
        poetry of Adam/Shindo Ainosuke in love and being loved.
      </p>
      <div className={styles.buttonContainer}>
        {buttons.map((button, idx) => (
          <Link key={idx} href={button.href}>
            <a>
              <LetterButton letterColor="white">{button.text}</LetterButton>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
