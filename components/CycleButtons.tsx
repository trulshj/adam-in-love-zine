import styles from "../styles/CycleButtons.module.css";

interface CycleButtonProps {
  itemsLength: number;
  itemsIndex: number;
  setItemsIndex: (idx: number) => void;
}

export default function CycleButtons({
  itemsLength,
  itemsIndex,
  setItemsIndex,
}: CycleButtonProps) {
  const decrement = () => {
    if (itemsIndex == 0) {
      setItemsIndex(itemsLength - 1);
    } else {
      setItemsIndex(itemsIndex - 1);
    }
  };

  const increment = () => {
    if (itemsIndex == itemsLength - 1) {
      setItemsIndex(0);
    } else {
      setItemsIndex(itemsIndex + 1);
    }
  };

  return (
    <div className={styles.buttonContainer}>
      <button onClick={decrement}>&lt;</button>
      <button onClick={increment}>&gt;</button>
    </div>
  );
}
