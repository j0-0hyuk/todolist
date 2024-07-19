import { useState } from "react";
import styles from "./ListItem.module.css";
import UpdateInput from "./UpdateInput";

function ListItem({ id, toDo, toDos, setToDos }) {
  const [upInput, setUpInput] = useState(false);
  const onUpdateClick = () => {
    setUpInput(!upInput);
  };

  const onDeleteClick = (e) => {
    if (window.confirm("이 할일을 삭제하시겠습니까?")) {
      const id = parseInt(e.target.parentElement.parentElement.id);
      setToDos(toDos.filter((_, index) => index !== id));
    }
  };

  const onCheckClick = (e) => {
    const id = parseInt(e.target.parentElement.parentElement.id);
    setToDos(
      toDos.map((toDo, index) =>
        index === id ? { text: toDo.text, checked: !toDo.checked } : toDo
      )
    );
  };
  return (
    <div className={styles.list_item}>
      <button onClick={onCheckClick}>{toDo.checked ? "✅" : "⬜"}</button>
      <span className={styles.todo_content}>
        {upInput ? (
          <UpdateInput
            id={id}
            text={toDo.text}
            checked={toDo.checked}
            toDos={toDos}
            setToDos={setToDos}
            setUpInput={setUpInput}
          />
        ) : (
          <span className={toDo.checked ? styles.line_through : ""}>
            {toDo.text}
          </span>
        )}
      </span>
      <button className={styles.update_button} onClick={onUpdateClick}>
        ✏️
      </button>
      <button onClick={onDeleteClick}>❌</button>
    </div>
  );
}

export default ListItem;
