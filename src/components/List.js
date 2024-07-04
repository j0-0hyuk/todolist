import ListItem from "./ListItem";
import styles from "./List.module.css";

function List({ toDos, setToDos, onCheckClick, onDeleteClick }) {
  return (
    <ul className={styles.list}>
      {toDos.map((toDo, index) => (
        <li key={index} id={index}>
          <ListItem
            id={index}
            text={toDo.text}
            checked={toDo.checked}
            toDos={toDos}
            setToDos={setToDos}
            onCheckClick={onCheckClick}
            onDeleteClick={onDeleteClick}
          />
        </li>
      ))}
    </ul>
  );
}

export default List;
