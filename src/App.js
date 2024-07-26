import { useState, useEffect } from "react";
import styles from "./App.module.css";
import CreateInput from "./components/CreateInput";
import List from "./components/List";

const TODOS_KEY = "todos";

function App() {
  const savedToDos = localStorage.getItem(TODOS_KEY) || "[]";
  const [toDos, setToDos] = useState(JSON.parse(savedToDos));

  useEffect(
    () => localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)),
    [toDos]
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>What should I do?</h1>
        <CreateInput toDos={toDos} setToDos={setToDos} />
        <List toDos={toDos} setToDos={setToDos} />
      </div>
    </div>
  );
}

export default App;
