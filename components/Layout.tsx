import * as React from "react";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import NavList from "./NavList";
import Image from "next/image";

import ainosuke from "../public/Ainosuke_chibi.png";

export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.grid}>
        <NavList />
        <main className={styles.main}>{children}</main>
      </div>

      <Footer />

      <div className={styles.chibi}>
        <Image
          src={ainosuke}
          alt="Chibi Ainosuke-sama"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
