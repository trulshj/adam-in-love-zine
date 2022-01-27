import * as React from "react";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import NavList from "./NavList";

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
    </div>
  );
}
