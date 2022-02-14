import ContributorItem, {
  contributors,
} from "../../components/ContributorItem";
import styles from "../../styles/about_pages/Contributors.module.css";

export default function Contributors() {
  return (
    <div className={styles.container}>
      <h1>Contributors</h1>
      <div>
        {contributors.map((c, idx) => (
          <ContributorItem
            key={idx}
            author={c.author}
            introduction={c.introduction}
            position={c.position}
            icon={c.icon}
          />
        ))}
      </div>
    </div>
  );
}
