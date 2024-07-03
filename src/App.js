import { useState } from "react";
import styles from "./App.module.css";
import ToDoInput from "./components/ToDoInput";
import ListItem from "./components/ListItem";

function App() {
  const [value, setValue] = useState("");
  const [toDos, setToDos] = useState([]);

  const onValueChange = (e) => {
    setValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setToDos([
      ...toDos,
      {
        text: value,
        checked: false,
      },
    ]);
    setValue("");
  };

  const onDeleteClick = (e) => {
    const id = parseInt(e.target.parentElement.id);
    setToDos(toDos.filter((toDo, index) => index !== id));
  };

  const onCheckClick = (e) => {
    const id = parseInt(e.target.parentElement.id);
    setToDos(
      toDos.map((toDo, index) =>
        index === id ? { text: toDo.text, checked: !toDo.checked } : toDo
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>What should I do?</h1>
        <ToDoInput
          value={value}
          onFormSubmit={onFormSubmit}
          onValueChange={onValueChange}
        />
        <ul className={styles.ul}>
          {toDos.map((toDo, index) => (
            <li key={index} id={index}>
              <ListItem
                text={toDo.text}
                checked={toDo.checked}
                onCheckClick={onCheckClick}
                onDeleteClick={onDeleteClick}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
