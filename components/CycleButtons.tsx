import styles from "../styles/CycleButtons.module.css";

interface CycleButtonProps {
  increment: () => void;
  decrement: () => void;
}

export default function CycleButtons({
  increment,
  decrement,
}: CycleButtonProps) {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={decrement}>&lt;</button>
      <button onClick={increment}>&gt;</button>
    </div>
  );
}
