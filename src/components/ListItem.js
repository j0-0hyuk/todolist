import styles from "./ListItem.module.css";

function ListItem({ text, checked, onCheckClick, onDeleteClick }) {
  return (
    <>
      <button onClick={onCheckClick}>{checked ? "✅" : "⬜"}</button>
      <span
        className={`${styles.todo_content} ${
          checked ? styles.line_through : ""
        }`}
      >
        {text}
      </span>
      <button className={styles.update_button}>✏️</button>
      <button onClick={onDeleteClick}>❌</button>
    </>
  );
}

export default ListItem;
