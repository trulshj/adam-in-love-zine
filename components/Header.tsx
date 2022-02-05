import styles from "../styles/Header.module.css";
import Image from "next/image";

import titleLogo from "../public/title-logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={titleLogo} layout="responsive" alt="Adam in Love"></Image>
    </header>
  );
};

export default Header;
