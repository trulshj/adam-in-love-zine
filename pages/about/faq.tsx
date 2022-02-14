import FaqItem, { faqs } from "../../components/FaqItem";
import styles from "../../styles/about_pages/Faq.module.css";

export default function Faq() {
  return (
    <div className={styles.container}>
      <h1>FAQ</h1>
      {faqs.map((faq, idx) => (
        <FaqItem answer={faq.answer} question={faq.question} key={idx} />
      ))}
    </div>
  );
}
