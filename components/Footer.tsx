import FooterLink, { FooterLinkProps } from "./FooterLink";
import Image from "next/image";

import ainosuke from "../public/Ainosuke_chibi.png";
import styles from "../styles/Footer.module.css";

const footerProfiles: FooterLinkProps[] = [
  { name: "teacup", verb: "Powered", url: "https://github.com/trulshj" },
  { name: "tulip", verb: "Design", url: "https://twitter.com/fishnobi" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {footerProfiles.map((profile) => (
        <FooterLink
          key={profile.name + profile.verb}
          name={profile.name}
          verb={profile.verb}
          url={profile.url}
        />
      ))}
    </footer>
  );
};

export default Footer;
