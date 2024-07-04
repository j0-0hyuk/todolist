import { useState } from "react";
import styles from "./ListItem.module.css";
import UpdateInput from "./UpdateInput";

function ListItem({
  id,
  text,
  checked,
  toDos,
  setToDos,
  onCheckClick,
  onDeleteClick,
}) {
  const [upInput, setUpInput] = useState(false);
  const onUpdateClick = () => {
    setUpInput(!upInput);
  };
  return (
    <>
      <button onClick={onCheckClick}>{checked ? "✅" : "⬜"}</button>
      <span className={styles.todo_content}>
        {upInput ? (
          <UpdateInput
            id={id}
            text={text}
            checked={checked}
            toDos={toDos}
            setToDos={setToDos}
            setUpInput={setUpInput}
          />
        ) : (
          <span className={checked ? styles.line_through : ""}>{text}</span>
        )}
      </span>
      <button className={styles.update_button} onClick={onUpdateClick}>
        ✏️
      </button>
      <button onClick={onDeleteClick}>❌</button>
    </>
  );
}

export default ListItem;
