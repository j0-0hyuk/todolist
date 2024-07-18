import ListItem from "./ListItem";
import styles from "./List.module.css";

function List({ toDos, setToDos }) {
  return (
    <ul className={styles.list}>
      {toDos.map((toDo, index) => (
        <li key={index} id={index}>
          <ListItem id={index} toDo={toDo} toDos={toDos} setToDos={setToDos} />
        </li>
      ))}
    </ul>
  );
}

export default List;
