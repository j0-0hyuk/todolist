import { useState } from "react";
import styles from "./App.module.css";
import Input from "./components/CreateInput";
import List from "./components/List";

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
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>What should I do?</h1>
        <Input
          value={value}
          onFormSubmit={onFormSubmit}
          onValueChange={onValueChange}
        />
        <List
          toDos={toDos}
          setToDos={setToDos}
          onCheckClick={onCheckClick}
          onDeleteClick={onDeleteClick}
        />
      </div>
    </div>
  );
}

export default App;
