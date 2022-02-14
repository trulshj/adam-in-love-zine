import ModProfile, { mods } from "../../components/ModProfile";
import styles from "../../styles/about_pages/Mods.module.css";

export default function Mods() {
  console.log(mods);
  return (
    <div className={styles.container}>
      <h1>Mods</h1>
      {mods.map((mod, idx) => (
        <div key={idx}>
          <ModProfile
            name={mod.name}
            pronouns={mod.pronouns}
            age={mod.age}
            username={mod.username}
            url={mod.url}
          />
          <span>{mod.role}</span>
          <h4>Experience:</h4>
          <ul>
            {mod.experience.map((exp, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: exp }}></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
