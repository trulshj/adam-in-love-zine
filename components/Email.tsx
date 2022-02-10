import styles from "../styles/Email.module.css";

export interface EmailProps {
  datetime: string;
  to: string;
  from: string;
  subject: string;
  content: string[];
}

export default function Email({
  datetime,
  to,
  from,
  subject,
  content,
}: EmailProps) {
  return (
    <div className={styles.emailContainer}>
      <div className={styles.metaData}>
        <span>{datetime}</span>
        <span>To: {to}</span>
        <span>From: {from}</span>
        <span>Subject: {subject}</span>
      </div>
      <div className={styles.emailContent}>
        {content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
