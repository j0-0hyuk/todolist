import ListItem from "./ListItem";
import styles from "./List.module.css";

function List({ toDos, setToDos }) {
  const onDeleteClick = (e) => {
    const id = parseInt(e.target.parentElement.parentElement.id);
    setToDos(toDos.filter((toDo, index) => index !== id));
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
