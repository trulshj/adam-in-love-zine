import styles from "../styles/Header.module.css";
import Image from "next/image";

import titleLogo from "../public/title-logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={titleLogo} layout="responsive" alt="Adam in Love"></Image>
      </div>
    </header>
  );
};

export default Header;
