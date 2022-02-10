import styles from "../styles/Email.module.css";
import { emails } from "../lib/emails";
import Email from "./Email";
import { emailFicEnding } from "../lib/emails";

export default function EmailFic() {
  return (
    <div className={styles.container}>
      {emails.map((email, idx) => (
        <Email
          key={idx}
          datetime={email.datetime}
          to={email.to}
          from={email.from}
          subject={email.subject}
          content={email.content}
        />
      ))}
      <div className={styles.ending}>
        {emailFicEnding.map((paragraph, idx) => (
          <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
        ))}
      </div>
    </div>
  );
}
